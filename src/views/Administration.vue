<script setup>
import { computed, ref } from 'vue'
import {
  ADMIN_TABS,
  ARTICLE_STATUS_OPTIONS,
  buildArticlePreview,
  createEmptyArticleDraft,
  createInitialFaqDraft,
  createInitialOffersDraft,
  createInitialPublicDraft,
  validateArticleDraft,
  validateFaqItemsDraft,
  validateOffersDraft,
  validatePublicContentDraft,
} from '../config/adminContent.js'

const activeTab = ref('public')

const publicContent = ref(createInitialPublicDraft())
const publicMessage = ref({ type: '', text: '' })

const offers = ref(createInitialOffersDraft())
const offersMessage = ref({ type: '', text: '' })

const faqItems = ref(createInitialFaqDraft())
const faqMessage = ref({ type: '', text: '' })

const articles = ref([])
const articleDraft = ref(createEmptyArticleDraft())
const articleMessage = ref({ type: '', text: '' })
const editingArticleId = ref('')
const articleCounter = ref(1)

const articlePreview = computed(() => buildArticlePreview(articleDraft.value))

const articleButtonLabel = computed(() =>
  editingArticleId.value ? 'Mettre à jour le brouillon' : 'Ajouter le brouillon',
)

const articleCountLabel = computed(() => `${articles.value.length} brouillon${articles.value.length > 1 ? 's' : ''}`)

const sortedArticles = computed(() =>
  [...articles.value].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt)),
)

const tabBadges = computed(() => ({
  public: 'Local',
  offers: String(offers.value.length),
  faq: String(faqItems.value.length),
  articles: String(articles.value.length),
}))

const messageClass = (type) => (type === 'error' ? 'text-red-700' : 'text-terracotta-700')

const savePublicContent = () => {
  const { sanitizedDraft, sanitizedReservationUrl, issues } = validatePublicContentDraft(publicContent.value)

  if (sanitizedDraft.reservationUrl && !sanitizedReservationUrl) {
    publicMessage.value = {
      type: 'error',
      text: 'Le lien de réservation doit utiliser https:// et pointer vers un domaine Resalib.',
    }
    publicContent.value = sanitizedDraft
    return
  }

  if (issues.length > 0) {
    publicMessage.value = { type: 'error', text: issues[0] }
    publicContent.value = sanitizedDraft
    return
  }

  publicContent.value = {
    ...sanitizedDraft,
    reservationUrl: sanitizedReservationUrl,
  }
  publicMessage.value = {
    type: 'success',
    text: 'Brouillon public vérifié localement. Rien n’est enregistré ni synchronisé.',
  }
}

const resetPublicContent = () => {
  publicContent.value = createInitialPublicDraft()
  publicMessage.value = {
    type: 'success',
    text: 'Le brouillon public local a été effacé.',
  }
}

const saveOffers = () => {
  const { sanitizedDraft, issues } = validateOffersDraft(offers.value)
  offers.value = sanitizedDraft

  if (issues.length > 0) {
    offersMessage.value = { type: 'error', text: issues[0] }
    return
  }

  offersMessage.value = {
    type: 'success',
    text: 'Les offres restent en mémoire locale pour cette session uniquement.',
  }
}

const resetOffers = () => {
  offers.value = createInitialOffersDraft()
  offersMessage.value = {
    type: 'success',
    text: 'Les offres locales ont été réinitialisées.',
  }
}

const saveFaq = () => {
  const { sanitizedDraft, issues } = validateFaqItemsDraft(faqItems.value)
  faqItems.value = sanitizedDraft

  if (issues.length > 0) {
    faqMessage.value = { type: 'error', text: issues[0] }
    return
  }

  faqMessage.value = {
    type: 'success',
    text: 'La FAQ reste en mémoire locale pour cette session uniquement.',
  }
}

const resetFaq = () => {
  faqItems.value = createInitialFaqDraft()
  faqMessage.value = {
    type: 'success',
    text: 'La FAQ locale a été réinitialisée.',
  }
}

