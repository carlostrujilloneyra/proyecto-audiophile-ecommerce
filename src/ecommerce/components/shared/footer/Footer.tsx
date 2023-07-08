import { socialNetworks } from "../../../data/socials"
import { FooterContainer, SocialNetworksFooter } from "../../styles/footer/FooterContainer"
import { Logo, Nav } from "../header/components"

export const Footer = () => {
	return (
		<>
			<FooterContainer className="container">
				
				<div className="first-part-footer">
					<Logo />
					<Nav/>
				</div>

				<div className="second-part-footer">
					<div className="second-part-footer-paragraph">
						<p>
							Audiophile es un todo en uno para satisfacer sus necesidades de audio. Somos un pequeño equipo de amantes de la música y especialistas en sonido que se dedican a ayudarlo a aprovechar al máximo el audio personal. Venga y visite nuestras instalaciones de demostración: estamos abiertos los 7 días de la semana.
						</p>
					</div>

					<SocialNetworksFooter>
					{
						socialNetworks.map(({image, name}) => {
							return <img className="image-logo-header" key={name} src={image} alt={name} />
						})
					}
				</SocialNetworksFooter>

				</div>

				<div className="developed-by">
					<p>Desarrollado por: Carlos Trujillo</p>
				</div>

			</FooterContainer>
		</>
	)
}
