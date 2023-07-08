import { useNavigate } from 'react-router-dom';
import { productInterface } from '../../../../interfaces/category.product.interface';
import { ContainerBackButton, NewProduct, ProductDetailFP } from '../../../styles';
import { ContainerButtons } from '../../../containers';

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
				
				<picture>
					<source media="(min-width: 1024px)" srcSet={bg_desktop} />
					<source media="(min-width: 600px)" srcSet={bg_tablet} />
					<img src={bg_mobile} alt="first-product-image" />
				</picture>

				<div className='info-product-fp'>
					{ newProduct &&
						<NewProduct
							style={{ marginBottom: 12, fontSize: 12 }}
							$color="#D87D4A">Nuevo producto</NewProduct>
					}
					<h2>{name}</h2>
					<p>{description}</p>
					<h3>${price}</h3>

					<ContainerButtons product={product}/>

				</div>

			</ProductDetailFP>
		</>
	)
}
