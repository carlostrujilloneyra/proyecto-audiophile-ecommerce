import { Hero, Main } from "../components/home"
import { CategoriesShared, FooterTop } from "../components/shared"

export const HomePage = () => {
	return (
		<>
			<Hero />
			<CategoriesShared />
			<Main />
			<FooterTop />
		</>
	)
}
