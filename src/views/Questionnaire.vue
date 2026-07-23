<script setup>
import { ref, computed, nextTick } from "vue";
import { useForm } from "vee-validate";
import ScrollReveal from "../components/ScrollReveal.vue";
import * as yup from "yup";
import { useRouter } from "vue-router";

const router = useRouter();

const currentStep = ref(1);
const totalSteps = 4;
const isSubmitting = ref(false);
const submitError = ref("");
const stepHeading = ref(null);
const submissionNotice =
  "Votre demande sera envoyée à Sandra pour préparer un premier échange. Aucun rendez-vous n’est réservé automatiquement.";

const schema = yup.object({
  type: yup.string().required("Veuillez sélectionner une option"),
  situation: yup.string().when("type", {
    is: (val) => val === "femme-enceinte",
    then: (schema) => schema.required("Veuillez préciser votre situation"),
    otherwise: (schema) => schema.notRequired(),
  }),
  besoins: yup
    .array()
    .min(1, "Veuillez sélectionner au moins un besoin")
    .required(),
  frequence: yup.string().required("Veuillez sélectionner une fréquence"),
  email: yup.string().email("Email invalide").required("Email requis"),
  telephone: yup
    .string()
    .matches(/^[+()\d\s.-]*$/, "Téléphone invalide")
    .max(20, "Téléphone trop long"),
  message: yup.string().max(1000, "Message trop long"),
  consent: yup
    .boolean()
    .oneOf([true], "Veuillez accepter l'utilisation de vos informations"),
});

const { handleSubmit, defineField, validateField, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    type: "",
    situation: "",
    besoins: [],
    frequence: "",
    email: "",
    telephone: "",
    message: "",
    consent: false,
  },
});

const [type, typeAttrs] = defineField("type");
const [situation, situationAttrs] = defineField("situation");
const [besoins, besoinsAttrs] = defineField("besoins");
const [frequence, frequenceAttrs] = defineField("frequence");
const [email, emailAttrs] = defineField("email");
const [telephone, telephoneAttrs] = defineField("telephone");
const [message, messageAttrs] = defineField("message");
const [consent, consentAttrs] = defineField("consent");

const progress = computed(() => (currentStep.value / totalSteps) * 100);

const focusCurrentStep = async () => {
  await nextTick();
  stepHeading.value?.focus();
};

const scrollToStep = async () => {
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  await focusCurrentStep();
};

const besoinsOptions = [
  { value: "stress", label: "Apaiser le stress" },
  { value: "sommeil", label: "Mieux dormir" },
  { value: "confiance", label: "Prendre confiance" },
  { value: "emotions", label: "Apprivoiser les émotions" },
  { value: "concentration", label: "Mieux se concentrer" },
  { value: "preparation", label: "Préparer un événement" },
  { value: "duo", label: "Partager un moment à deux" },
  { value: "autre", label: "Autre" },
];

const nextStep = async () => {
  const fieldsByStep = {
    1: type.value === "femme-enceinte" ? ["type", "situation"] : ["type"],
    2: ["besoins"],
    3: ["frequence"],
  };
  const results = await Promise.all((fieldsByStep[currentStep.value] || []).map((field) => validateField(field)));
  if (results.some((result) => !result.valid)) return;
  if (currentStep.value < totalSteps) {
    currentStep.value++;
    await scrollToStep();
  }
};

const prevStep = async () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    await scrollToStep();
  }
};

const onSubmit = handleSubmit(async (formValues) => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    const response = await fetch("https://formspree.io/f/mbdzazdg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        type: formValues.type,
        situation: formValues.situation || "",
        besoins: (formValues.besoins || []).join(", "),
        frequence: formValues.frequence,
        email: formValues.email,
        telephone: formValues.telephone,
        message: formValues.message || "",
        consent: formValues.consent === true,
      }),
    });

    if (!response.ok) throw new Error("Erreur lors de l'envoi");

    router.push("/merci");
  } catch {
    submitError.value =
      "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.";
  } finally {
    isSubmitting.value = false;
  }
});

