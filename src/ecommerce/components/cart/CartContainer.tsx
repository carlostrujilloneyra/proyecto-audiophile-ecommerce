import { CartStyled } from "../styles"
import { AiOutlineClose } from 'react-icons/ai'
import { Dispatch } from "react"

interface Props{
	showCart: boolean,
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContainer = ({ showCart, setShowCart }: Props) => {

	const handleCloseCart = () => {
		setShowCart(!showCart);
	}

	return (
		<>
			<CartStyled>

				{/* Aquí mostraré los productos del carrito de compras */}

				<div className="header-cart-container">
					<h2>Carrito</h2>
					<button>Remover todo</button>

					<AiOutlineClose
						style={{cursor:'pointer'}}
						color="#000"
						size='2.4rem'
						onClick={handleCloseCart}
					/>
				</div>

			</CartStyled>
		</>
	)
}
