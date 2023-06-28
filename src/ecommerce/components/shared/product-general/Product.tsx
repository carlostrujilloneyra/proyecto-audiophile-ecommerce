import { productInterface } from '../../../interfaces/category.product.interface';
import { ButtonPrimary, NewProduct, ProductStyled } from '../../styles';

interface Props{
	product: productInterface
}

export const Product = ({ product }: Props) => {
	
	const { changeColumn, newProduct, image: {bg_mobile, bg_tablet, bg_desktop}, name, description } = product;

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
						newProduct && <NewProduct $color='#D87D4A'>Producto nuevo</NewProduct>
					}

					<h2>{name}</h2>
					<p>{description}</p>
					<ButtonPrimary>Ver producto</ButtonPrimary>

				</div>

			</ProductStyled>
		</>
	)
}
