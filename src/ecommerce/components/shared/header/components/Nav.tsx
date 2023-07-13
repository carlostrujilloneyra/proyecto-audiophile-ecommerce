import { Link } from "react-router-dom"
import { routes } from "../../../../../router/routes"
import { List, NavContainer } from "../../../styles/header"

interface Props{
	openNav?: boolean,
	classDifferent: boolean
}

export const Nav = ({ openNav, classDifferent }: Props) => {

	const handleTopZero = () => {
		window.scrollTo(0, 0);
	}

	return (
		<>
			<NavContainer className={`${openNav ? 'newClass' : ''} ${classDifferent ? 'classDifferent' : ''}`}>
				<List className={`${classDifferent ? 'classDifferent' : ''}`}>
					{
						routes.map((route) => {
							return (
								<li key={route.name}>
									<Link onClick={handleTopZero} to={route.to}>
										{route.name}
									</Link>
								</li>
							)
						})
					}
				</List>
			</NavContainer>
		</>
	)
}
