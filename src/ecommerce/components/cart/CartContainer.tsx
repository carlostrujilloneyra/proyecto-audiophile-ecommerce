import { CartStyled } from "../styles"
import { AiOutlineClose } from 'react-icons/ai'

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

				{/* Header del carrito de compras */}

				<div className="header-cart-container">
					<h2>Carrito()</h2>
					<button>Remover todo</button>

					<AiOutlineClose
						style={{cursor:'pointer'}}
						color="#000"
						size='2.4rem'
						onClick={handleCloseCart}
					/>
				</div>

				{/* Cuerpo del encabezado */}


				{/* Footer del carrito de compras */}

			</CartStyled>
		</>
	)
}
