import { styled } from "styled-components";

export const HeaderContainer = styled.header`
	display: grid;
	align-content: center;
	align-items: center;
	background-color: #141414;
	border-bottom: .1rem solid #2c2c2c;
	grid-template-columns: 2rem 1fr 2.5rem;
	height: 9.6rem;
	justify-content: center;
	justify-items: center;
	padding: 3.2rem 2.4rem;

	img{
		cursor: pointer;
	}

	@media (width >= 600px){
		padding: 3.6rem 4rem;
	}

	@media (width >= 1024px){
		grid-template-columns: 14.5rem 1fr 2.5rem;
	}

`;

// Estilos para el nav
export const NavContainer = styled.nav`
	display: none;

	@media (width >= 1024px){
		display: block;
	}

`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all .4s;

	@media (width >= 1024px){
		flex-direction: row;

		&:hover li{
			opacity: 0;
			transition: all .4s;
		}

	}

	li{
		margin: 0 1.6rem;
		transition: all .4s;

		&:hover{
			opacity: 1;
			transition: all .4s;
		}

	}

`;
