<script setup lang="ts">
const { locale, t } = useI18n()
const { members } = useMembers()

function memberUrl(m: { slug: string }) {
  const lang = locale.value.startsWith('zh') ? '' : 'en/'
  return `/${lang}team/${m.slug}`
}
</script>

<template>
  <section class="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-32">
    <div class="mb-16 text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-white">{{ t('team.title') }}</h2>
      <p class="mt-3 text-zinc-600 dark:text-zinc-500">{{ t('team.subtitle') }}</p>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="(m, i) in members"
        :key="i"
        :to="memberUrl(m)"
        class="group flex flex-col items-center rounded-2xl border border-transparent px-6 py-10 text-center transition-colors hover:border-zinc-200 hover:bg-zinc-100 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/50"
      >
        <div v-if="m.github" class="h-20 w-20">
          <img
            :src="useAvatarUrl(m.github)"
            :alt="m.name"
            class="h-20 w-20 rounded-full bg-zinc-200 ring-2 ring-teal-500/20 transition-shadow group-hover:ring-teal-500/40 dark:bg-zinc-800"
          />
        </div>
        <h3 class="mt-5 text-lg font-semibold transition-colors group-hover:text-zinc-900 dark:group-hover:text-white">{{ m.name }}</h3>
        <p class="mt-1 text-sm text-teal-600 dark:text-teal-400/80">{{ m.role }}</p>
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600 italic dark:text-zinc-500">&ldquo;{{ m.motto }}&rdquo;</p>
      </NuxtLink>
    </div>
  </section>
</template>
