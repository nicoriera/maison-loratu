<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as yup from "yup";

const event = {
  title: "Atelier relaxation ludique",
  audience: "Pour les enfants de 5 à 8 ans",
  date: "Les 26 et 28 octobre 2026",
  time: "15 h – 16 h 30",
  price: "30 € · goûter inclus",
  location: "Parc du Maharin, 64600 Anglet",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Parc+du+Maharin+64600+Anglet",
  note: "Prévoir un vêtement chaud",
  poster: "/images/pop-up.png",
};

const isOpen = ref(false);
const isFormVisible = ref(false);
const isSubmitted = ref(false);
const isSubmitting = ref(false);
const submitError = ref("");
const contactEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mbdzazdg";
const form = ref(null);
const email = ref("");
const phone = ref("");
const selectedDate = ref("");
const consent = ref(false);
const errors = ref({});
const dialog = ref(null);
const closeButton = ref(null);
const previousActiveElement = ref(null);
const reservationSchema = yup.object({
  requestedDate: yup.string().required("Choisissez une date."),
  email: yup
    .string()
    .trim()
    .email("Saisissez une adresse e-mail valide.")
    .required("Indiquez votre adresse e-mail."),
  phone: yup
    .string()
    .trim()
    .matches(/^[+()\d\s.-]{6,20}$/, "Saisissez un numéro de téléphone valide.")
    .required("Indiquez votre numéro de téléphone."),
  consent: yup
    .boolean()
    .oneOf([true], "Votre accord est nécessaire pour être recontacté·e."),
});

const dismiss = () => {
  isOpen.value = false;
  if (isSubmitted.value) resetReservation();
  nextTick(() => previousActiveElement.value?.focus?.());
};

const openPopup = () => {
  if (isSubmitted.value) resetReservation();
  isOpen.value = true;
  nextTick(() => closeButton.value?.focus());
};

const resetReservation = () => {
  isFormVisible.value = false;
  isSubmitted.value = false;
  isSubmitting.value = false;
  submitError.value = "";
  errors.value = {};
  selectedDate.value = "";
  email.value = "";
  phone.value = "";
  consent.value = false;
};

const returnToDetails = () => {
  isFormVisible.value = false;
  submitError.value = "";
  errors.value = {};
  nextTick(() => {
    const visibleHeading = [...(dialog.value?.querySelectorAll("[data-event-popup-heading]") || [])]
      .find((heading) => heading.offsetParent !== null);
    visibleHeading?.focus();
  });
};

const showForm = () => {
  isFormVisible.value = true;
  nextTick(() => dialog.value?.querySelector("input")?.focus());
};

const submitReservation = async () => {
  errors.value = {};
  try {
    await reservationSchema.validate(
      {
        requestedDate: selectedDate.value,
        email: email.value,
        phone: phone.value,
        consent: consent.value,
      },
      { abortEarly: false },
    );
  } catch (validationError) {
    validationError.inner.forEach((issue) => {
      if (issue.path && !errors.value[issue.path])
        errors.value[issue.path] = issue.message;
    });
    nextTick(() => form.value?.querySelector('[aria-invalid="true"]')?.focus());
    return;
  }
  isSubmitting.value = true;
  submitError.value = "";

  try {
    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        phone: phone.value,
        requestedDate: selectedDate.value,
        consent: consent.value,
        subject: "Réservation — Atelier relaxation ludique",
        inquiryType: "event-reservation",
        message:
          "Demande de réservation pour l’atelier du 26 ou 28 octobre 2026.",
      }),
    });
    if (!response.ok) throw new Error("Erreur lors de l’envoi");
    isSubmitted.value = true;
  } catch {
    submitError.value =
      "Nous n’avons pas pu enregistrer votre demande. Réessayez dans un instant.";
  } finally {
    isSubmitting.value = false;
  }
};

const onKeydown = (eventKey) => {
  if (!isOpen.value) return;
  if (eventKey.key === "Escape") {
    eventKey.preventDefault();
    dismiss();
    return;
  }
  if (eventKey.key !== "Tab") return;
  const focusable = dialog.value?.querySelectorAll(
    'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  if (!focusable?.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (eventKey.shiftKey && document.activeElement === first) {
    eventKey.preventDefault();
    last.focus();
  } else if (!eventKey.shiftKey && document.activeElement === last) {
    eventKey.preventDefault();
    first.focus();
  }
};

