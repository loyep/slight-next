import Document, { Html, Head, Main, NextScript } from 'next/document'
import crypto from 'crypto'

const cspHashOf = (text: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}

export default class SlightDocument extends Document {
  render() {
    let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}`
    if (process.env.NODE_ENV !== 'production') {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )}`
    }
    return (
      <Html>
        <SltHead>
          <link rel="stylesheet" href="/fonts/iconfont/iconfont.css" as="style" />
          <link rel="manifest" href="/manifest.json" />
        </SltHead>
        <body>
          <Main></Main>
          <SltScript></SltScript>
        </body>
      </Html>
    )
  }
}

export class SltScript extends NextScript {
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

export class SltHead extends Head {}
