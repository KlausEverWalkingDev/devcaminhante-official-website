import styles from './styles/menu.module.css'
import Link from 'next/link'

export default function Menubar() {
	return (
				<ul className={styles.menu}>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>

					<li>
						<Link href="/posts">
							<a>Posts</a>
						</Link>
					</li>

					<li>
						<Link href="/autores">
							<a>Autores</a>
						</Link>
					</li>
				</ul>
	)
}
