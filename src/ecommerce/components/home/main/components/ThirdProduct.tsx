import { Link } from "react-router-dom";
import { infoProducts } from "../../../../data/home/info-products"
import { ButtonSecondary } from "../../../styles";
import { FirstContainerTP, ThirdProductStyled} from "../../../styles/containers/ThirProductStyled";

export const ThirdProduct = () => {

	const thirProduct = infoProducts[2];
	const { id, image: {bg_mobile, bg_tablet, bg_desktop}, title } = thirProduct;

	return (
		<>
			<ThirdProductStyled>

				<FirstContainerTP>
					<h3>{title}</h3>
					<div>
						<ButtonSecondary>
							<Link to={`/product/${id}`} className='go-to-product'>Ver producto</Link>
						</ButtonSecondary>
					</div>
				</FirstContainerTP>

				<div>
					<picture>
						<source media="(min-width: 1024px)" srcSet={bg_desktop} />
						<source media="(min-width: 600px)" srcSet={bg_tablet} />
						<img src={bg_mobile} alt="first-product-image" />
					</picture>
				</div>

			</ThirdProductStyled>
		</>
	)
}
