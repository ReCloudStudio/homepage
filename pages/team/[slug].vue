<script setup lang="ts">
const route = useRoute()
const { member } = useMember(route.params.slug as string)
const { locale, t } = useI18n()

if (!member.value) {
  throw createError({ statusCode: 404, statusMessage: 'Member not found' })
}

const socialLinks = computed(() => {
  const m = member.value!
  const links: Array<{ label: string; url: string; icon: string }> = []
  if (m.github) {
    links.push({
      label: 'GitHub',
      url: `https://github.com/${m.github}`,
      icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z',
    })
  }
  if (m.twitter) {
    links.push({
      label: 'Twitter',
      url: `https://twitter.com/${m.twitter}`,
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    })
  }
  if (m.website) {
    links.push({
      label: new URL(m.website).hostname,
      url: m.website,
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    })
  }
  return links
})
</script>

<template>
  <div v-if="member" class="relative z-10 mx-auto max-w-4xl px-6 py-32">
    <NuxtLink
      :to="locale === 'en' ? '/en/team' : '/team'"
      class="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
    >
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {{ t('team.back') }}
    </NuxtLink>

    <div class="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
      <div v-if="member.github" class="h-32 w-32 sm:h-40 sm:w-40">
        <img
          :src="useAvatarUrl(member.github)"
          :alt="member.name"
          class="h-32 w-32 rounded-full bg-zinc-200 shadow-lg sm:h-40 sm:w-40 dark:bg-zinc-800"
        />
      </div>
      <div class="mt-6 sm:mt-0 sm:ml-10">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ member.name }}</h1>
        <p class="mt-2 text-lg text-teal-600 dark:text-teal-400/80">{{ member.role }}</p>
        <p class="mt-1 max-w-lg text-sm italic text-zinc-600 dark:text-zinc-400">&ldquo;{{ member.motto }}&rdquo;</p>
        <div v-if="socialLinks.length" class="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            v-for="link in socialLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-1.5 text-xs text-zinc-600 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-teal-500/50 dark:hover:text-white"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path :d="link.icon" />
          </svg>
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose prose-zinc max-w-none dark:prose-invert" v-html="member.bio" />
    </div>
  </div>
</template>