onMounted(() => {
  previousActiveElement.value = document.activeElement;
  isOpen.value = true;
  nextTick(() => closeButton.value?.focus());
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("open-event-popup", openPopup);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeydown);
  window.removeEventListener("open-event-popup", openPopup);
});
watch(isOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="event-popup">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-terracotta-900/45 sm:items-center sm:px-4 sm:py-10"
        @click.self="dismiss">
        <section
          ref="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Annonce de l’événement Maison Loratu"
          class="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-cream-50 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6 shadow-soft-lg sm:max-h-[calc(100dvh-3rem)] sm:rounded-[1.75rem] sm:p-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:gap-7 lg:p-6">
          <button
            ref="closeButton"
            type="button"
            class="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-2xl leading-none text-terracotta-800 transition hover:bg-cream-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            aria-label="Fermer l’annonce de l’événement"
            @click="dismiss">
            <span aria-hidden="true">×</span>
          </button>

          <div v-if="!isFormVisible" class="mb-4 h-28 overflow-hidden rounded-2xl bg-cream-200 lg:hidden">
            <img
              :src="event.poster"
              alt="Illustration de deux enfants déguisés pour l’atelier"
              class="h-full w-full object-cover object-center"
              style="object-position: center 25%" />
          </div>

          <div class="hidden self-start overflow-hidden rounded-2xl bg-cream-200 lg:row-span-2 lg:block">
            <img
              :src="event.poster"
              alt="Affiche de l’atelier relaxation ludique et goûter à la dinguette"
              class="block h-auto w-full max-h-[72vh] object-contain" />
          </div>

          <div class="pb-2 pt-6 sm:px-5 lg:px-2 lg:pt-8">
            <template v-if="!isFormVisible">
              <div class="lg:hidden">
                <div class="pr-10">
                  <p class="text-service-label text-terracotta-600">Événement à venir</p>
                  <h2 data-event-popup-heading tabindex="-1" class="mt-1 text-2xl text-terracotta-800">Atelier relaxation ludique</h2>
                  <p class="mt-1 text-sm font-semibold text-terracotta-700">Pour les enfants de 5 à 8 ans</p>
                </div>
                <dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-cream-700 py-4 text-sm text-gray-700">
                  <div>
                    <dt class="font-semibold text-terracotta-700">Quand</dt>
                    <dd class="mt-0.5">26 ou 28 octobre<br />15 h – 16 h 30</dd>
                  </div>
                  <div>
                    <dt class="font-semibold text-terracotta-700">Tarif</dt>
                    <dd class="mt-0.5">30 €<br />Goûter inclus</dd>
                  </div>
                  <div class="col-span-2">
                    <dt><a :href="event.mapsUrl" target="_blank" rel="noopener noreferrer" class="font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-2">Parc du Maharin, Anglet</a></dt>
                    <dd class="mt-0.5">Prévoir un vêtement chaud</dd>
                  </div>
                </dl>
                <div class="sticky bottom-0 -mx-5 mt-4 border-t border-cream-700 bg-cream-50 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
                  <button type="button" class="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-center font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2" @click="showForm">Je réserve ma place</button>
                </div>
              </div>

              <div class="hidden lg:block">
              <div class="pr-10">
                <p class="text-service-label text-terracotta-600">
                  Événement à venir
                </p>
                <h2 data-event-popup-heading tabindex="-1" class="mt-2 text-3xl text-terracotta-800 sm:text-4xl">
                  Un atelier pour les petits explorateurs
                </h2>
              </div>
              <p class="mt-4 text-base leading-relaxed text-gray-700">
                Un moment ludique et apaisant pour se détendre, imaginer et
                partager un goûter à la dinguette.
              </p>
              <dl
                class="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-cream-700 py-5 text-gray-700">
                <div class="col-span-2">
                  <dt
                    class="text-sm font-semibold uppercase tracking-wide text-terracotta-600">
                    Quand
                  </dt>
                  <dd class="mt-1 leading-relaxed">
                    {{ event.date }}<br />{{ event.time }}
                  </dd>
                </div>
                <div class="col-span-2">
                  <dt
                    class="text-sm font-semibold uppercase tracking-wide text-terracotta-600">
                    Où
                  </dt>
                  <dd class="mt-1 leading-relaxed">
                    <a
                      :href="event.mapsUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-900"
                      >{{ event.location }}</a
                    >
                  </dd>
                </div>
                <div>
                  <dt
                    class="text-sm font-semibold uppercase tracking-wide text-terracotta-600">
                    À prévoir
                  </dt>
                  <dd class="mt-1 leading-relaxed">{{ event.note }}</dd>
                </div>
                <div>
                  <dt
                    class="text-sm font-semibold uppercase tracking-wide text-terracotta-600">
                    Tarif
                  </dt>
                  <dd class="mt-1 leading-relaxed">{{ event.price }}</dd>
                </div>
              </dl>
              <div class="sticky bottom-0 -mx-5 mt-5 border-t border-cream-700 bg-cream-50 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:pb-0">
                <button
                  type="button"
                  class="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-center font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
                  @click="showForm">
                  Je réserve ma place
                </button>
              </div>
              </div>
            </template>

            <template v-else-if="!isSubmitted">
              <div class="flex items-center justify-between gap-4">
                <p class="text-service-label text-terracotta-600">Votre réservation</p>
                <button
                  type="button"
                  class="min-h-11 text-sm font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 hover:text-terracotta-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
                  @click="returnToDetails">
                  Voir les détails
                </button>
              </div>
              <h2 tabindex="-1" class="mt-2 text-2xl text-terracotta-800 sm:text-4xl">
                Réservez votre place
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-gray-700 sm:mt-4 sm:text-base">
                Choisissez votre séance et laissez vos coordonnées. Vous recevrez un message 48 h avant votre réservation.
              </p>
              <form
                ref="form"
                class="mt-5 space-y-4"
                novalidate
                @submit.prevent="submitReservation">
                <fieldset>
                  <legend class="form-label">Choisissez votre séance *</legend>
                  <div class="mt-2 grid gap-2 sm:grid-cols-2">
                    <label
                      class="flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-terracotta-500"
                      :class="
                        selectedDate === '26 octobre 2026'
                          ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-800'
                          : 'border-cream-700 text-gray-700 hover:border-terracotta-300'
                      ">
                      <input
                        v-model="selectedDate"
                        class="h-5 w-5 accent-terracotta-500"
                        type="radio"
                        name="requestedDate"
                        value="26 octobre 2026"
                        required />
                      26 octobre 2026
                    </label>
                    <label
                      class="flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-terracotta-500"
                      :class="
                        selectedDate === '28 octobre 2026'
                          ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-800'
                          : 'border-cream-700 text-gray-700 hover:border-terracotta-300'
                      ">
                      <input
                        v-model="selectedDate"
                        class="h-5 w-5 accent-terracotta-500"
                        type="radio"
                        name="requestedDate"
                        value="28 octobre 2026"
                        required />
                      28 octobre 2026
                    </label>
                  </div>
                  <p
                    v-if="errors.requestedDate"
                    class="mt-2 text-sm text-red-800"
                    role="alert">
                    {{ errors.requestedDate }}
                  </p>
                </fieldset>
                <label class="form-label" for="event-email"
                  >Votre adresse e-mail *<input
                    id="event-email"
                    name="email"
                    v-model.trim="email"
                    class="form-input mt-2"
                    type="email"
                    autocomplete="email"
                    :aria-invalid="errors.email ? 'true' : 'false'"
                    aria-describedby="event-email-error"
                    required
                /></label>
                <p
                  v-if="errors.email"
                  id="event-email-error"
                  class="-mt-2 text-sm text-red-800"
                  role="alert">
                  {{ errors.email }}
                </p>
                <label class="form-label" for="event-phone"
                  >Votre numéro de téléphone *<input
                    id="event-phone"
                    name="phone"
                    v-model.trim="phone"
                    class="form-input mt-2"
                    type="tel"
                    inputmode="tel"
                    autocomplete="tel"
                    :aria-invalid="errors.phone ? 'true' : 'false'"
                    aria-describedby="event-phone-error"
                    required
                /></label>
                <p
                  v-if="errors.phone"
                  id="event-phone-error"
                  class="-mt-2 text-sm text-red-800"
                  role="alert">
                  {{ errors.phone }}
                </p>
                <label
                  class="flex cursor-pointer items-start gap-3 rounded-2xl bg-cream-100 px-4 py-3 text-sm leading-relaxed text-gray-700 focus-within:ring-2 focus-within:ring-terracotta-500">
                  <input
                    v-model="consent"
                    name="consent"
                    class="mt-0.5 h-5 w-5 shrink-0 accent-terracotta-500"
                    type="checkbox"
                    :aria-invalid="errors.consent ? 'true' : 'false'"
                    required />
                  <span
                    >J’accepte que mes coordonnées soient utilisées pour gérer cette réservation. *</span
                  >
                </label>
                <p
                  v-if="errors.consent"
                  class="-mt-2 text-sm text-red-800"
                  role="alert">
                  {{ errors.consent }}
                </p>
                <p
                  v-if="submitError"
                  class="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800"
                  role="alert">
                  {{ submitError }}
                </p>
                <button
                  class="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:opacity-60"
                  type="submit"
                  :disabled="isSubmitting">
                  {{
                    isSubmitting ? "Réservation en cours…" : "Confirmer ma réservation"
                  }}
                </button>
              </form>
            </template>

            <div
              v-else
              class="flex min-h-64 flex-col items-center justify-center py-10 text-center"
              role="status"
              aria-live="polite">
              <p
                class="text-6xl leading-none text-terracotta-500"
                aria-hidden="true">
                ♥
              </p>
              <h2 class="mt-5 text-3xl text-terracotta-800">
                Réservation confirmée
              </h2>
              <p class="mt-3 max-w-sm leading-relaxed text-gray-700">
                Votre place est réservée. Vous recevrez un message 48 h avant
                votre réservation.
              </p>
              <button
                type="button"
                class="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 bg-cream-50 px-6 py-2.5 font-semibold text-terracotta-700 transition hover:bg-cream-100 hover:text-terracotta-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
                @click="dismiss">
                Fermer
              </button>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.event-popup-enter-active,
.event-popup-leave-active {
  transition: opacity var(--duration-ui) var(--ease-warm-out);
}
.event-popup-enter-from,
.event-popup-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .event-popup-enter-active,
  .event-popup-leave-active {
    transition: none;
  }
}
</style>
