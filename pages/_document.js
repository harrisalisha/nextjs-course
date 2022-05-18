import { Html, Head, Main, NextScript } from 'next/document'

// this is render on server
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}