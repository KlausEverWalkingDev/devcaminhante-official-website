import '../styles/global.css'
import Footer from '../components/footer'
import Main from '../components/main'
import Navbar from '../components/navbar'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
			<>
				<Navbar />
				<Main>
				 <Component children {...pageProps} />
				</Main>
				<Footer />
			</>
	)
}
