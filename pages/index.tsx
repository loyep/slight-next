
import Head from 'next/head'
import Link from 'next/link'
import { fetchPostList} from '@/api'

// import { useRouter } from 'next/router'
import { NextPage, NextPageContext } from 'next';

interface HomeProps {
  title?: string
  data: any[]
  page: number
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className="container">
      <Head>
        <title>{props.title}</title>
      </Head>
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/post">
          <a>Posts</a>
        </Link>

        <Link href="/post/18">
          <a>Post-18</a>
        </Link>
        <p className="description">
          Get started by editing
          <code className="code">pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async ({ query }: NextPageContext) => {
  const page = 1
  const res = await fetchPostList({ page })
  return {
    data: res.list,
    page,
    // slug: String(slug),
  };
}

export default Home;