import { useEffect, useState } from "react";
import { infoProducts } from "../../../../data/home/info-products"
import { ButtonSecondary, SecondProductStyled } from "../../../styles"

export const SecondProduct = () => {

	const secondProduct = infoProducts[1];

	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const { image: {bg_mobile, bg_tablet, bg_desktop}, title } = secondProduct;

	const bgImage = windowWidth >= 1024 ? bg_desktop : windowWidth >= 600 ? bg_tablet : bg_mobile;
	
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}

	}, [])
	
	return (
		<>
			<SecondProductStyled style={{backgroundImage: `url(${bgImage})`}}>
				<div>
					<h3>{title}</h3>
					<ButtonSecondary>Ver Producto</ButtonSecondary>
				</div>
			</SecondProductStyled>
		</>
	)
}
