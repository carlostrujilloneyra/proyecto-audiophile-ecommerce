import { categoriesShared } from "../../../data/shared/categories-shared"
import { CategorySharedGrid } from "../../styles/containers"
import { CategoryShared } from "./components"

export const CategoriesShared = () => {
	return (
		<>
			<div className="categories-shared container">
				<CategorySharedGrid>
					{
						categoriesShared.map(category => {
							return (<CategoryShared category={category} key={category.name}/>)
						})
					}
				</CategorySharedGrid>
			</div>
		</>
	)
}

