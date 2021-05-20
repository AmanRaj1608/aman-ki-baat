import Head from 'next/head'
import Link from 'next/link'

export default function Header({ pageTitle, description }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="Description" content={description}></meta>
      </Head>

      <header>
        <Link href="/">
          <a className="header_link">
            <h1 className="header_link_text">Aman Raj</h1>
          </a>
        </Link>
      </header>

      <div className="nav">
        <div className="nav__bio">
          <div className="nav__bio__imgcont">
            <img className="nav__bio__img" src="/static/aman.jpg" alt="Aman Raj" />
          </div>
          <div>
            Jack of all trades, master of none.
            <br />
            Words by <Link href="http://amanraj.dev/"><a className="header_link_u">Me</a></Link>
          </div>
        </div>

        <div>
          <a className="header_link_u" href="https://twitter.com/AmanRaj1608" rel="noopener noreferrer" target="_blank">twitter</a>
          <a className="header_link_u" href="https://www.linkedin.com/in/amanraj1608/" rel="noopener noreferrer" target="_blank">linkedin</a>
        </div>
      </div>
    </>
  )
}