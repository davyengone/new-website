import type { AppProps as NextAppProps } from 'next/app'
import type { FunctionComponent } from 'react'
import Script from 'next/script'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import { DefaultSeoConfig } from '~/default-seo.config'
import 'focus-visible/dist/focus-visible'
import { theme } from '~/theme'

type EnhancedComponent = NextAppProps['Component'] & {
  layout: FunctionComponent
}
type AppProps = NextAppProps & { Component: EnhancedComponent }

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.layout || MainLayout

  return (
    <>
        <Script strategy="lazyOnload" id="video-ask">
        {`
          window.VIDEOASK_EMBED_CONFIG = {
            kind: 'widget',
            url: 'https://www.videoask.com/fitxs0ezv',
            options: {
              widgetType: 'VideoThumbnailSmall',
              text: 'Talk to me',
              backgroundColor: '#FE0030',
              position: 'bottom-right',
              dismissible: false,
            },
          }
        `}
      </Script>
      <Script strategy="lazyOnload" src="https://www.videoask.com/embed/embed.js" />
      <Script strategy="lazyOnload" src="https://cdn.splitbee.io/sb.js" />
      <ChakraProvider theme={theme}>
        <DefaultSeo {...DefaultSeoConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
