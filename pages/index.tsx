import Image from 'next/image'

export default function IndexPage() {
	return (
			<div className="index">
				<div>
			 	  <Image priority src="/images/devcaminhante.jpg" height={144} width={144} alt="DevCaminhante"/>
				</div>

				<p>DevCaminhante é um projeto dedicado ao acolhimento tanto para quem está pensando em entrar na área de programação como para quem está começando a aprender nesta área. Também recebe de braços abertos os devs mais experientes que querem compartilhar conhecimento e também aprender, estimulando o crescimento mútuo, sempre com a mentalidade que todos somos aprendizes. :)</p>

				<h2>ATENÇÃO: Nosso principal canal de comunicação é pelo endereço <a href="https://t.me/DevCaminhante">https://t.me/DevCaminhante</a>. Caso ocorra um bloqueio do Telegram, a comunidade continua se reunindo no Discord, pelo endereço <a href="https://discord.gg/jqwha8GG">https://discord.gg/jqwha8GG</a> e seguindo as mesmas regras descritas no endereço <a href="https://github.com/DevCaminhante/docs/blob/dev/regras.md">https://github.com/DevCaminhante/docs/blob/dev/regras.md</a>. Quaisquer atualizações serão incluídas aqui nessa seção, na página inicial. Obrigado pela compreensão.</h2>
			</div>
	)
}