const resetArticleDraft = (messageText = 'Le brouillon d’article local a été effacé.') => {
  articleDraft.value = createEmptyArticleDraft()
  editingArticleId.value = ''
  articleMessage.value = {
    type: 'success',
    text: messageText,
  }
}

const saveArticle = () => {
  const { sanitizedDraft, issues } = validateArticleDraft(articleDraft.value)
  articleDraft.value = sanitizedDraft

  if (issues.length > 0) {
    articleMessage.value = { type: 'error', text: issues[0] }
    return
  }

  const now = new Date().toISOString()
  const record = {
    id: editingArticleId.value || `article-${articleCounter.value++}`,
    ...sanitizedDraft,
    updatedAt: now,
  }

  if (editingArticleId.value) {
    articles.value = articles.value.map((article) =>
      article.id === editingArticleId.value ? record : article,
    )
    articleMessage.value = {
      type: 'success',
      text: 'Le brouillon d’article a été mis à jour en mémoire locale.',
    }
  } else {
    articles.value = [record, ...articles.value]
    articleMessage.value = {
      type: 'success',
      text: 'Le brouillon d’article a été ajouté en mémoire locale.',
    }
  }

  articleDraft.value = createEmptyArticleDraft()
  editingArticleId.value = ''
}

const editArticle = (article) => {
  activeTab.value = 'articles'
  editingArticleId.value = article.id
  articleDraft.value = {
    title: article.title,
    category: article.category,
    excerpt: article.excerpt,
    body: article.body,
    publishedAt: article.publishedAt,
    status: article.status,
  }
  articleMessage.value = {
    type: 'success',
    text: 'Le brouillon sélectionné est chargé pour modification locale.',
  }
}

const deleteArticle = (articleId) => {
  articles.value = articles.value.filter((article) => article.id !== articleId)

  if (editingArticleId.value === articleId) {
    articleDraft.value = createEmptyArticleDraft()
    editingArticleId.value = ''
  }

  articleMessage.value = {
    type: 'success',
    text: 'Le brouillon d’article a été supprimé de la mémoire locale.',
  }
}
</script>

