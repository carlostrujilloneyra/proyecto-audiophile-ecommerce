import { footerTopInfo } from "../../../data/shared/footer-top-shared"
import { FooterTopSP, FooterTopStyled } from "../../styles/footer-top/FooterTopStyled";

export const FooterTop = () => {

	const { image: {bg_mobile, bg_tablet, bg_desktop}, text } = footerTopInfo;

	return (
		<>
			
			<FooterTopStyled className="container">
				<div>
					<picture>
						<source media="(min-width: 1024px)" srcSet={bg_desktop} />
						<source media="(min-width: 600px)" srcSet={bg_tablet} />
						<img src={bg_mobile} alt="first-product-image" />
					</picture>
				</div>
				
				<FooterTopSP>
					<h2>Te traemos el <span>mejor</span> equipo de audio</h2>
					<p>{text}</p>
				</FooterTopSP>
				
			</FooterTopStyled>

		</>
	)
}
