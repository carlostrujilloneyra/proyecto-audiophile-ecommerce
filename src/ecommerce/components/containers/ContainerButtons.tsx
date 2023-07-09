import { useEffect, useState } from "react"
import { ButtonPrimary } from "../styles"
import { ContainerButtonsStyled } from "../styles/containers/ContainerButtonsSyled"
import { productInterface } from '../../interfaces/category.product.interface'
import { addToCart } from "../../services/store/slices/cart"
import { useAppDispatch, useAppSelector } from "../../services/store/hooks"
import { setItem } from "../../utils"
import { Toaster, toast } from "react-hot-toast"

interface Props{
	product: productInterface
}

export const ContainerButtons = ({ product }: Props) => {
	
	const { id, image:{bg_cart: image}, name, price } = product;

	const [amount, setAmount] = useState<number>(1);

	// const notify = () => toast('Aquí está tu notificación')

	const dispatch = useAppDispatch();

	const data = useAppSelector((state) => state.cart);

	const handleIncrementProduct = () => {
		setAmount((a) => a + 1);
	}

	const handleDecrementProduct = () => {
		amount <= 1 ? setAmount(1) : setAmount((a) => a - 1);
	}

	const handleAddProductToCart = () => {

		toast.success('Producto agregado!', {
			style: {
				color: '#7d7d7d',
				padding: 12
			},
			iconTheme: {
				primary: '#D87D4A',
				secondary: '#fff'
			},
			duration: 5000
		})

		dispatch(addToCart({
			id,
			image,
			name,
			price,
			quantity: amount
		}));
	}

	useEffect(() => {
		setItem('cart', data);
	}, [handleAddProductToCart]);
	
	return (
		<>
			<ContainerButtonsStyled>

				<Toaster  containerClassName="alert"/>

				<div className="container-buttons-amount">
					<button onClick={handleDecrementProduct}>-</button>
					<span>{amount}</span>
					<button onClick={handleIncrementProduct}>+</button>
				</div>

				<ButtonPrimary
					$padding="1.5rem 3.2rem"
					style={{ marginTop: 0 }}
					onClick={handleAddProductToCart}
				>
					Agregar al carrito
				</ButtonPrimary>
			</ContainerButtonsStyled>
		</>
	)
}
