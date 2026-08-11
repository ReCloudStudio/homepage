<script setup lang="ts">
import { partners } from '~/config/partners'

const { t, te, locale } = useI18n()

const partnerList = computed(() => partners.filter((p) => p.category === 'partner'))
const friendList = computed(() => partners.filter((p) => p.category === 'friend'))

function partnerDescription(p: Partner): string {
  const key = `partners.descriptions.${p.name}`
  if (te(key, locale.value)) return t(key)
  return ''
}

useHead({
  title: `${t('partners.title')} — ReCloud Studio`,
})

defineOgImage('OgImageDefault', {
  title: t('partners.title'),
  description: t('partners.subtitle'),
})
</script>

<template>
  <section class="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center px-6 py-32">
    <div class="mb-16 text-center animate-fade-up" style="animation-delay: 0.1s">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-white">{{ t('partners.title') }}</h2>
      <p class="mt-3 text-zinc-600 dark:text-zinc-500">{{ t('partners.subtitle') }}</p>
    </div>

    <div class="w-full animate-fade-up" style="animation-delay: 0.2s">
      <h3 class="mb-6 text-center text-xl font-semibold text-teal-600 dark:text-teal-400">{{ t('partners.sectionPartners') }}</h3>
      <div v-if="partnerList.length === 0" class="text-center text-zinc-500">
        {{ t('partners.empty') }}
      </div>
      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(p, i) in partnerList"
          :key="p.name"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-teal-500/40 dark:hover:shadow-zinc-900/30"
          :style="{ animationDelay: `${0.15 + i * 0.08}s` }"
        >
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-teal-500" />
            <span class="text-lg font-semibold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">{{ p.name }}</span>
          </div>
          <p v-if="partnerDescription(p)" class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ partnerDescription(p) }}</p>
        </a>
      </div>
    </div>

    <div class="mt-16 w-full animate-fade-up" style="animation-delay: 0.3s">
      <h3 class="mb-6 text-center text-xl font-semibold text-zinc-700 dark:text-zinc-300">{{ t('partners.sectionFriends') }}</h3>
      <div v-if="friendList.length === 0" class="text-center text-zinc-500">
        {{ t('partners.empty') }}
      </div>
      <div v-else class="flex flex-wrap justify-center gap-3">
        <a
          v-for="(p, i) in friendList"
          :key="p.name"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border border-zinc-200 px-5 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:border-teal-500/50 hover:text-teal-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-teal-500/40 dark:hover:text-teal-400"
          :style="{ animationDelay: `${0.15 + i * 0.08}s` }"
        >
          {{ p.name }}
        </a>
      </div>
    </div>
  </section>
</template>