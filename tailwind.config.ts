import type { Config } from 'tailwindcss'

declare function require(name: string): unknown

export default <Config>{
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: [
    'app.vue',
  ],
}
