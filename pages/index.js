import React from 'react';
import Link from 'next/link'
import matter from 'gray-matter'

import Header from '../components/Header'

export default function Index({ posts, title, description, ...props }) {
  return (
    <React.Fragment>

      <Header pageTitle={title} description={description} />
      <div className="linerGradient"></div>

      <main>
        {!posts && <div>No posts! 📝✏ </div>}

        {posts &&
          posts.map((post) => {
            return (
              <div key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a><h2 className="home__blog__title">{post.frontmatter.title}</h2></a>
                </Link>
                <span>
                  <small className="home__blog__date">{post.frontmatter.date}</small>
                  {/*<small className="home__blog__minRead">{post.frontmatter.date}</small> */}
                </span>
                <p className="home__blog__desc">{post.markdownBody.substring(0, 80)}</p>
              </div>
            )
          })}
      </main>

      <hr style={{ borderBottom: '3px solid rgb(102 51 153)' }} />

      {/** footer */}
      <footer className="footer">
        Created with ❤️ by Aman, © 2021
      </footer>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const posts = ((context) => {

    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../content', true, /\.md$/))

  return {
    props: {
      posts,
      title: 'Home | Aman ki baat',
      description: 'Personal Blog of Aman Raj who is an Undergraduate Engineering student at IIIT Vadodara.',
    },
  }
}