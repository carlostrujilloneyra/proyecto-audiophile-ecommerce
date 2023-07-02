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
					$padding="1.5rem 3.2rem"
					style={{ marginTop: 0 }}
				>
					Agregar al carrito
				</ButtonPrimary>
			</ContainerButtonsStyled>
		</>
	)
}
