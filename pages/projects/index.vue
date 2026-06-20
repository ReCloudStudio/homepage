<script setup lang="ts">
const { t } = useI18n()

interface Repo {
  name: string
  description: string
  url: string
  language: string
  stars: number
  topics: string[]
  homepage: string
}

const { data: repos } = await useFetch<Repo[]>('/api/repos')
</script>

<template>
  <section class="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center px-6 py-32">
    <div class="mb-16 text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-white">{{ t('projects.title') }}</h2>
      <p class="mt-3 text-zinc-600 dark:text-zinc-500">{{ t('projects.subtitle') }}</p>
    </div>
    <div class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="repo in repos"
        :key="repo.name"
        class="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
      >
        <div class="flex items-start justify-between">
          <a
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg font-semibold transition-colors hover:text-teal-600 dark:hover:text-teal-400"
          >
            {{ repo.name }}
          </a>
          <span class="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            <svg class="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            {{ repo.stars }}
          </span>
        </div>
        <p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ repo.description || t('projects.noDescription') }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-if="repo.language"
            class="inline-block rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-600 dark:text-teal-400"
          >
            {{ repo.language }}
          </span>
          <span
            v-for="topic in repo.topics.slice(0, 3)"
            :key="topic"
            class="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {{ topic }}
          </span>
        </div>
      </article>
    </div>
    <div v-if="repos && repos.length === 0" class="mt-16 text-center text-zinc-500">
      {{ t('projects.empty') }}
    </div>
  </section>
</template>
