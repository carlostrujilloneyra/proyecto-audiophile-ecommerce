
export interface ProductHomeInterface {
	id?: string,
	image: Image,
	title: string,
	description?:string
}

interface Image {
	bg_mobile: string,
	bg_tablet: string,
	bg_desktop: string
}