</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-cream-50 px-4 py-8 md:py-12">
    <div class="container mx-auto max-w-2xl">
      <ScrollReveal direction="up" class="rounded-[2rem] border border-terracotta-100 bg-white p-6 shadow-soft-lg md:p-10">
        <div class="mb-8">
          <p class="text-center text-service-label text-terracotta-600">Un premier échange</p>
          <h1 class="page-title mt-4 text-center">
            Quelques questions pour mieux vous orienter
          </h1>
          <p class="mb-6 mt-4 text-center text-gray-600">
            Ce questionnaire prend quelques minutes. Il vous aide à préciser le public, le besoin et le format souhaité.
          </p>
          <p class="rounded-2xl bg-cream-100 px-4 py-3 text-sm text-gray-700">
            {{ submissionNotice }}
          </p>

          <!-- Barre de progression -->
          <div class="mb-4 h-2 w-full rounded-full bg-cream-200">
            <div
              class="h-2 rounded-full bg-terracotta-500 transition-all duration-500 ease-out"
              :style="{ width: `${progress}%` }"></div>
          </div>
          <p class="text-sm text-gray-500 text-center">
            Étape {{ currentStep }} sur {{ totalSteps }}
          </p>
        </div>

        <form @submit.prevent="onSubmit">
          <Transition name="q-step" mode="out-in">
            <!-- Étape 1 : Type de personne -->
            <div v-if="currentStep === 1" key="step-1" class="space-y-6">
              <fieldset>
                <legend ref="stepHeading" tabindex="-1" class="block text-lg font-semibold text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-4" aria-describedby="type-error">
                  Pour qui recherchez-vous un accompagnement ?
                </legend>
                <div class="space-y-3">
                  <label
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100':
                        type === 'femme-enceinte',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="femme-enceinte"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Pour une femme enceinte</span>
                  </label>
                  <label
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100': type === 'enfant',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="enfant"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Pour un enfant</span>
                  </label>
                  <label
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100': type === 'adulte',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="adulte"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Pour moi</span>
                  </label>
                  <label
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{ 'border-terracotta-500 bg-cream-100': type === 'duo' }">
                    <input
                      v-model="type"
                      type="radio"
                      value="duo"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Pour un duo mère-fille ou grand-mère</span>
                  </label>
                  <label
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{ 'border-terracotta-500 bg-cream-100': type === 'senior' }">
                    <input
                      v-model="type"
                      type="radio"
                      value="senior"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Pour une personne senior</span>
                  </label>
                </div>
                <p v-if="errors.type" id="type-error" class="mt-2 text-sm text-red-600" role="alert">
                  {{ errors.type }}
                </p>
              </fieldset>

              <div v-if="type === 'femme-enceinte'" class="mt-6">
                <label for="situation" class="block text-lg font-semibold text-gray-900 mb-4">
                  Où en êtes-vous dans votre parcours ?
                </label>
                <select
                  v-model="situation"
                  v-bind="situationAttrs"
                  id="situation"
                  class="form-input"
                  :aria-invalid="errors.situation ? 'true' : 'false'"
                  aria-describedby="situation-error">
                  <option value="">Sélectionnez...</option>
                  <option value="debut">Début de grossesse</option>
                  <option value="milieu">Milieu de grossesse</option>
                  <option value="fin">Fin de grossesse</option>
                  <option value="post-partum">Après la naissance</option>
                </select>
                <p v-if="errors.situation" id="situation-error" class="mt-2 text-sm text-red-600" role="alert">
                  {{ errors.situation }}
                </p>
              </div>
            </div>

            <!-- Étape 2 : Besoins -->
            <div v-else-if="currentStep === 2" key="step-2" class="space-y-6">
              <fieldset>
                <legend ref="stepHeading" tabindex="-1" class="block text-lg font-semibold text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-4" aria-describedby="needs-error">
                  Qu’aimeriez-vous améliorer ou partager ?
                  <span class="mt-1 block text-sm font-normal text-gray-600">Plusieurs réponses possibles.</span>
                </legend>
                <div class="space-y-3">
                  <label
                    v-for="option in besoinsOptions"
                    :key="option.value"
                    class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100': (besoins || []).includes(
                        option.value,
                      ),
                    }"
                    >
                    <input
                      v-model="besoins"
                      type="checkbox"
                      :value="option.value"
                      v-bind="besoinsAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">{{ option.label }}</span>
                  </label>
                </div>
                <p v-if="errors.besoins" id="needs-error" class="mt-2 text-sm text-red-600" role="alert">
                  {{ errors.besoins }}
                </p>
              </fieldset>
            </div>

            <!-- Étape 3 : Fréquence -->
            <div v-else-if="currentStep === 3" key="step-3" class="space-y-6">
              <fieldset>
                <legend ref="stepHeading" tabindex="-1" class="block text-lg font-semibold text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-4" aria-describedby="frequency-error">
                  Quel rythme vous conviendrait le mieux ?
                </legend>
                <div class="space-y-3">
                  <label
                  class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100': frequence === 'ponctuel',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="ponctuel"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Une première séance</span>
                  </label>
                  <label
                  class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100':
                        frequence === 'hebdomadaire',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="hebdomadaire"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Quelques séances</span>
                  </label>
                  <label
                  class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100':
                        frequence === 'bihebdomadaire',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="bihebdomadaire"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Un accompagnement régulier</span>
                  </label>
                  <label
                  class="flex min-h-14 cursor-pointer items-center rounded-2xl border-2 border-terracotta-100 bg-cream-50 p-4 transition-colors hover:bg-cream-100 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2"
                    :class="{
                      'border-terracotta-500 bg-cream-100': frequence === 'mensuel',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="mensuel"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Je ne sais pas encore</span>
                  </label>
                </div>
                <p v-if="errors.frequence" id="frequency-error" class="mt-2 text-sm text-red-600" role="alert">
                  {{ errors.frequence }}
                </p>
              </fieldset>
            </div>

            <!-- Étape 4 : Contact -->
            <div v-else-if="currentStep === 4" key="step-4" class="space-y-6">
              <div>
                <label
                  ref="stepHeading"
                  tabindex="-1"
                  for="email"
                  class="block text-lg font-semibold text-gray-900 mb-2 outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-4">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  v-bind="emailAttrs"
                  class="form-input"
                  :aria-invalid="errors.email ? 'true' : 'false'"
                  aria-describedby="email-error"
                  placeholder="votre.email@exemple.com" />
                <p v-if="errors.email" id="email-error" class="mt-2 text-sm text-red-600" role="alert">
                  {{ errors.email }}
                </p>
              </div>

              <div>
                <label
                  for="telephone"
                  class="block text-lg font-semibold text-gray-900 mb-2">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  v-model="telephone"
                  type="tel"
                  v-bind="telephoneAttrs"
                  class="form-input"
                  placeholder="06 12 34 56 78" />
                <p v-if="errors.telephone" class="mt-2 text-sm text-red-600">
                  {{ errors.telephone }}
                </p>
              </div>

              <div>
                <label
                  for="message"
                  class="block text-lg font-semibold text-gray-900 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  v-bind="messageAttrs"
                  rows="4"
                  class="form-input"
                  maxlength="1000"
                  placeholder="Précisez vos attentes sans inclure d’informations médicales détaillées ou d’autres données sensibles."></textarea>
                <p class="mt-2 text-sm text-gray-600">
                  Merci de ne pas partager ici de données de santé détaillées ni
                  d’informations très sensibles.
                </p>
              </div>

              <div class="rounded-2xl border border-cream-300 bg-cream-100 p-4">
                <p class="text-sm text-gray-700">
                  <strong>Protection de vos données :</strong> Vos informations
                  sont collectées uniquement pour analyser votre demande et vous
                  recontacter. Elles ne servent ni à un profilage commercial, ni
                  à une inscription automatique. Vous pouvez consulter notre
                  <router-link
                    to="/politique-de-confidentialite"
                    class="text-terracotta-600 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
                    politique de confidentialité
                  </router-link>
                  pour plus d'informations.
                </p>
              </div>

              <label for="consent" class="-m-1 flex items-start gap-3 rounded-2xl p-2 text-sm text-gray-700 focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2">
                <input id="consent" v-model="consent" v-bind="consentAttrs" type="checkbox" class="mt-1 focus-visible:outline-none focus-visible:ring-0" />
                <span>J’accepte que Maison Loratu utilise ces informations uniquement pour traiter ma demande et me recontacter, et je m’abstiens d’y saisir des données sensibles inutiles. *</span>
              </label>
              <p v-if="errors.consent" class="text-sm text-red-600">{{ errors.consent }}</p>
            </div>
          </Transition>

          <!-- Message d'erreur -->
          <p v-if="submitError" class="mt-4 text-sm text-red-600 text-center">
            {{ submitError }}
          </p>

          <!-- Boutons de navigation -->
          <div class="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between">
            <button
              v-if="currentStep > 1"
              type="button"
              @click="prevStep"
              class="min-h-11 rounded-full border-2 border-terracotta-300 px-6 py-3 text-terracotta-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              Précédent
            </button>
            <div v-else></div>

            <button
              v-if="currentStep < totalSteps"
              type="button"
              @click="nextStep"
              class="min-h-11 rounded-full bg-terracotta-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              Suivant
            </button>
            <button
              v-else
              type="submit"
              :disabled="isSubmitting"
              class="min-h-11 rounded-full bg-terracotta-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              {{ isSubmitting ? "Envoi en cours..." : "Envoyer la demande" }}
            </button>
          </div>
        </form>
      </ScrollReveal>
    </div>
  </div>
</template>
