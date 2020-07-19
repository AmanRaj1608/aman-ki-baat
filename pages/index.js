import Header from '../components/Header'
import Link from 'next/link'
import matter from 'gray-matter'


export default function Index({ posts, title, description, ...props }) {
  return (
    <div>
      <Header pageTitle={title} description={description} />
      <div className="main-body">
        {!posts && <div>No posts! 📝✏ </div>}
        <main>
          {posts &&
            posts.map((post) => {
              return (
                <div key={post.slug}>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <h2 className="blog-title"><a>{post.frontmatter.title}</a></h2>
                  </Link>
                  <small>{post.frontmatter.date}</small>
                  <p className="blog-desc">{post.markdownBody.substring(0, 100) + '...'}</p>
                </div>
              )
            })}
        </main>
        <footer>© 2020, Created with ❤ by <Link href="/">@AmanRaj1608</Link></footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const posts = ((context) => {

    // console.log(context)
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

  // console.log(posts)

  return {
    props: {
      posts,
      title: 'Aman Ki Baat',
      description: 'Desc',
    },
  }
}