import { useEffect, useState } from "react";
import { heroData } from "../../../data/home/hero"
import { ButtonPrimary, HeroStyled, NewProduct } from "../../styles"
import { Link } from "react-router-dom";

export const Hero = () => {

	const { id, subtitle, title, description, image: { bg_mobile, bg_tablet, bg_desktop } } = heroData;

	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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
			<HeroStyled
				style={{backgroundImage: `url(${bgImage})`}}
				className="container"
			>
				<NewProduct $color="#8c8c8c">{subtitle}</NewProduct>
				<h1>{title}</h1>
				<p>{description}</p>
				<ButtonPrimary $padding="0">
					<Link to={`/product/${id}`} style={{color:'#fff', textDecoration: 'none'}}>Ver producto</Link>
				</ButtonPrimary>
			</HeroStyled>
		</>
	)
}
