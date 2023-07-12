import { useNavigate } from 'react-router-dom';
import { productInterface } from '../../../../interfaces/category.product.interface';
import { ContainerBackButton, NewProduct, ProductDetailFP } from '../../../styles';
import { ContainerButtons } from '../../../containers';
import { cubicBezier, motion } from 'framer-motion';

interface Props{
	product: productInterface
}

export const FirstPart = ({ product }: Props) => {

	const { newProduct, name, imageDetail, description, price } = product;

	const { bg_mobile, bg_tablet, bg_desktop } = imageDetail;

	const navigate = useNavigate();

	const handleReturn = () => {
		navigate(-1);
	}

	return (
		<>
			
			<ContainerBackButton className='container'>
				<button
					onClick={handleReturn}
					className='button-back'
				>
					Atrás
				</button>
			</ContainerBackButton>
			
			<ProductDetailFP>
				
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
					<picture>
						<source media="(min-width: 1024px)" srcSet={bg_desktop} />
						<source media="(min-width: 600px)" srcSet={bg_tablet} />
						<img src={bg_mobile} alt="first-product-image" />
					</picture>
				</motion.div>

				<motion.div className='info-product-fp'
					initial={{ opacity: 0, y: -400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
					{ newProduct &&
						<NewProduct
							style={{ marginBottom: 12, fontSize: 12 }}
							$color="#D87D4A">Nuevo producto</NewProduct>
					}
					<h2>{name}</h2>
					<p>{description}</p>
					<h3>s/{price.toLocaleString('en-US')}</h3>

					<ContainerButtons product={product}/>

				</motion.div>

			</ProductDetailFP>
		</>
	)
}
