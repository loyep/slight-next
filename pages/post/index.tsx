// import { useRouter } from 'next/router'
import { NextPage, NextPageContext } from 'next'

interface PostsProps {
  title?: string
}

const Posts: NextPage<PostsProps> = (_props) => {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">Posts</h1>
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

// Posts.getInitialProps = ({ query: _query }: NextPageContext): PostsProps => {
//   return {
//   };
// }

export default Posts
