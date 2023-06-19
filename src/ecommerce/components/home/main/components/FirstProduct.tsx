import { infoProducts } from "../../../../data/home/info-products"
import { ButtonSecondary, FirstProductStyled } from "../../../styles"

export const FirstProduct = () => {
	
	const firstProduct = infoProducts[0];
	const { description, image: {bg_mobile, bg_tablet, bg_desktop}, title } = firstProduct;

	return (
		<>
			<FirstProductStyled>
				
				<picture>
					<source media="(min-width: 1024px)" srcSet={bg_desktop} />
					<source media="(min-width: 600px)" srcSet={bg_tablet} />
					<img src={bg_mobile} alt="first-product-image" />
				</picture>

				<div className="container-first-product">
					<h2>{title}</h2>
					<p>{description}</p>

					<ButtonSecondary
						$secondary={true}
						$bgColor="dark"
					>
						Ver producto
					</ButtonSecondary>
				</div>

			</FirstProductStyled>
		</>
	)
}
