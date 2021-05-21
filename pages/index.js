import React from 'react';
import Link from 'next/link'
import matter from 'gray-matter'

import Header from '../components/Header'
import { getTime } from '../utils/getTime';

export default function Index({ posts, title, description, ...props }) {
  return (
    <div className="layoutContainer">
      <Header pageTitle={title} description={description} />

      <main>
        <div className="main__div">
          <h5 className="main__text">
            Hi, I'm Aman, a a third-year undergraduate in Computer Science at IIIT India.
            I’m passionate about Blockchain, Mathematics, and Algorithms.
            Here I write about what I find intresting on internet.
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
                        {getTime(post.frontmatter.date)}
                      </p>
                      <h2 className="main_li_title">
                        {post.frontmatter.title}
                      </h2>
                      <p className="main_li_subheading">
                        {post.frontmatter.abstract}
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
      <footer>
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
      // console.log(document.data)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    // sort data
    data.sort((a, b) => (a.frontmatter.date < b.frontmatter.date) ? 1 : ((a.frontmatter.date > b.frontmatter.date) ? -1 : 0))
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