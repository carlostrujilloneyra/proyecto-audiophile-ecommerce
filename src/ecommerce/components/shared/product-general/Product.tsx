import { Link } from 'react-router-dom';
import { productInterface } from '../../../interfaces/category.product.interface';
import { ButtonPrimary, NewProduct, ProductStyled } from '../../styles';

interface Props{
	product: productInterface
}

export const Product = ({ product }: Props) => {
	
	const { id, changeColumn, newProduct, image: { bg_mobile, bg_tablet, bg_desktop }, name, description } = product;
	
	// const showInfo = (id: string | undefined) => {
	// 	console.log(id)
	// }

	return (
		<>
			<ProductStyled className={`container ${changeColumn ? 'change' : ''}`}>
				
				<picture>
					<source media="(min-width: 1024px)" srcSet={bg_desktop} />
					<source media="(min-width: 600px)" srcSet={bg_tablet} />
					<img src={bg_mobile} alt="first-product-image" />
				</picture>

				<div>
					
					{
						newProduct && <NewProduct $color='#D87D4A'>Nuevo producto</NewProduct>
					}

					<h2>{name}</h2>
					<p>{description}</p>
					<ButtonPrimary>
						<Link to={`/product/${id}`} style={{color:'#fff', textDecoration: 'none'}} >Ver producto</Link>
					</ButtonPrimary>

				</div>

			</ProductStyled>
		</>
	)
}
