import React from 'react';
import Link from 'next/link'
import matter from 'gray-matter'

import Header from '../components/Header'

export default function Index({ posts, title, description, ...props }) {
  return (
    <div className="layoutContainer">
      <Header pageTitle={title} description={description} />

      <main>
        <div className="main__div">
          <h5 className="main__text">
            Hi, I'm Aman, a a third-year undergraduate in Computer Science at IIIT India.
            I’m passionate about Blockchain, Mathematics, and Algorithms.
            Here I write about what I find intresting.
          </h5>

          <div>
            <h2 className="main__title">
              Writings
            </h2>

            <ul className="main_ul">
              {posts &&
                posts.map((post) => {
                  return (
                    <li className="main_li" key={post.slug}>
                      <p className="main_li_date">
                        {post.frontmatter.date}
                      </p>
                      <h2 className="main_li_title">
                        {post.frontmatter.title}
                      </h2>
                      <p className="main_li_subheading">
                        {post.markdownBody.substring(0, 80)}
                      </p>
                      <Link href={{ pathname: `/post/${post.slug}` }}>
                        <a className="main_li_link">Read more</a>
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </main>

      {/** footer */}
      <footer className="footer">
        © 2021 by Aman Raj. All rights reserved.
      </footer>
    </div>
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
      title: "~/blog/ by Aman Raj",
      description: 'I learn and build stuff on internet and share my learnings.',
    },
  }
}