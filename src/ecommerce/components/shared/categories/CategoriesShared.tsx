import { categoriesShared } from "../../../data/shared/categories-shared"
import { CategorySharedGrid } from "../../styles/containers"
import { CategoryShared } from "./components"
import { motion } from 'framer-motion';

export const CategoriesShared = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{opacity: 1}}
				transition={{ ease: 'easeInOut', duration: 1 }}
				className="categories-shared container"
			>
				<CategorySharedGrid>
					{
						categoriesShared.map(category => {
							return (<CategoryShared category={category} key={category.id}/>)
						})
					}
				</CategorySharedGrid>
			</motion.div>
		</>
	)
}

