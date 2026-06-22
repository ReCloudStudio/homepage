<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; background: #0a0a12; font-family: 'DM Sans', 'Noto Sans SC', sans-serif; position: relative;"
  >
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
      <div
        style="display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 14px; background: rgba(20, 184, 166, 0.15);"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      </div>
      <span style="font-size: 48px; font-weight: 700; color: white; letter-spacing: -0.02em;">
        ReCloud
      </span>
      <span style="font-size: 48px; font-weight: 700; color: #14b8a6; letter-spacing: -0.02em;">
        Studio
      </span>
    </div>

    <div style="width: 80px; height: 3px; border-radius: 2px; background: linear-gradient(to right, #14b8a6, #0d9488); margin-bottom: 24px;" />

    <div v-if="title" style="font-size: 32px; font-weight: 600; color: white; text-align: center; max-width: 80%; margin-bottom: 12px;">
      {{ title }}
    </div>

    <div v-if="description" style="font-size: 22px; color: #a1a1aa; text-align: center; max-width: 70%;">
      {{ description }}
    </div>
    <div v-else style="font-size: 22px; color: #a1a1aa; text-align: center; max-width: 70%;">
      We build open-source software. Fair, transparent, and community-driven.
    </div>
  </div>
</template>
