import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import StyleGlobal from '~/styles/global';

export default class MeuDocumento extends Document {
  state = {};

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta
            name="description"
            content="Oferecemos uma solução integrada para divulgar a sua marca em diversas plataformas online, gerando tráfego e visibilidade para o seu negócio."
          />
          <meta
            name="google-site-verification"
            content="JaG-C5kmnk7UDgQITKvxjiJvdLKFXTlxOhEgOLGRCKE"
          />
          <StyleGlobal />
        </Head>
        <body>
          <Main />
          <NextScript />

          <div className="footer">
            <div className="content section-40">
              <div className="content-footer">
                <span>Fortaleza - Ceará - Brasil</span>
                <span>© 2019 Elabore Digital</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
