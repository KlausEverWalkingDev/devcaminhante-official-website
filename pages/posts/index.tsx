import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";

export const getStaticProps = async function () {
	const allPostsData = getSortedPostsData()

	return {
		props: { allPostsData }
	}
}

export default function Posts({ allPostsData }) {
	return (
			<div className={styles.header}>
				<header>
				<h1>Posts</h1>
				</header>
				        <section className={`${utilStyles.headingMd} ${utilStyles.paddingTop1px}`}>
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
				</div>
	)
}
