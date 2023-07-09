import { useEffect, useState } from "react"
import { CartContainer } from "../../cart/CartContainer"
import { HeaderContainer } from "../../styles/header"
import { Logo, Nav, QuantityProducts } from "./components"
import { useLocation } from "react-router-dom"

export const Header = () => {

	const [showCart, setShowCart] = useState<boolean>(false);

	const location = useLocation();

	const handleShowCart = () => {
		setShowCart(!showCart);
	}

	useEffect(() => {
		setShowCart(false);
	}, [location])
	

	return (
		<>
			<HeaderContainer className="container">

				<div className="container-hamburguer">
					<img src="/assets/icons/icon-hamburger.svg" alt="icon-hamburguer" />
				</div>

				<Logo />

				<Nav />

				{/* Carrito de compras */}

				<div style={{position: 'relative'}}>
					<img
						src="/assets/icons/icon-cart.svg"
						alt="image-cart"
						onClick={handleShowCart}
					/>
					
					<QuantityProducts />

				</div>


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
