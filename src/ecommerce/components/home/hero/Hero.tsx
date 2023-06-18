import { useEffect, useState } from "react";
import { heroData } from "../../../data/home/hero"
import { ButtonPrimary, HeroStyled } from "../../styles"

export const Hero = () => {

	const { subtitle, title, description, image: { bg_mobile, bg_tablet, bg_desktop } } = heroData;

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
				<h3>{subtitle}</h3>
				<h1>{title}</h1>
				<p>{description}</p>
				<ButtonPrimary>Ver producto</ButtonPrimary>
			</HeroStyled>
		</>
	)
}
