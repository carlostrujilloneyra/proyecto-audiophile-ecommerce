import { Link } from 'react-router-dom';
import { productInterface } from '../../../interfaces/category.product.interface';
import { ButtonPrimary, NewProduct, ProductStyled } from '../../styles';
import { motion } from 'framer-motion';

interface Props{
	product: productInterface
}

const item = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 400
	}
}

export const Product = ({ product }: Props) => {
	
	const { id, changeColumn, newProduct, image: { bg_mobile, bg_tablet, bg_desktop }, name, description } = product;

	return (
		<>
			<ProductStyled className={`container ${changeColumn ? 'change' : ''}`}>
			
					<picture>
						<source media="(min-width: 1024px)" srcSet={bg_desktop} />
						<source media="(min-width: 600px)" srcSet={bg_tablet} />
						<img src={bg_mobile} alt="first-product-image" />
					</picture>


				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={item}
					transition={{ duration: .6 }}
				>
					
					{
						newProduct && <NewProduct $color='#D87D4A'>Nuevo producto</NewProduct>
					}

					<h2>{name}</h2>
					<p>{description}</p>
					<ButtonPrimary>
						<Link to={`/product/${id}`} style={{color:'#fff', textDecoration: 'none'}} >Ver producto</Link>
					</ButtonPrimary>

				</motion.div>

			</ProductStyled>
		</>
	)
}
