import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Import Images */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#389393"></meta>

          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta property="og:title" content="Aman Raj" />
          <meta property="og:description" content="I learn and build stuff on internet and share my learnings." />
          <meta property="og:image" content="/icons/blog.png" />
          <meta property="og:url" content="AmanRaj1608" />
          <meta property="og:type" content="blog" />

          {/* Open Graph general (Twitter) */}
          <meta name="twitter:card" content="Aman Raj" />
          <meta name="twitter:title" content="~/amanraj.dev/blog" />
          <meta name="twitter:description" content="I learn and build stuff on internet and share my learnings." />
          <meta name="twitter:image" content="/icons/blog.png" />

          {/* Import CSS  and fonts*/}
          <link rel="preconnect" rel="stylesheet" type="text/css" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&amp;family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;