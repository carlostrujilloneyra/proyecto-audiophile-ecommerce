import { useEffect } from "react";
import { useLocation } from "react-router-dom"

interface Props{
	children: JSX.Element | JSX.Element []
}

export const ScrollTop = () => {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
	return (
		<>
		</>
	)
}
