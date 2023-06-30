import { ButtonPrimary } from "../styles"
import { ContainerButtonsStyled } from "../styles/containers/ContainerButtonsSyled"

export const ContainerButtons = () => {
	return (
		<>
			<ContainerButtonsStyled>
				<p>Primer botón</p>
				<ButtonPrimary style={{marginTop: 0}}>
					Agregar al carrito
				</ButtonPrimary>
			</ContainerButtonsStyled>
		</>
	)
}
