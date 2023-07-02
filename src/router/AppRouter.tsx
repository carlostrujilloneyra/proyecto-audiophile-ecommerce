import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "../ecommerce/components/shared"
import { routes } from "./routes"
import { HomePage, NotFoundPage, ProductPage } from "../ecommerce/pages"
import { ScrollTop } from "../ecommerce/components/shared/ScrollTop"

export const AppRouter = () => {
	return (
		<>	
			
			<ScrollTop />

			<Header />

			<Routes>

				{/* Ruta general */}

				<Route path='/' element={<HomePage />} />

				{
					routes.map(({path, name, Component}) => {
						return <Route key= {name} path={path} element={<Component />} />
					})
				}
				
				<Route path='product/:productId' element={<ProductPage />} />

				{/* Ruta que no existe */}
				<Route path='*' element={<NotFoundPage />} />

				</Routes>
				<Footer />

		</>
	)
}