import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter';

import Markdown from '../../components/Markdown';
import Header from '../../components/Header';
import ViewCounter from '../../components/ViewCounter';
import { getTime } from '../../utils/getTime';

const Blog = ({ title, description, date, slug, markdownBody }) => {
  return (
    <React.Fragment>
      <Header pageTitle={title} description={description} />
      <main className="post">
        <Link href={{ pathname: '/' }}>
          <a className="post_link">~/home/</a>
        </Link>
        <h2 className="post_title">{title}</h2>
        <p className="post_date">
          <em><strong>{getTime(date)}</strong></em>
          <ViewCounter slug={slug} />
        </p>
        <p className="post_desc">
          <em>{description}</em>
        </p>
        <hr />
        <Markdown source={markdownBody} />
      </main>

      {/** footer */}
      <footer>
        <Link href={{ pathname: '/' }}>
          <a className="post_link">← Back to all blogs</a>
        </Link>
      </footer>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  const { postname } = params;
  const content = await import(`../../content/${postname}.md`)
  const data = matter(content.default)

  return {
    props: {
      title: data.data.title,
      description: data.data.abstract,
      date: data.data.date,
      slug: postname,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, i) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../content', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)
  return {
    paths,
    fallback: false,
  }
}

export default Blog;