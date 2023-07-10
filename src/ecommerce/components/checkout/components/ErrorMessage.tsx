
interface Props{
	message: string
}

export const ErrorMessage = ({message}: Props) => {
	return (
		<>
			<p className="errorMessage">{ message }</p>
		</>
	)
}
