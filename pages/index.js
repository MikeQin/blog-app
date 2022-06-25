import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout';
import styles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';
import Image from 'next/image';

// 1. Pre-remdering: Static generation
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// 2. Pre-remdering: Server-side Rendering example
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     },
//   };
// }

// Client-side Rendering example
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <p>Hello, this is <b>Michael</b>. I'm a director of systems engineering. 
        You can contact me on {' '}
        <Link href="https://twitter.com/michaelqin">Twitter</Link>.
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Modal Demo</h2>
        <Link href='/video'>View YouTube video</Link>
      </section>
      <section className={styles.headingMd}>
        <br/>
        <a href="https://twitter.com/michaelqin">
          <Image src="/images/twitter-logo.jpg" width={100} height={100} alt="twitter"/>
        </a>
        <p>
          (Powered by{' '}
          <a href="https://nextjs.org">{' '}Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}
