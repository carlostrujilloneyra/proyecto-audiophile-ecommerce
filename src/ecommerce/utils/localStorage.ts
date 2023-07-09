
export const getItem = (key: string): any => {
	return JSON.parse(localStorage.getItem(key)!)
	// ! ==> que sea obligatorio, que no me regrese nulo, que me va a llegar algo!! 
}

export const setItem = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data))
}