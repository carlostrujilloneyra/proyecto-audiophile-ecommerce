import { productInterface } from '../../../interfaces/category.product.interface';
import { FirstPart } from './components';

interface Props{
	product: productInterface
}

export const ProductDetail = ({ product }: Props) => {

	// const {newProduct, name, description, price, amountInitial, features, includes} = product;

	return (
		<>
			<div className='container'>

				{/* Primera parte del detalle-producto */}
				<FirstPart product={product} />

			</div>
		</>
	)
}
