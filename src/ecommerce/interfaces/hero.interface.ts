
export interface HeroInterface {
	id: string,
	subtitle: string,
	title: string,
	description: string,
	image: Image
}

interface Image{
	bg_mobile: string,
	bg_tablet: string,
	bg_desktop: string
}