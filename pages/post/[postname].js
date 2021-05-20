import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';

const Blog = ({ title, description, date, markdownBody }) => {
  return (
    <React.Fragment>
      <Header pageTitle={title} description={description} />
      <main className="post">
        <Link href={{ pathname: '/' }}>
          <a className="post_link">~/home/</a>
        </Link>
        <h2 className="post_title">{title}</h2>
        <p className="post_date">
          <em><strong>{date}</strong></em>
        </p>
        <p className="post_desc">
          <em>
            This will be the subheading fetched from the blogs mdx.
          </em>
        </p>
        <hr />

        <ReactMarkdown source={markdownBody} />
      </main>

      {/** footer */}
      <footer style={{ paddingBottom: 60 }}>
        <Link href={{ pathname: '/' }}>
          <a className="post_link">← Back to all blogs</a>
        </Link>
      </footer>
    </React.Fragment>
  )
}

export default Blog;

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params
  const content = await import(`../../content/${postname}.md`)
  const data = matter(content.default)
  return {
    props: {
      title: data.data.title,
      description: data.data.title,
      date: data.data.date,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
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