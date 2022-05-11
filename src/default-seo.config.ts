import type { DefaultSeoProps } from 'next-seo'
import { UserConfig } from '~/user.config'

const description = UserConfig.author.position

const DefaultSeoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${UserConfig.author.name}`,
  defaultTitle: UserConfig.author.name,
  description,
  openGraph: {
    type: 'website',
    url: 'https://davyengone.io',
    title: UserConfig.author.name,
    images: [
      {
        url: '',
        width: 200,
        height: 200,
        alt: 'Davy Engone Smiling',
      },
    ],
    site_name: description,
  },
  twitter: {
    handle: '@davyengone',
    cardType: 'summary',
    site: '@davyengone',
  },
}

export { DefaultSeoConfig }
