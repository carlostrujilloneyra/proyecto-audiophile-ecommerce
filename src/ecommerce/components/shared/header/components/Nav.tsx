import { Link } from "react-router-dom"
import { routes } from "../../../../../router/routes"
import { List, NavContainer } from "../../../styles/header"

export const Nav = () => {
	return (
		<>
			<NavContainer>
				<List>
					{
						routes.map((route) => {
							return (
								<li key={route.name}>
									<Link to={route.to}>
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
