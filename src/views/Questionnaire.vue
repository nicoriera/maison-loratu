<script setup>
import { ref, computed } from "vue";
import { useForm } from "vee-validate";
import ScrollReveal from "../components/ScrollReveal.vue";
import * as yup from "yup";
import { useRouter } from "vue-router";

const router = useRouter();

const currentStep = ref(1);
const totalSteps = 4;
const isSubmitting = ref(false);
const submitError = ref("");
const submissionNotice =
  "Ce questionnaire envoie réellement votre demande à Maison Loratu via notre formulaire de contact sécurisé. Aucun rendez-vous n’est réservé automatiquement.";

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

const besoinsOptions = [
  { value: "stress", label: "Gestion du stress" },
  { value: "sommeil", label: "Amélioration du sommeil" },
  { value: "confiance", label: "Confiance en soi" },
  { value: "emotions", label: "Gestion des émotions" },
  { value: "concentration", label: "Amélioration de la concentration" },
  { value: "preparation", label: "Préparation à un événement" },
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  <div class="min-h-screen overflow-x-hidden bg-gray-50 px-4 py-8 md:py-12">
    <div class="container mx-auto max-w-2xl">
      <ScrollReveal direction="up" class="rounded-2xl bg-white p-6 shadow-lg md:p-8">
        <div class="mb-8">
          <h1 class="mb-4 text-center text-3xl font-serif text-[#C16A46] md:text-4xl">
            Questionnaire de besoins
          </h1>
          <p class="mb-6 text-center text-gray-600">
            Répondez à quelques questions pour que nous puissions vous proposer un accompagnement personnalisé
          </p>
          <p class="rounded-2xl bg-cream-100 px-4 py-3 text-sm text-gray-700">
            {{ submissionNotice }}
          </p>

          <!-- Barre de progression -->
          <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              class="bg-[#C16A46] h-2 rounded-full transition-all duration-500 ease-out"
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
              <div>
                <label class="block text-lg font-semibold text-gray-900 mb-4">
                  Pour qui souhaitez-vous un accompagnement ?
                </label>
                <div class="space-y-3">
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100':
                        type === 'femme-enceinte',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="femme-enceinte"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Femme enceinte</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100': type === 'enfant',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="enfant"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Enfant</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100': type === 'adulte',
                    }">
                    <input
                      v-model="type"
                      type="radio"
                      value="adulte"
                      v-bind="typeAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Adulte (mieux-être)</span>
                  </label>
                </div>
                <p v-if="errors.type" class="mt-2 text-sm text-red-600">
                  {{ errors.type }}
                </p>
              </div>

              <div v-if="type === 'femme-enceinte'" class="mt-6">
                <label class="block text-lg font-semibold text-gray-900 mb-4">
                  À quel stade de votre grossesse êtes-vous ?
                </label>
                <select
                  v-model="situation"
                  v-bind="situationAttrs"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C16A46] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2">
                  <option value="">Sélectionnez...</option>
                  <option value="debut">1er trimestre</option>
                  <option value="milieu">2ème trimestre</option>
                  <option value="fin">3ème trimestre</option>
                  <option value="post-partum">Post-partum</option>
                </select>
                <p v-if="errors.situation" class="mt-2 text-sm text-red-600">
                  {{ errors.situation }}
                </p>
              </div>
            </div>

            <!-- Étape 2 : Besoins -->
            <div v-else-if="currentStep === 2" key="step-2" class="space-y-6">
              <div>
                <label class="block text-lg font-semibold text-gray-900 mb-4">
                  Quels sont vos besoins principaux ? (plusieurs choix
                  possibles)
                </label>
                <div class="space-y-3">
                  <label
                    v-for="option in besoinsOptions"
                    :key="option.value"
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100': (besoins || []).includes(
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
                <p v-if="errors.besoins" class="mt-2 text-sm text-red-600">
                  {{ errors.besoins }}
                </p>
              </div>
            </div>

            <!-- Étape 3 : Fréquence -->
            <div v-else-if="currentStep === 3" key="step-3" class="space-y-6">
              <div>
                <label class="block text-lg font-semibold text-gray-900 mb-4">
                  Quelle fréquence d'accompagnement vous conviendrait le mieux ?
                </label>
                <div class="space-y-3">
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100': frequence === 'ponctuel',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="ponctuel"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Séances ponctuelles</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100':
                        frequence === 'hebdomadaire',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="hebdomadaire"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Une fois par semaine</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100':
                        frequence === 'bihebdomadaire',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="bihebdomadaire"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Toutes les deux semaines</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2"
                    :class="{
                      'border-[#C16A46] bg-cream-100': frequence === 'mensuel',
                    }">
                    <input
                      v-model="frequence"
                      type="radio"
                      value="mensuel"
                      v-bind="frequenceAttrs"
                      class="mr-3 focus-visible:outline-none focus-visible:ring-0" />
                    <span class="text-gray-700">Une fois par mois</span>
                  </label>
                </div>
                <p v-if="errors.frequence" class="mt-2 text-sm text-red-600">
                  {{ errors.frequence }}
                </p>
              </div>
            </div>

            <!-- Étape 4 : Contact -->
            <div v-else-if="currentStep === 4" key="step-4" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-lg font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  v-bind="emailAttrs"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C16A46] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2"
                  placeholder="votre.email@exemple.com" />
                <p v-if="errors.email" class="mt-2 text-sm text-red-600">
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
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C16A46] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2"
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
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C16A46] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2"
                  maxlength="1000"
                  placeholder="Précisez vos attentes sans inclure d’informations médicales détaillées ou d’autres données sensibles."></textarea>
                <p class="mt-2 text-sm text-gray-600">
                  Merci de ne pas partager ici de données de santé détaillées ni
                  d’informations très sensibles.
                </p>
              </div>

              <div class="bg-cream-100 border border-cream-300 rounded-lg p-4">
                <p class="text-sm text-gray-700">
                  <strong>Protection de vos données :</strong> Vos informations
                  sont collectées uniquement pour analyser votre demande et vous
                  recontacter. Elles ne servent ni à un profilage commercial, ni
                  à une inscription automatique. Vous pouvez consulter notre
                  <router-link
                    to="/politique-de-confidentialite"
                    class="text-[#C16A46] underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2">
                    politique de confidentialité
                  </router-link>
                  pour plus d'informations.
                </p>
              </div>

              <label for="consent" class="flex items-start gap-3 rounded-lg p-1 -m-1 text-sm text-gray-700 focus-within:ring-2 focus-within:ring-[#C16A46] focus-within:ring-offset-2">
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
              class="min-h-11 rounded-2xl border-2 border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2">
              Précédent
            </button>
            <div v-else></div>

            <button
              v-if="currentStep < totalSteps"
              type="button"
              @click="nextStep"
              class="min-h-11 rounded-2xl bg-[#C16A46] px-6 py-3 text-white transition-colors hover:bg-[#B85A36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2">
              Suivant
            </button>
            <button
              v-else
              type="submit"
              :disabled="isSubmitting"
              class="min-h-11 rounded-2xl bg-[#C16A46] px-6 py-3 text-white transition-colors hover:bg-[#B85A36] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A46] focus-visible:ring-offset-2">
              {{ isSubmitting ? "Envoi en cours..." : "Envoyer la demande" }}
            </button>
          </div>
        </form>
      </ScrollReveal>
    </div>
  </div>
</template>
