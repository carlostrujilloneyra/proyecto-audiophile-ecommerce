import { styled } from "styled-components";

export const SimpleButon = styled.button`
	background-color: transparent;
	border: none;
	color: #797979;
	display: grid;
	grid-template-columns: max-content .6rem;
	align-items: center;
	column-gap: 1.2rem;
	font-size: 1.3rem;
	font-weight: 600;
	margin-top: 1.6rem;
	outline: none;
	text-transform: uppercase;

	img{
		width: .6rem;
		height: 1rem;
		margin-bottom: 0;
	}

`;