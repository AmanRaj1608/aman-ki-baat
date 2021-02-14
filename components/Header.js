import Head from 'next/head'
import Link from 'next/link'
import easterEgg from './easterEgg'

// const handleClick = (e) => {
//   e.preventDefault();
//   console.log("haha");
//   window.alert("Already dark hai bhai 😅")
// }

export default function Header({ pageTitle, description }) {
  console.log(easterEgg, "font-family:monospace");
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <nav className="nav">
        <div className="nav__top">
          <Link href="/">
            <h1 className="nav__title">Aman ki baat</h1>
          </Link>
          {/* <Link href="/">
            <p className="nav__about">About</p>
          </Link> */ }
        </div>

        <div className="nav__bio">
          <div className="nav__bio__imgcont">
            <img className="nav__bio__img" src="/static/aman.jpg" alt="Aman Raj" />
          </div>
          <div>
            Jack of all trades, master of none.
            <br />
            Words by <Link href="//amanraj.me"><a>Aman Raj</a></Link>
          </div>
        </div>
      </nav>
    </>
  )
}