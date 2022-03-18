import Image from 'next/image'

export default function IndexPage() {
	return (
			<div className="index">
				<div>
			 	  <Image priority src="/images/devcaminhante.jpg" height={144} width={144} alt="DevCaminhante"/>
				</div>

				<p>DevCaminhante é um projeto dedicado ao acolhimento tanto para quem está pensando em entrar na área de programação como para quem está começando a aprender nesta área. Também recebe de braços abertos os devs mais experientes que querem compartilhar conhecimento e também aprender, estimulando o crescimento mútuo, sempre com a mentalidade que todos somos aprendizes. :)</p>

				<h2>ATENÇÃO: Nosso principal canal de comunicação é pelo endereço https://t.me/DevCaminhante. Caso ocorra um bloqueio do Telegram, a comunidade continua se reunindo no Discord, pelo endereço https://discord.gg/jqwha8GG e seguindo as mesmas regras descritas no endereço https://github.com/DevCaminhante/docs/blob/dev/regras.md. Quaisquer atualizações serão incluídas aqui nessa seção, na página inicial. Obrigado pela compreensão.</h2>
			</div>
	)
}
