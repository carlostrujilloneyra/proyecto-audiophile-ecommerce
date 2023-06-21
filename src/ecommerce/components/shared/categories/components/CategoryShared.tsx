import { useNavigate } from 'react-router-dom';
import { InterfaceCategoryShared } from '../../../../interfaces/categories.interface';
import { SimpleButon } from '../../../styles/buttons';
import { CategorySharedCard } from '../../../styles/containers';

interface Props {
	category: InterfaceCategoryShared;
}

export const CategoryShared = ({ category }: Props) => {

	const navigate = useNavigate();
	
	const { image, name, id } = category;

	const showInfo = (info: string) => {
		const category = info.toLocaleLowerCase();
		navigate(`/${category}`);
	}

	return (
		<>
			<CategorySharedCard>
				<div className='container-category-shared'>
					<img src={image} alt={name} className='image-category-shared' />
					<h4>{name}</h4>
					<SimpleButon
						onClick={() => showInfo(id)}
					>
					Comprar
					<img src="/assets/icons/icon-arrow-right.svg" alt="icon-arrow" />
				</SimpleButon>
				</div>
			</CategorySharedCard>
		</>
	)
}
