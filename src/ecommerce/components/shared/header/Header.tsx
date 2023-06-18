import { HeaderContainer } from "../../styles/header"
import { Logo, Nav } from "./components"

export const Header = () => {

	return (
		<>
			<HeaderContainer className="container">

				<div className="container-hamburguer">
					<img src="/assets/icons/icon-hamburger.svg" alt="icon-hamburguer" />
				</div>

				<Logo />

				<Nav />

				<img src="/assets/icons/icon-cart.svg" alt="image-cart" />
			</HeaderContainer>
		</>
	)
}
