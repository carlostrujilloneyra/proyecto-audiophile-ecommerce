import { ProductHomeInterface } from '../../interfaces/products-home.interface'

export const infoProducts: ProductHomeInterface[] = [
	{
		id: 'zx9-speaker',
		image: {
			bg_mobile: '/assets/home/mobile/image-speaker-zx9.png',
			bg_tablet: '/assets/home/tablet/image-speaker-zx9.png',
			bg_desktop: '/assets/home/desktop/image-speaker-zx9.png'
		},
		title: 'Altavoz ZX9',
		description: 'Actualícese a altavoces premium que están fenomenalmente construidos para brindar un sonido verdaderamente extraordinario.'
	},

	{
		id: 'zx7-speaker',
		image: {
			bg_mobile: '/assets/home/mobile/image-speaker-zx7.jpg',
			bg_tablet: '/assets/home/tablet/image-speaker-zx7.jpg',
			bg_desktop: '/assets/home/desktop/image-speaker-zx7.jpg'
		},
		title: 'Altavoz ZX7'
	},

	{
		id: 'yx1-earphone',
		image: {
			bg_mobile: '/assets/home/mobile/image-earphones-yx1.jpg',
			bg_tablet: '/assets/home/tablet/image-earphones-yx1.jpg',
			bg_desktop: '/assets/home/desktop/image-earphones-yx1.jpg'
		},
		title: 'Auricular YX1'
	}
];