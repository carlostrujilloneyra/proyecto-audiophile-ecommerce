import { productInterface } from '../../../../interfaces/category.product.interface';

interface Props{
	product: productInterface
}

export const FirstPart = ({ product }: Props) => {

	const { newProduct, name, description, price, amountInitial, image } = product;

	return (
		<>
			
		</>
	)
}
