
import Document, {
	Html,
	Head,
	Main,
	NextScript,
    DocumentContext,
    DocumentProps,
	DocumentInitialProps
} from 'next/document';

export default class SlightDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
		const initialProps: DocumentInitialProps = await Document.getInitialProps(
			ctx
        );
        console.log(initialProps)
		return { ...initialProps };
    }
    
    static renderDocument<P>(
        DocumentComponent: new () => Document<P>,
        props: DocumentProps & P
      ): React.ReactElement {
        props.isDevelopment = true
        return super.renderDocument(DocumentComponent, props)
      }
    
    render() {
        return (
          <Html>
            <Head>
              <meta content="Description goes here." />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
              <Main></Main>
              <NextScript></NextScript>
            </body>
          </Html>
        );
      }
}