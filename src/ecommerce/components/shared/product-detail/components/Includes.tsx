import { productInterface } from '../../../../interfaces/category.product.interface';

interface Props{
	product: productInterface
}

export const Includes = ({ product }: Props) => {
	
	const { includes } = product;

	return (
		<>
			{
				includes.map((include) => {
					return (
						<div className='grid-includes-items' key={include.item}>
							<p style={{color: '#D87D4A', fontWeight: 'bolder'}}>{ include.quantity }x</p>
							<p>{ include.item }</p>
						</div>
					)
				})
			}
		</>
	)
}
