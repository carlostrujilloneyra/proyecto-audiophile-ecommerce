import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
	background-color: #f1f1f1;
	padding: 1.2rem 2.4rem;
	padding-bottom: 8rem;
	position: relative;

	@media (width >= 600px){
		padding: 4rem 3.2rem;
		padding-bottom: 10rem;
	}

	@media (width >= 1024px){
		padding: 2.4rem 5rem;
		padding-top: 0;
		padding-bottom: 12rem;
	}

	@media (width >= 1100px){
		padding: 2.4rem 6rem;
		padding-top: 0;
		padding-bottom: 7rem;
	}

`;

export const CheckoutStyledGrid = styled.div`
	display: grid;
	row-gap: 3.2rem;

	@media (width >= 1024px){
		grid-template-columns: 1fr 36rem;
		column-gap: 3.2rem;
		row-gap: 0;
	}

	.summary-container .summary-content{
		background-color: #fff;
		border-radius: .8rem;
		padding: 2.4rem;
		
		@media (width >= 600px){
			padding: 3rem;
		}
		
		@media (width >= 1024px){
			padding: 3.2rem;
		}
		
		@media (width >= 1100px){
			padding: 4.2rem;
		}

		h2{
			color: #000;
			letter-spacing: .13rem;
			font-size: 2.8rem;
			text-transform: uppercase;
			margin-bottom: 3.2rem;
			
			@media (width >= 600px){
				font-size: 3rem;
		}

	}

	button{
		background-color: #D87D4A;
		border: none;
		outline: none;
		cursor: pointer;
		color: white;
		font-weight: bolder;
		letter-spacing: .1rem;
		padding:1.5rem 3.2rem;
		margin-top: 2.4rem;
		text-transform: uppercase;
		transition: all .4s;

		&.disabled{
			cursor: not-allowed;
			opacity: .5;
			transition: all .4s;
		}

		&:hover{
			filter: brightness(1.1);
			transition: all .4s;
		}

	}

	}

`;

export const FormStyled = styled.div`
	background-color: #fff;
	border-radius: .8rem;
	padding: 2.4rem;

	@media (width >= 600px){
		padding: 3rem;
	}

	@media (width >= 1024px){
		padding: 3.2rem;
	}

	@media (width >= 1100px){
		padding: 4.2rem;
	}

	h2{
		color: #000;
		letter-spacing: .13rem;
		font-size: 2.8rem;
		text-transform: uppercase;
		margin-bottom: 1.2rem;

		@media (width >= 600px){
			font-size: 3rem;
		}

	}

	form{

		.container-input-radio{
			border: .1rem solid #CFCFCF;
			border-radius: 1rem;
			display: flex;
			align-items: center;
			font-size: 1.3rem;
			font-weight: bolder;
			padding: 1.6rem;

			input{
				width: 1.7rem;
				height: 1.7rem;
				margin-right: .8rem;
				font-size: 1.5rem;
				cursor: pointer;
			}

		}

		h3{
			color: #D87D4A;
			font-size: 1.3rem;
			letter-spacing: .1rem;
			text-transform: uppercase;
			margin-bottom: 1.6rem;
		}

		label{
			display: block;
			color: #000;
			font-size: 1.3rem;
			font-weight: bolder;
			margin-bottom: 1.2rem;
		}

		.container-grid-inputs{
			display: grid;
			
			@media (width >= 600px){
				grid-template-columns: repeat(2, 1fr);
				column-gap: 1.6rem;
			}
		}
		
		.container-input{
			margin-bottom: 1.6rem;
		}

		input{
			color: #000;
			font-size: 1.5rem;
			font-weight: bolder;
			display: block;
			width: 100%;
			border: .1rem solid #CFCFCF;
			border-radius: .8rem;
			outline: none;
			padding: 1.6rem;
			transition: all .4s;

			&:focus{
				border: .15rem solid #D87D4A;
			}

			&::placeholder{
				color: #999999;
				font-size: 1.4rem;
				transition: all .4s;
			}

			&:focus::placeholder{
				opacity: 0;
				transition: .4s;
			}
		}
	}

`;

export const SummaryStyled = styled.div`
	background-color: #fff;

	.footer-cart-container{
		margin-top: 2.8rem;

		div{

			p{
				color: #808080;
				font-size: 1.5rem;
				letter-spacing: .12rem;
				text-transform: uppercase;
			}

			h3{
				color: #000;
				font-size: 1.8rem;
				letter-spacing: .12rem;
			}

		}

	}

`;

export const ProductSummaryStyled = styled.div`
	display: grid;
	grid-template-columns: 6rem 1fr 2.4rem;
	column-gap: 2rem;
	margin-bottom: 2.4rem;

	img{
		width: 6rem;
		height: 6rem;
		border-radius: .8rem;
	}

	h3{
		color: #000;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: .1rem;
		margin-bottom: .8rem;
	}
	
	p{
		color: #808080;
		font-size: 1.4rem;
		font-weight: bolder;
		letter-spacing: .12rem;
	}


`;