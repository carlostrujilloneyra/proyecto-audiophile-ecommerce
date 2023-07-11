import { styled } from "styled-components";

export const ModalStyled = styled.div`
	position: absolute;
	background-color: #fff;
	box-shadow: 0px -7px 21px 15px rgba(0,0,0,0.1);
	border-radius: .8rem;
	padding: 3.6rem 3.2rem;
	width: calc(100vw - 2.4rem);
	height: auto;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;

	@media (width >= 600px){
		top: 25%;
		width: 54rem;
		height: 57rem;
		padding: 4rem 4.8rem;
	}

	@media (width >= 1024px){
		top: 30%;
	}

	.icon-check{
		margin-bottom: 2.4rem;

		@media (width >= 600px){
			margin-bottom: 3.2rem;
		}
		
	}

	.modal-header{

		h2{
		font-size: 2.4rem;
		letter-spacing: .12rem;
		line-height: 1.1;
		text-transform: uppercase;
		margin-bottom: 1.6rem;

		@media (width >= 600px){
			font-size: 3.2rem;
			margin-bottom: 2.4rem;
		}

	}

	p{
		color: #808080;
		margin-bottom: 2.8rem;

		@media (width >= 600px){
			margin-bottom: 3.2rem;
		}
	}
	}

	.container-modal-info-product{
		border-radius: .8rem;
		display: grid;
		width: 100%;

		@media (width >= 600px){
			grid-template-columns: repeat(2, 1fr);
			grid-template-columns: 26rem 1fr;
			margin-bottom: 2.4rem;
		}

		.container-fp{
			background-color: #F1F1F1;
			border-top-left-radius: .8rem;
			border-top-right-radius: .8rem;
			padding: 3.2rem 2.4rem;

			@media (width >= 600px){
				border-top-left-radius: .8rem;
				border-top-right-radius: 0;
				border-bottom-left-radius: .8rem;
			}

			hr{
				color: #dedede;
			}

			.other-products{
				color: #797979;
				font-weight: bolder;
				font-size: 1.3rem;
				text-align: center;
				margin-top: 1.2rem;
			}

		}

		.container-sp{
			background-color: #000;
			border-bottom-left-radius: .8rem;
			border-bottom-right-radius: .8rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 3.2rem 2.4rem;

			@media (width >= 600px){
				border-top-right-radius: .8rem;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: .8rem;
			}

			h3{
				color: #808080;
				font-size: 1.5rem;
				text-transform: uppercase;
				margin-bottom: .8rem;
			}

			h4{
				color: white;
				font-weight: bolder;
				font-size: 1.8rem;
			}

		}

	}

`;