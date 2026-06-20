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
  if (m.matrix) {
    links.push({
      label: 'Matrix',
      url: `https://matrix.to/#/${m.matrix}`,
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H9V7h2v10zm4 0h-2V7h2v10z',
    })
  }
  if (m.discord) {
    links.push({
      label: 'Discord',
      url: `https://discord.gg/${m.discord}`,
      icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z',
    })
  }
  if (m.telegram) {
    links.push({
      label: 'Telegram',
      url: `https://t.me/${m.telegram}`,
      icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    })
  }
  if (m.bilibili) {
    links.push({
      label: 'Bilibili',
      url: `https://space.bilibili.com/${m.bilibili}`,
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
    })
  }
  if (m.email) {
    links.push({
      label: 'Email',
      url: `mailto:${m.email}`,
      icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
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
            class="group inline-flex items-center justify-center rounded-full border border-zinc-300 p-2 text-xs text-zinc-600 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-teal-500/50 dark:hover:text-white"
          >
            <svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path :d="link.icon" />
          </svg>
            <span class="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-1.5 group-hover:max-w-32">{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose prose-zinc max-w-none dark:prose-invert prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-zinc-800 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200" v-html="member.bio" />
    </div>
  </div>
</template>
