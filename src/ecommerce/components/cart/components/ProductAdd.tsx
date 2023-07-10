import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../services/store/hooks';
import {CartAddState, addToCart, removeProduct} from '../../../services/store/slices/cart/cartSlice'
import { ProductCartStyled } from '../../styles';
import { setItem } from '../../../utils';

interface Props{
	product: CartAddState;
}

export const ProductAdd = ({ product }: Props) => {
	
	const [amount, setAmount] = useState<number>(1);

	const data = useAppSelector((state) => state.cart);

	const { id, image, price, name } = product;

	const dispatch = useAppDispatch();

	const handleIncrementProduct = () => {
		dispatch(addToCart({
			id,
			image,
			price,
			name,
			quantity: 1
		}));

		setAmount(amount + 1);
	}

	useEffect(() => {
		// Aquí añades el producto al array de productos
		setItem('cart', data);
	}, [handleIncrementProduct])
	

	const handleDecrementProduct = () => {
		dispatch(removeProduct({
			id
		}));

		amount <= 1 ? setAmount(1) : setAmount(amount - 1);
	}

	return (
		<>
			<ProductCartStyled>
				<img src={image} alt="image-product" />

				<div className='container-info-product'>
					<h3>{id}</h3>
					<p>s/{price.toLocaleString('en-US')}</p>
				</div>

				<div className="container-buttons-product">
					<button onClick={handleDecrementProduct}>-</button>
					<span>{ amount }</span>
					<button onClick={handleIncrementProduct}>+</button>
				</div>

			</ProductCartStyled>
		</>
	)
}
