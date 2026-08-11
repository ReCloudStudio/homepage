export interface Partner {
  name: string
  url: string
  category: 'partner' | 'friend'
}

export const partners: Partner[] = [
  {
    name: 'TransHelper',
    url: 'https://transhelper.org',
    category: 'partner',
  },
]