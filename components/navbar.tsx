import styles from './styles/navbar.module.css'
import Image from 'next/image'
import Menubar from './menubar'

export default function Navbar() {
	return (
			<nav className={styles.navbar}>
				<Image alt="DevCaminhante" src="/images/devcaminhante_logo.png" width="255" height="50" />

				<Menubar />
			</nav>
	)
}
