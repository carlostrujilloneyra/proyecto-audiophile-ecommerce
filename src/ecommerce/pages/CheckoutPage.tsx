import { Checkout } from "../components/checkout"
import { cubicBezier, motion } from 'framer-motion';

const container = {
	hidden: {
		opacity: 0,
		y: 400
	},
	show: {
		opacity: 1,
		y:0,
		transition: {
			ease: cubicBezier(0.6, 0.01, -0.05, 0.75),
			duration: 1,
		}
	},
	exit: {
		opacity: 0,
		y: -400,
		transition: {
			ease: "easeInOut",
			duration: 1
		}
	}
}

export const CheckoutPage = () => {
	return (
		<>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
			>
				<Checkout />
			</motion.div>
		</>
	)
}
