export const siteConfig = {
  title: 'ReCloud Studio',
  description: 'We build open-source software. Fair, transparent, and community-driven.',

  email: 'Y29udGFjdEB3b3JsZGV4ZWN1dGUubWU=',

  social: {
    github: 'recloudstudio',
    twitter: 'recloudstudio',
    telegram: 'recloudstudio',
    discord: undefined as string | undefined,
  },

  repos: ['WebHooker', 'Mailer', 'SleepyXposed', 'Shit-Bot', 'x-to-img', 'homepage'],
}

export type SiteConfig = typeof siteConfig
