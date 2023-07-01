import { productInterface } from '../../../interfaces/category.product.interface';
import { CategoriesShared } from '../categories';
import { FooterTop } from '../footer-top';
import { FirstPart, SecondPart, ThirdPart } from './components';

interface Props{
	product: productInterface
}

export const ProductDetail = ({ product }: Props) => {

	return (
		<>
			<div className='container'>

				{/* Primera parte del detalle-producto */}
				<FirstPart product={product} />

				{/* Segunda parte del detalle-producto */}
				<SecondPart product={product} />

				{/* Tercera parte del detalle-producto */}
				<ThirdPart product={product} />
				
				<CategoriesShared />

				<FooterTop />

			</div>
		</>
	)
}
