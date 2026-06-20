<script setup lang="ts">
import { marked } from 'marked'

const { locale } = useI18n()

const files = import.meta.glob('/content/{en,zh}/conduct.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const html = computed(() => {
  const lang = locale.value.startsWith('zh') ? 'zh' : 'en'
  const raw = files[`/content/${lang}/conduct.md`]
  return raw ? (marked.parse(raw) as string) : ''
})
</script>

<template>
  <section class="relative z-10 mx-auto max-w-3xl px-6 py-32">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="html" class="prose prose-zinc mx-auto dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h1:text-3xl prose-h1:text-center prose-h1:tracking-tight sm:prose-h1:text-4xl prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-li:marker:text-zinc-400" v-html="html" />
  </section>
</template>
