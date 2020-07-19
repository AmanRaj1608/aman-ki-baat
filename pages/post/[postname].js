import Link from 'next/link'
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Header from '../../components/Header'

export default function Blog({ setTitle, frontmatter, markdownBody }) {
    return (
        <div>
            <Header pageTitle={frontmatter.title} description={frontmatter.title} />
            <div className="post">
                <main>
                    <h1 className="post-title" >{frontmatter.title}</h1>
                    <p className="post-date">{frontmatter.date}</p>
                    <div>
                        <ReactMarkdown source={markdownBody} />
                    </div>
                </main>
                <hr />
                <Link href="/">
                    <a>← Back to post list</a>
                </Link>
            </div>
        </div>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = await import(`../../content/${postname}.md`)
    // console.log(content)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: 'Haha',
            frontmatter: data.data,
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