import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Blog({ title, description, date, markdownBody }) {
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={description}></meta>
                <title>{`${title} | Aman ki Baat`}</title>
            </Head>
            <div className="linerGradient"></div>

            <nav>
                <Link href="/">
                    <h1 className="post__nav">Aman ki baat</h1>
                </Link>
            </nav>
            <main className="post">
                <h1 className="post__title">{title}</h1>
                <p className="post__date">{date}</p>
                <div>
                    <ReactMarkdown source={markdownBody} />
                </div>
            </main>
            
            <hr style={{borderBottom: '3px solid rgb(102 51 153)'}} />
            
            {/** footer */}
            <footer style={{margin: '0 0 80px 0'}}>
                <Link href="/">
                    <a>← Back to all blogs</a>
                </Link>
            </footer>
        </React.Fragment>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = await import(`../../content/${postname}.md`)
    // console.log(content)
    const data = matter(content.default)
    // console.log(data.data.title)

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