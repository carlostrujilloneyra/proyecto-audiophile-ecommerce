import { useState } from "react"
import { CartContainer } from "../../cart/CartContainer"
import { HeaderContainer } from "../../styles/header"
import { Logo, Nav } from "./components"

export const Header = () => {

	const [showCart, setShowCart] = useState<boolean>(false);

	const handleShowCart = () => {
		setShowCart(!showCart);
	}

	return (
		<>
			<HeaderContainer className="container">

				<div className="container-hamburguer">
					<img src="/assets/icons/icon-hamburger.svg" alt="icon-hamburguer" />
				</div>

				<Logo />

				<Nav />

				<img
					src="/assets/icons/icon-cart.svg"
					alt="image-cart"
					onClick={handleShowCart}
				/>

				{
					showCart &&
					<CartContainer
						showCart={showCart}
						setShowCart={setShowCart}
					/>
				}

			</HeaderContainer>
		</>
	)
}
