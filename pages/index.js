import Head from 'next/head'
import matter from 'gray-matter'


export default function Index({ posts, title, description, ...props }) {
  return (
    <div>
      {/* site header and navigation */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
      </Head>

      <header>
        <div className="header-block">
          <div className="header-top">
            <h1 className="header-title">Aman ki baat</h1>
            <button>Dark</button>
          </div>
          <div className="header-bio">
            <div className="header-bio-image">
              <img className="bio-img" src="./static/aman.jpg" />
            </div>
            <div>Blog made while learning Next.js <br /> haha </div>
          </div>
        </div>
      </header>

      <div className="main-body">
        <main>
          <div>
            <h2 className="blog-title">First Blog</h2>
            <small>Aaj ki date</small>
            <p className="blog-desc">Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in </p>
          </div>
          <div>
            <h2 className="blog-title">First Blog</h2>
            <small>Aaj ki date</small>
            <p className="blog-desc">Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in </p>
          </div>
          <div>
            <h2 className="blog-title">First Blog</h2>
            <small>Aaj ki date</small>
            <p className="blog-desc">Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in </p>
          </div>
          <div>
            <h2 className="blog-title">First Blog</h2>
            <small>Aaj ki date</small>
            <p className="blog-desc">Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in </p>
          </div>
        </main>
        <footer>© 2020, Powered by</footer>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'My Title'
    }
  }
}