
export interface productInterface {
	id: string,
	newProduct?: boolean,
	changeColumn?: boolean,
	category?: string,
	name: string,
	description?: string,
	image: Image,
	imageDetail: ImageDetail,
	features?: Feature,
	price: number,
	amountInitial: number
	includes: includeBoxInterface[],
	first_image_gallery?: imageGalleryInterface,
	second_image_gallery?: imageGalleryInterface,
	third_image_gallery?: imageGalleryInterface
}

export interface Image{
	bg_cart: string,
	bg_mobile: string,
	bg_tablet: string,
	bg_desktop: string
}

interface ImageDetail{
	bg_mobile: string,
	bg_tablet: string,
	bg_desktop: string
}

interface Feature {
	first_part: string,
	second_part: string
}

interface includeBoxInterface {
	quantity: number,
	item: string
}

interface imageGalleryInterface{
	url_mobile: string,
	url_tablet: string,
	url_desktop: string
}