import type { Dict } from '@chakra-ui/utils'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const primaryColor = {
  50: '#e72531',
  100: '#e72531',
  200: '#e72531',
  300: '#93bb9f',
  400: '#75a881',
  500: '#e72531',
  600: '#e72531',
  700: '#325033',
  800: '#e72531',
  900: '#e72531',
}

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  colors: {
    primary: primaryColor,
  },
  fonts: {
    heading: '"Rubik", sans-serif;',
    body: '"Karla", sans-serif;',
  },
  styles: {
    global: {
      'html, body, #__next': { height: '100%' },
    },
  },
  components: {
    Heading: {
      variants: {
        gradient: (props: Dict) => {
          return {
            bgGradient: mode(
              'linear(to-br, primary.400, primary.700)',
              'linear(to-br, primary.200, primary.400)'
            )(props),
            bgClip: 'text',
          }
        },
      },
    },
  },
})

export { theme }
