import { productInterface } from '../../../../interfaces/category.product.interface'
import { ProductDetailTP } from "../../../styles"
import { cubicBezier, motion } from 'framer-motion';

interface Props{
	product: productInterface
}

const container = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 200
	}
}

export const ThirdPart = ({ product }: Props) => {
	
	const { first_image_gallery, second_image_gallery, third_image_gallery } = product;

	return (
		<>
			<ProductDetailTP>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={container}
					transition={{ duration: .6 }}
					className="first-container">

				<picture>
					<source media="(min-width: 1024px)" srcSet={first_image_gallery?.url_desktop} />
					<source media="(min-width: 600px)" srcSet={first_image_gallery?.url_tablet} />
					<img src={first_image_gallery?.url_mobile} alt="first-image-gallery" />
					</picture>
					
					<picture>
						<source media="(min-width: 1024px)" srcSet={second_image_gallery?.url_desktop} />
						<source media="(min-width: 600px)" srcSet={second_image_gallery?.url_tablet} />
						<img src={second_image_gallery?.url_mobile} alt="second-image-gallery" />
					</picture>

				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={container}
					transition={{ duration: .6 }}
					className="second-container"
				>
					<picture>
						<source media="(min-width: 1024px)" srcSet={third_image_gallery?.url_desktop} />
						<source media="(min-width: 600px)" srcSet={third_image_gallery?.url_tablet} />
						<img src={third_image_gallery?.url_mobile} alt="third-image-gallery" />
					</picture>
				</motion.div>

			</ProductDetailTP>
		</>
	)
}
