import Document, { Html, Head, Main, NextScript as BaseScript } from 'next/document'

export class NextScript extends BaseScript {
  getScripts(files: any) {
    const scripts = super.getScripts(files)
    if (process.env.NODE_ENV === 'production') {
      scripts.forEach((script) => {
        script.props.async = false
      })
    }
    return scripts
  }
}

export default class SlightDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/fonts/iconfont/iconfont.css" as="style" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}