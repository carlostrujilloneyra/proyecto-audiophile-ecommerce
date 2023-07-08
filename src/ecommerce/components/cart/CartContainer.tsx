import { useAppDispatch, useAppSelector } from "../../services/store/hooks"
import { removeToCart } from "../../services/store/slices/cart"
import { CartStyled } from "../styles"
import { AiOutlineClose } from 'react-icons/ai'

interface Props{
	showCart: boolean,
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContainer = ({ showCart, setShowCart }: Props) => {

	const dispatch = useAppDispatch();

	const { products, priceTotal, quantityTotal } = useAppSelector(state => state.cart);

	const handleCloseCart = () => {
		setShowCart(!showCart);
	}

	const handleRemoveAllProducts = () => {
		dispatch(removeToCart());
	}

	return (
		<>
			<CartStyled>

				{/* Header del carrito de compras */}

				<div className="header-cart-container">
					<h2>Carrito({quantityTotal})</h2>
					<button onClick={handleRemoveAllProducts}>Remover todo</button>

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
