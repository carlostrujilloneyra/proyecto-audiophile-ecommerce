import { InterfaceCategoryShared } from '../../../../interfaces/categories.interface';
import { SimpleButon } from '../../../styles/buttons';
import { CategorySharedCard } from '../../../styles/containers';

interface Props {
	category: InterfaceCategoryShared;
}

export const CategoryShared = ({ category }: Props) => {
	
	const { image, name } = category;

	return (
		<>
			<CategorySharedCard>
				<div className='container-category-shared'>
					<img src={image} alt={name} className='image-category-shared' />
					<h4>{name}</h4>
					<SimpleButon>
					Shop
					<img src="/assets/icons/icon-arrow-right.svg" alt="icon-arrow" />
				</SimpleButon>
				</div>
			</CategorySharedCard>
		</>
	)
}
