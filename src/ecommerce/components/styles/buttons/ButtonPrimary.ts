import { styled } from "styled-components";

export const ButtonPrimary = styled.button`
	background-color: #D87D4A;
	border: none;
	outline: none;
	color: white;
	font-weight: bolder;
	margin-top: 2.8rem;
	padding: 1.5rem 3.2rem;
	text-transform: uppercase;
	transition: all .4s;

	&:hover{
		background-color: #fbaf85;
		cursor: pointer;
		transition: all .4s;
	}

`;