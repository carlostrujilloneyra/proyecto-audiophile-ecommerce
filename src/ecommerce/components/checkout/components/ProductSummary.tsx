import {CartAddState} from '../../../services/store/slices/cart/cartSlice';
import { ProductSummaryStyled } from '../../styles';

interface Props{
	product: CartAddState
}

export const ProductSummary = ({ product }: Props) => {
	
	const { id, image, quantity, name, price } = product;

	return (
		<>
			<ProductSummaryStyled>
				<img 
					src={image}
					alt={name}
				/>

				<div>
					<h3>{id}</h3>
					<p>s/{price.toLocaleString('en-US')}</p>
				</div>

				<p>x{ quantity }</p>

			</ProductSummaryStyled>
		</>
	)
}
