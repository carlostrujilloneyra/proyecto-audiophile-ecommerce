import { styled } from "styled-components";

interface Props{
	$padding?: string
}

export const ButtonPrimary = styled.button<Props>`
	background-color: #D87D4A;
	border: none;
	outline: none;
	color: white;
	font-weight: bolder;
	letter-spacing: .1rem;
	margin-top: 2.8rem;
	padding: ${({$padding}) => $padding};
	text-transform: uppercase;
	transition: all .4s;

	a{
		display: block;
		padding: 1.5rem 3.2rem;
	}

	&:hover{
		background-color: #fbaf85;
		cursor: pointer;
		transition: all .4s;
	}
	
`;

interface Props{
	$secondary?: boolean,
	$bgColor? : string
}

export const ButtonSecondary = styled(ButtonPrimary)<Props>`
	background-color: ${({ $secondary }) => $secondary ? '#000' : 'transparent'};
	border: ${({$secondary}) => $secondary ? 'none' : '.1rem solid #000' };
	color: ${({$secondary}) => $secondary ? '#fff' : '#000'};
	margin-top: ${({ $secondary }) => $secondary ? '2.4rem' : '3.2rem'};
	position: relative;

	@media (width >= 600px){
		margin-top: ${({$secondary}) => $secondary ? '4rem' : '3.2rem'};
	}

	&:hover{
		background-color: ${({$bgColor}) => $bgColor === 'dark' ? '#4c4c4c' : '#000'};
		color: #fff;
		transition: all .4s;
	}

	&:hover a{
		color: #fff;
		transition: all .4s;
	}

`;

