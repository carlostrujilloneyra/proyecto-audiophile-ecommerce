import { MainHomeStyled } from "../../styles"
import { FirstProduct } from "./components"

export const Main = () => {
	return (
		<>
			<MainHomeStyled className="container">
				<FirstProduct secondary/>
			</MainHomeStyled>
		</>
	)
}