<template>
  <div class="min-h-screen bg-cream-50 px-4 py-12">
    <div class="mx-auto max-w-6xl space-y-8">
      <div class="rounded-3xl border border-terracotta-200 bg-cream-100 p-6 md:p-8">
        <p class="text-service-label text-terracotta-600">Prototype d’administration</p>
        <h1 class="mt-2 text-4xl text-terracotta-800">Préparer le contenu éditorial du site</h1>
        <p class="mt-3 max-w-3xl leading-relaxed text-gray-700">
          Cette interface reste locale, sans backend, sans authentification réelle, sans stockage persistant,
          sans réservation propriétaire et sans paiement. Le route guard prototypeOnly demeure la seule barrière
          d’accès prévue pour ce prototype.
        </p>
        <p class="mt-3 text-sm leading-relaxed text-terracotta-700">
          N’ajoutez ni mot de passe, ni donnée de santé, ni information confidentielle. Toute donnée manifestement
          sensible doit être refusée par la validation locale.
        </p>
      </div>

      <div class="rounded-3xl bg-white p-3 shadow-soft">
        <div class="grid gap-3 md:grid-cols-4">
          <button
            v-for="tab in ADMIN_TABS"
            :key="tab.id"
            type="button"
            class="flex items-center justify-between rounded-2xl px-4 py-3 text-left transition"
            :class="activeTab === tab.id ? 'bg-terracotta-500 text-white shadow-soft' : 'bg-cream-50 text-terracotta-800 hover:bg-cream-100'"
            @click="activeTab = tab.id"
          >
            <span class="font-semibold">{{ tab.label }}</span>
            <span
              class="rounded-full px-2 py-1 text-xs font-semibold"
              :class="activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-white text-terracotta-700'"
            >
              {{ tabBadges[tab.id] }}
            </span>
          </button>
        </div>
      </div>

      <section v-if="activeTab === 'public'" class="surface-card space-y-6">
        <div>
          <h2 class="text-2xl text-terracotta-800">Paramètres publics</h2>
          <p class="mt-2 max-w-3xl text-gray-700">
            Préparez uniquement les coordonnées publiques et un lien Resalib conforme.
          </p>
        </div>

        <form class="space-y-6" autocomplete="off" @submit.prevent="savePublicContent">
          <div>
            <label for="reservationUrl" class="form-label">Lien Resalib</label>
            <input
              id="reservationUrl"
              v-model.trim="publicContent.reservationUrl"
              class="form-input"
              type="url"
              inputmode="url"
              placeholder="https://www.resalib.fr/..."
              spellcheck="false"
            />
            <p class="mt-2 text-sm text-gray-600">
              Le lien n’est accepté que s’il utilise `https://` sur un domaine `resalib.fr`.
            </p>
          </div>

          <div>
            <label for="location" class="form-label">Localisation</label>
            <input
              id="location"
              v-model.trim="publicContent.location"
              class="form-input"
              type="text"
              placeholder="Ville, quartier ou adresse professionnelle publique"
            />
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model.trim="publicContent.email"
                class="form-input"
                type="email"
                placeholder="Contact public"
              />
            </div>
            <div>
              <label for="phone" class="form-label">Téléphone</label>
              <input
                id="phone"
                v-model.trim="publicContent.phone"
                class="form-input"
                type="tel"
                placeholder="Numéro public"
              />
            </div>
          </div>

          <p class="rounded-2xl bg-cream-50 p-4 text-sm text-gray-700">
            Vérification locale uniquement : si un champ ressemble à un secret, à un mot de passe ou à une donnée
            non publique, le brouillon est refusé.
          </p>

          <div class="flex items-center justify-between gap-4">
            <p v-if="publicMessage.text" class="text-sm" :class="messageClass(publicMessage.type)" role="status">
              {{ publicMessage.text }}
            </p>
            <div class="ml-auto flex flex-wrap justify-end gap-3">
              <button
                type="button"
                class="rounded-full border border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 hover:bg-cream-100"
                @click="resetPublicContent"
              >
                Effacer
              </button>
              <button
                type="submit"
                class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600"
              >
                Vérifier le brouillon
              </button>
            </div>
          </div>
        </form>
      </section>

      <section v-else-if="activeTab === 'offers'" class="surface-card space-y-6">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="text-2xl text-terracotta-800">Offres</h2>
            <p class="mt-2 max-w-3xl text-gray-700">
              Ajustez localement les intitulés, publics et résumés sans toucher aux pages publiques.
            </p>
          </div>
          <p class="text-sm text-gray-600">Session locale uniquement · {{ offers.length }} cartes</p>
        </div>

        <div class="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div class="space-y-4">
            <article
              v-for="offer in offers"
              :key="offer.id"
              class="rounded-3xl border border-cream-700 bg-cream-50 p-5"
            >
              <div class="grid gap-4">
                <div>
                  <label :for="`offer-title-${offer.id}`" class="form-label">Titre</label>
                  <input :id="`offer-title-${offer.id}`" v-model.trim="offer.title" class="form-input" type="text" />
                </div>
                <div>
                  <label :for="`offer-audience-${offer.id}`" class="form-label">Public</label>
                  <input :id="`offer-audience-${offer.id}`" v-model.trim="offer.audience" class="form-input" type="text" />
                </div>
                <div>
                  <label :for="`offer-summary-${offer.id}`" class="form-label">Résumé</label>
                  <textarea
                    :id="`offer-summary-${offer.id}`"
                    v-model.trim="offer.summary"
                    class="form-input min-h-28"
                  />
                </div>
              </div>
            </article>
          </div>

          <div class="rounded-3xl bg-terracotta-800 p-6 text-white shadow-soft">
            <p class="text-service-label text-cream-200">Aperçu rapide</p>
            <div class="mt-5 space-y-4">
              <article
                v-for="offer in offers"
                :key="`preview-${offer.id}`"
                class="rounded-2xl bg-white/10 p-4"
              >
                <p class="text-sm uppercase tracking-[0.18em] text-cream-100">{{ offer.audience || 'Public' }}</p>
                <h3 class="mt-2 text-2xl">{{ offer.title || 'Titre de l’offre' }}</h3>
                <p class="mt-2 text-cream-100">
                  {{ offer.summary || 'Le résumé local apparaîtra ici pour faciliter la relecture.' }}
                </p>
              </article>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-4">
          <p v-if="offersMessage.text" class="text-sm" :class="messageClass(offersMessage.type)" role="status">
            {{ offersMessage.text }}
          </p>
          <div class="ml-auto flex flex-wrap justify-end gap-3">
            <button
              type="button"
              class="rounded-full border border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 hover:bg-cream-100"
              @click="resetOffers"
            >
              Réinitialiser
            </button>
            <button
              type="button"
              class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600"
              @click="saveOffers"
            >
              Vérifier les offres
            </button>
          </div>
        </div>
      </section>

      <section v-else-if="activeTab === 'faq'" class="surface-card space-y-6">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="text-2xl text-terracotta-800">FAQ</h2>
            <p class="mt-2 max-w-3xl text-gray-700">
              Rédigez des réponses publiques, courtes et sans détail interne ni confidentiel.
            </p>
          </div>
          <p class="text-sm text-gray-600">Session locale uniquement · {{ faqItems.length }} entrées</p>
        </div>

        <div class="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div class="space-y-4">
            <article
              v-for="item in faqItems"
              :key="item.id"
              class="rounded-3xl border border-cream-700 bg-cream-50 p-5"
            >
              <div class="grid gap-4">
                <div>
                  <label :for="`faq-question-${item.id}`" class="form-label">Question</label>
                  <input :id="`faq-question-${item.id}`" v-model.trim="item.question" class="form-input" type="text" />
                </div>
                <div>
                  <label :for="`faq-answer-${item.id}`" class="form-label">Réponse</label>
                  <textarea
                    :id="`faq-answer-${item.id}`"
                    v-model.trim="item.answer"
                    class="form-input min-h-32"
                  />
                </div>
              </div>
            </article>
          </div>

          <div class="space-y-4">
            <article
              v-for="item in faqItems"
              :key="`preview-${item.id}`"
              class="rounded-3xl border border-terracotta-100 bg-white p-5 shadow-soft"
            >
              <h3 class="text-xl text-terracotta-800">{{ item.question || 'Question de prévisualisation' }}</h3>
              <p class="mt-3 leading-relaxed text-gray-700">
                {{ item.answer || 'La réponse locale apparaîtra ici pour la relecture.' }}
              </p>
            </article>
          </div>
        </div>

        <div class="flex items-center justify-between gap-4">
          <p v-if="faqMessage.text" class="text-sm" :class="messageClass(faqMessage.type)" role="status">
            {{ faqMessage.text }}
          </p>
          <div class="ml-auto flex flex-wrap justify-end gap-3">
            <button
              type="button"
              class="rounded-full border border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 hover:bg-cream-100"
              @click="resetFaq"
            >
              Réinitialiser
            </button>
            <button
              type="button"
              class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600"
              @click="saveFaq"
            >
              Vérifier la FAQ
            </button>
          </div>
        </div>
      </section>

      <section v-else class="surface-card space-y-6">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="text-2xl text-terracotta-800">Articles & actualités</h2>
            <p class="mt-2 max-w-3xl text-gray-700">
              Ajoutez, modifiez, supprimez et relisez des brouillons locaux. Aucune donnée n’est persistée.
            </p>
          </div>
          <p class="text-sm text-gray-600">{{ articleCountLabel }}</p>
        </div>

        <div class="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div class="space-y-6">
            <form class="space-y-5 rounded-3xl border border-cream-700 bg-cream-50 p-5" @submit.prevent="saveArticle">
              <div class="grid gap-5 md:grid-cols-2">
                <div class="md:col-span-2">
                  <label for="article-title" class="form-label">Titre</label>
                  <input id="article-title" v-model.trim="articleDraft.title" class="form-input" type="text" />
                </div>
                <div>
                  <label for="article-category" class="form-label">Rubrique</label>
                  <input id="article-category" v-model.trim="articleDraft.category" class="form-input" type="text" />
                </div>
                <div>
                  <label for="article-status" class="form-label">Statut</label>
                  <select id="article-status" v-model="articleDraft.status" class="form-input">
                    <option v-for="option in ARTICLE_STATUS_OPTIONS" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                <div class="md:col-span-2">
                  <label for="article-excerpt" class="form-label">Chapô</label>
                  <textarea id="article-excerpt" v-model.trim="articleDraft.excerpt" class="form-input min-h-24" />
                </div>
                <div>
                  <label for="article-published-at" class="form-label">Date de publication</label>
                  <input id="article-published-at" v-model="articleDraft.publishedAt" class="form-input" type="date" />
                </div>
                <div class="md:col-span-2">
                  <label for="article-body" class="form-label">Contenu</label>
                  <textarea id="article-body" v-model="articleDraft.body" class="form-input min-h-72" />
                </div>
              </div>

              <p class="rounded-2xl bg-white p-4 text-sm text-gray-700">
                Le brouillon est refusé s’il contient des secrets, des données de santé, des identifiants personnels
                ou des informations manifestement confidentielles.
              </p>

              <div class="flex items-center justify-between gap-4">
                <p v-if="articleMessage.text" class="text-sm" :class="messageClass(articleMessage.type)" role="status">
                  {{ articleMessage.text }}
                </p>
                <div class="ml-auto flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    class="rounded-full border border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 hover:bg-white"
                    @click="resetArticleDraft()"
                  >
                    Effacer
                  </button>
                  <button
                    type="submit"
                    class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600"
                  >
                    {{ articleButtonLabel }}
                  </button>
                </div>
              </div>
            </form>

            <div class="rounded-3xl border border-terracotta-100 bg-white p-5 shadow-soft">
              <div class="flex items-center justify-between gap-4">
                <h3 class="text-xl text-terracotta-800">Brouillons locaux</h3>
                <button
                  type="button"
                  class="text-sm font-semibold text-terracotta-700 underline underline-offset-4"
                  @click="resetArticleDraft('Nouveau brouillon prêt à être rédigé.')"
                >
                  Nouveau brouillon
                </button>
              </div>
              <div v-if="sortedArticles.length" class="mt-4 space-y-3">
                <article
                  v-for="article in sortedArticles"
                  :key="article.id"
                  class="rounded-2xl border border-cream-700 bg-cream-50 p-4"
                >
                  <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-600">
                        {{ article.category }} · {{ buildArticlePreview(article).statusLabel }}
                      </p>
                      <h4 class="mt-1 text-xl text-terracotta-800">{{ article.title }}</h4>
                      <p class="mt-2 text-sm text-gray-600">{{ article.excerpt }}</p>
                    </div>
                    <div class="flex gap-2">
                      <button
                        type="button"
                        class="rounded-full border border-terracotta-300 px-4 py-2 text-sm font-semibold text-terracotta-700 hover:bg-white"
                        @click="editArticle(article)"
                      >
                        Modifier
                      </button>
                      <button
                        type="button"
                        class="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                        @click="deleteArticle(article.id)"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <p v-else class="mt-4 text-sm text-gray-600">
                Aucun article local pour l’instant. Commencez par rédiger un brouillon.
              </p>
            </div>
          </div>

          <article class="rounded-3xl bg-terracotta-800 p-6 text-white shadow-soft-lg">
            <p class="text-service-label text-cream-200">Prévisualisation locale</p>
            <p class="mt-2 text-sm text-cream-100">
              Lecture instantanée du brouillon courant, sans publication ni stockage navigateur.
            </p>
            <div class="mt-6 rounded-[1.75rem] bg-white p-6 text-gray-800">
              <div class="flex flex-wrap items-center gap-3">
                <span class="rounded-full bg-cream-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
                  {{ articlePreview.category }}
                </span>
                <span class="text-sm text-gray-500">{{ articlePreview.publishedLabel }}</span>
                <span class="text-sm font-semibold text-terracotta-700">{{ articlePreview.statusLabel }}</span>
              </div>
              <h3 class="mt-4 text-3xl text-terracotta-800">{{ articlePreview.title }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-700">{{ articlePreview.excerpt }}</p>
              <div class="mt-6 space-y-4">
                <p v-for="paragraph in articlePreview.paragraphs" :key="paragraph" class="leading-relaxed text-gray-700">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
