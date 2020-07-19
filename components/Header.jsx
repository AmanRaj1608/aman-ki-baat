import Head from 'next/head'


export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        
        <div className="content">{children}</div>
      </section>
      <footer>
        Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
      </footer>
    </>
  )
}