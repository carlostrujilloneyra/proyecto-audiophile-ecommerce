import { productInterface } from '../../../../interfaces/category.product.interface'
import { ProductDetailSP } from '../../../styles';
import { Includes } from './Includes';

interface Props{
	product: productInterface
}

export const SecondPart = ({ product }: Props) => {
	
	const { features } = product;

	return (
		<>
			<ProductDetailSP>

				<div className='container-info-sp'>
					<h2>Características</h2>
					<p>{features?.first_part}</p>
					<p>{ features?.second_part }</p>
				</div>

				<div className="container-info-sp">
					<h2>En la caja</h2>

					{/* Componente de lo que incluye el producto */}
					<Includes product={product} />
					
				</div>

			</ProductDetailSP>
		</>
	)
}
