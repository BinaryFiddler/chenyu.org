import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className='bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
