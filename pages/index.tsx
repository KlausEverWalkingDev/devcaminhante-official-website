import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps = async function () {
  const allPostsData = getSortedPostsData()

  return {
    props: { allPostsData }
  }
}

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>DevCaminhante é um projeto dedicado ao acolhimento tanto para quem está pensando em entrar na área de programação como para quem está começando a aprender nesta área. Também recebe de braços abertos os devs mais experientes que querem compartilhar conhecimento e também aprender, estimulando o crescimento mútuo, sempre com a mentalidade que todos somos aprendizes. :)</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.paddingTop1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link><br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
        </section>
      </Layout>
  )
}
