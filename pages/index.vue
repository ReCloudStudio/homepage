<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div>
    <main
      class="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <h1
        class="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
        style="animation-delay: 0.1s"
      >
        <span class="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-500">
          {{ $t('hero.title1') }}
        </span>
      </h1>

      <p
        class="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-500 animate-fade-up"
        style="animation-delay: 0.2s"
      >
        {{ $t('hero.subtitle') }}
      </p>

      <p
        class="mt-6 font-serif text-2xl italic tracking-wide text-teal-500 dark:text-teal-400 animate-fade-up"
        style="animation-delay: 0.3s"
      >
        {{ $t('hero.motto') }}
      </p>

      <div
        class="mt-12 flex items-center gap-4 animate-fade-up"
        style="animation-delay: 0.4s"
      >
        <NuxtLink
          :to="localePath('/projects')"
          class="group relative inline-flex items-center gap-2.5 rounded-full bg-teal-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25 active:scale-95"
        >
          {{ $t('hero.cta') }}
          <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </NuxtLink>
        <NuxtLink
          :to="localePath('/team')"
          class="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-medium text-zinc-600 transition-all duration-300 hover:border-zinc-400 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
        >
          {{ $t('hero.demo') }}
        </NuxtLink>
      </div>

      <div class="mt-20 flex flex-wrap items-center justify-center gap-3">
        <span
          v-for="(label, j) in [$t('features.oss'), $t('features.community'), $t('features.transparent'), $t('features.permissive')]"
          :key="j"
          class="animate-fade-up rounded-full border border-zinc-200 px-4 py-1.5 text-xs text-zinc-600 transition-colors duration-300 hover:border-teal-300 hover:text-teal-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-teal-700 dark:hover:text-teal-400"
          :style="{ animationDelay: `${0.5 + j * 0.08}s` }"
        >
          {{ label }}
        </span>
      </div>
    </main>
  </div>
</template>
