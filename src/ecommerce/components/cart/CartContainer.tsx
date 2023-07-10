import { useAppDispatch, useAppSelector } from "../../services/store/hooks"
import { removeToCart } from "../../services/store/slices/cart"
import { ButtonPrimary, CartStyled } from "../styles"
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'
import { ProductAdd } from "./components"
import { useNavigate } from "react-router-dom"

interface Props{
	showCart: boolean,
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContainer = ({ showCart, setShowCart }: Props) => {

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const { products, priceTotal, quantityTotal } = useAppSelector(state => state.cart);

	const handleCloseCart = () => {
		setShowCart(!showCart);
	}

	const handleRemoveAllProducts = () => {
		dispatch(removeToCart());
	}

	const handleNavigateCheckout = () => {
		navigate('/checkout');
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
						size='2.2rem'
						onClick={handleCloseCart}
					/>
				</div>

				{/* Cuerpo del carrito de compras */}
				{
					products.length === 0
						?
						(
							<div className="grid-no-products">
								<AiOutlineShoppingCart size='2.5rem' />
								<p>No hay productos agregados</p>
							</div>
						)
						:
						products.map(product => {
							return <ProductAdd key={product.id} product={product} />
						})
				}


				{/* Footer del carrito de compras */}
				{
					products.length > 0 && (
						<div className="footer-cart-container">
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<p>Total</p>
								<h3>s/{priceTotal}</h3>
							</div>

							<div className="container-cart-button-footer">
								<ButtonPrimary
									style={{width:'100%', marginTop: 20}}
									$padding="1.5rem 3.2rem"
									onClick={handleNavigateCheckout}
								>
									Ir a pagar
								</ButtonPrimary>
							</div>

						</div>
					)
				}

			</CartStyled>
		</>
	)
}
