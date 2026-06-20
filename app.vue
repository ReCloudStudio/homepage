<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()

const emailLink = `/api/email/${btoa(siteConfig.email)}`

const localeOptions = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文' },
]

function onLocaleChange(event: Event) {
  const newLocale = (event.target as HTMLSelectElement).value as 'en' | 'zh-CN'
  setLocale(newLocale)
}

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-[#0a0a12] dark:text-white">
    <div class="pointer-events-none fixed inset-0 z-0">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-[#0a0a12]/80 dark:to-[#0a0a12]" />
      <div class="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-[128px]" />
      <div class="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[128px]" />
    </div>

    <nav class="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20">
          <svg class="h-5 w-5 text-teal-500 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <NuxtLink :to="localePath('/')" class="text-lg font-bold tracking-tight">ReCloud <span class="text-teal-500 dark:text-teal-400">Studio</span></NuxtLink>
      </div>
      <div class="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <NuxtLink :to="localePath('/')" class="transition-colors hover:text-zinc-900 dark:hover:text-white">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/projects')" class="transition-colors hover:text-zinc-900 dark:hover:text-white">{{ $t('nav.projects') }}</NuxtLink>
        <NuxtLink :to="localePath('/team')" class="transition-colors hover:text-zinc-900 dark:hover:text-white">{{ $t('nav.team') }}</NuxtLink>
        <NuxtLink :to="localePath('/conduct')" class="transition-colors hover:text-zinc-900 dark:hover:text-white">{{ $t('nav.conduct') }}</NuxtLink>
        <a :href="emailLink" class="rounded-full border border-zinc-300 px-5 py-2 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:hover:border-teal-500/50 dark:hover:text-white">
          {{ $t('nav.contact') }}
        </a>
        <button
          class="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
          :title="colorMode.value === 'dark' ? 'Switch to light' : 'Switch to dark'"
          @click="toggleTheme"
        >
          <svg v-if="colorMode.value === 'dark'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
      </div>
      <select
        :value="locale"
        class="ml-2 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-600 outline-none transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600"
        @change="onLocaleChange"
      >
        <option
          v-for="loc in localeOptions"
          :key="loc.code"
          :value="loc.code"
          class="bg-white dark:bg-zinc-900"
        >
          {{ loc.name }}
        </option>
      </select>
    </nav>

    <NuxtPage />

    <footer class="relative z-10 border-t border-zinc-200 px-6 py-12 dark:border-zinc-900">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div class="text-xs text-zinc-500 dark:text-zinc-700">
          &copy; {{ new Date().getFullYear() }} ReCloud Studio. {{ $t('footer.copyright') }}
        </div>
        <div class="flex items-center gap-6">
          <a
            href="https://github.com/recloudstudio"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" /></svg>
            {{ $t('social.github') }}
          </a>
          <a
            href="https://twitter.com/recloudstudio"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            {{ $t('social.twitter') }}
          </a>
          <a
            href="https://discord.gg/recloudstudio"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" /></svg>
            {{ $t('social.discord') }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
