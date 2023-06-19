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

interface Props{
	$secondary?: boolean 
}

export const ButtonSecondary = styled(ButtonPrimary)<Props>`
	background-color: ${({ $secondary }) => $secondary ? '#000' : 'transparent'};
	border: ${({$secondary}) => $secondary ? 'none' : '.1rem solid #000' };
	color: ${({$secondary}) => $secondary ? '#fff' : '#000'};
	margin-top: ${({$secondary}) => $secondary ? '2.4rem' : '3.2rem'};

	@media (width >= 600px){
		margin-top: ${({$secondary}) => $secondary ? '4rem' : '3.2rem'};
	}

	&:hover{
		background-color: ${($secondary) => $secondary ? '#4c4c4c' : '#000'};
		color: #fff;
		transition: all .4s;
	}

`;

