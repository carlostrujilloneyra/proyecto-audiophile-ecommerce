import { cubicBezier, motion } from 'framer-motion';
import { productInterface } from '../../../../interfaces/category.product.interface'
import { ProductDetailSP } from '../../../styles';
import { Includes } from './Includes';

interface Props{
	product: productInterface
}

const item = {
	visible: {
		opacity: 1,
		scale: 1
	},
	hidden: {
		opacity: 0,
		scale: 0
	}
}

export const SecondPart = ({ product }: Props) => {
	
	const { features } = product;

	return (
		<>
			<ProductDetailSP>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={item}
					transition={{ duration: 0.8 }}
					className='container-info-sp'
				>
					<h2>Características</h2>
					<p>{features?.first_part}</p>
					<p>{ features?.second_part }</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={item}
					transition={{ duration: 0.8 }}
					className="container-info-sp"
				>
					<h2>En la caja</h2>

					{/* Componente de lo que incluye el producto */}
					<Includes product={product} />
					
				</motion.div>

			</ProductDetailSP>
		</>
	)
}
