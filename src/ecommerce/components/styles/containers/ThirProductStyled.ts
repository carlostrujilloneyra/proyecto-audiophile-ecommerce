import { styled } from "styled-components";

export const ThirdProductStyled = styled.section`
	display: grid;
	grid-template-rows: 20rem 20rem;
	row-gap: 2.4rem;

	h3{
		font-size: 2.8rem;
	}

	@media (width >= 600px){
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, 33rem);
		column-gap: 1.2rem;
		row-gap: 0;
	}

	@media (width >= 1024px){
		column-gap: 3.2rem;
	}

	div img{
		border-radius: .8rem;
		max-width: 100%;
		width: 100%;
		height: 100%;
		transition: all .4s;

		@media (width >= 1024px){
			&:hover{
				transform: scale(1.08);
				transition: all .4s;
			}
		}

	}

`;

export const FirstContainerTP = styled.div`
	background-color: #f1f1f1;
	border-radius: .8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5rem 2.4rem;

	@media (width >= 600px){
		padding: 6.4rem 4.8rem;
	}


	@media (width >= 1024px){
		padding: 8rem 4rem;
	}

`;