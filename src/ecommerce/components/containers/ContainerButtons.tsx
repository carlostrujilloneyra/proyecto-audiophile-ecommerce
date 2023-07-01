import { useState } from "react"
import { ButtonPrimary } from "../styles"
import { ContainerButtonsStyled } from "../styles/containers/ContainerButtonsSyled"

export const ContainerButtons = () => {

	const [amount, setAmount] = useState<number>(1);

	return (
		<>
			<ContainerButtonsStyled>

				<div className="container-buttons-amount">
					<button>-</button>
					<span>{amount}</span>
					<button>+</button>
				</div>

				<ButtonPrimary
					style={{ marginTop: 0 }}
				>
					Agregar al carrito
				</ButtonPrimary>
			</ContainerButtonsStyled>
		</>
	)
}
