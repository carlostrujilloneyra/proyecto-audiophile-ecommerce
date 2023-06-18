import { HeaderContainer } from "../../styles/header"
import { Logo } from "./components"

export const Header = () => {

	return (
		<>
			<HeaderContainer className="container">
				<img src="/assets/icons/icon-hamburger.svg" alt="icon-hamburguer" />
				<Logo />
				<img src="/assets/icons/icon-cart.svg" alt="image-cart" />
			</HeaderContainer>
		</>
	)
}
