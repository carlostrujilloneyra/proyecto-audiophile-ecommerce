import { styled } from "styled-components";

export const HeaderContainer = styled.header`
	display: grid;
	align-content: center;
	align-items: center;
	background-color: #000;
	border-bottom: .2rem solid #2E2E2E;
	grid-template-columns: 2rem 1fr 2.5rem;
	height: 9.6rem;
	justify-content: center;
	justify-items: center;
	padding: 3.2rem 2.4rem;
	position: relative;

	img{
		cursor: pointer;
	}

	@media (width >= 600px){
		padding: 3.6rem 4rem;
	}

	@media (width >= 1024px){
		grid-template-columns: 14.5rem 1fr 2.5rem;
		padding: 3.6rem 8rem;
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
	list-style: none;
	justify-content: center;
	transition: all .4s;

	@media (width >= 600px){
		flex-direction: row;
	}

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

	a{
	color: white;
	font-size: 1.3rem;
	font-weight: bolder;
	letter-spacing: .1rem;
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	transition: all .4s;

	&:hover{
		color: #D87D4A;
		font-size: 1.6rem;
		transition: all .4s;
	}

	&:hover::before{
		width: 100%;
		left: 0;
		opacity: 1;
		transition: all .4s;
	}

	&::before{
		background-color: #D87D4A;
		bottom: -.6rem;
		content: '';
		position: absolute;
		width: 5%;
		left: -1.4rem;
		height: .18rem;
		opacity: 0;
		transition: all .4s;
	}
}


`;

export const QuantityProductsStyled = styled.div`
	background-color: #D87D4A;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	position: absolute;
	content: '';
	transform: translate(70%, -140%);

	@media (width >= 600px){
		transform: translate(90%, -140%);
	}

	h3{
		color: #fff;
		font-size: 1.2rem;
		font-weight: bolder;
	}

`;