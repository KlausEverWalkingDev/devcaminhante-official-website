import Image from 'next/image'

export default function IndexPage() {
	return (
			<div className="index">
				<div>
			 	  <Image priority src="/images/devcaminhante.jpg" height={144} width={144} alt="DevCaminhante"/>
				</div>

				<p>DevCaminhante é um projeto dedicado ao acolhimento tanto para quem está pensando em entrar na área de programação como para quem está começando a aprender nesta área. Também recebe de braços abertos os devs mais experientes que querem compartilhar conhecimento e também aprender, estimulando o crescimento mútuo, sempre com a mentalidade que todos somos aprendizes. :)</p>
			</div>
	)
}
