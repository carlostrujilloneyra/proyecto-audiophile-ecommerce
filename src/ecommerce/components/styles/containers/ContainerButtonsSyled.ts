import { styled } from "styled-components";

export const ContainerButtonsStyled = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 12.2rem 18rem;
	column-gap: 1rem;
	margin-bottom: 1.2rem;

	@media (width >= 600px){
		column-gap: 2rem;
	}

	.alert{
		font-family: 'Manrope', sans-serif;
		font-size: 1.4rem;
	}

	.container-buttons-amount{
		display: flex;
		
		button{
			background-color: #f1f1f1;
			border: none;
			color: #b5b5b5;
			cursor: pointer;
			font-size: 1.8rem;
			font-weight: bolder;
			padding: 1.8rem 1.6rem;
			transition: all .4s;

			&:hover{
				filter: opacity(.7);
				transition: all .4s;
			}
		}

		span{
			background-color: #f1f1f1;
			color: #000;
			display: flex;
			align-items: center;
			font-size: 1.8rem;
			font-weight: bolder;
			justify-content: center;
			padding: 1.8rem 1.6rem;
		}

	}

`;