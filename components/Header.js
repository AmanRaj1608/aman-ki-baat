import Head from 'next/head'
import Link from 'next/link'

const handleClick = (e) => {
  e.preventDefault();
  console.log("haha");
  window.alert("Already dark hai bhai 😅")
}

export default function Layout({ pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <header>
        <div className="header-block">
          <div className="header-top">
            <Link href="/"><h1 className="header-title">Aman ki baat</h1></Link>
            
            <button onClick={handleClick}>Dark Mode</button>
          </div>
            <div className="header-bio">
              <div className="header-bio-image">
                <img className="bio-img" src="/static/aman.jpg" />
              </div>
              <div>
                Jack of all trades, master of none.
              <br />
              Words by <Link href="https://amanraj1608.netlify.app/"><a>Aman Raj</a></Link>  •
              <Link href="https://twitter.com/amanraj1608"><a> Twitter</a></Link>  •
              <Link href="https://github.com/AmanRaj1608"><a> GitHub</a></Link>
              </div>
            </div>
          </div>
      </header>
    </>
  )
}