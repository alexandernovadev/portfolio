import '@/styles/global/index.css'
import { themeDark } from '@/styles/themes/darkmode'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
