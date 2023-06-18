import { useNavigate } from "react-router-dom"

export const Logo = () => {

	const navigate = useNavigate();

	const handleNavigateHome = () => {
		navigate('/');
	}

	return (
		<>
			<img
				src="/assets/logo/logo.svg"
				alt="logo-image"
				onClick={handleNavigateHome}
			/>
		</>
	)
}
