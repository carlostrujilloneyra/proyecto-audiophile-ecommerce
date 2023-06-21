import { productInterface } from '../../interfaces/category.product.interface';

// Primera categoría: headphones
// Segunda categoría: speakers
// Tercera categoría: earphones

export const products: productInterface[] = [
	{
		id: 'xx99 mark one',
		category: 'headphones',
		name: 'Audífonos XX99 Mark I',
		description: 'Como el estándar de oro para los auriculares, el clásico XX99 Mark I ofrece una reproducción de audio precisa y detallada para audiófilos, ingenieros de mezclas y aficionados a la música en estudios y en movimiento.',
		image: {
			bg_cart: '/assets/cart/image-xx99-mark-one-headphones.jpg',
			bg_mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
			bg_tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
			bg_desktop: '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Al igual que los auriculares con los que se comparan todos los demás, el XX99 Mark I demuestra más de cinco décadas de experiencia en audio, redefiniendo la experiencia auditiva fundamental. Este par de auriculares cerrados están hechos de materiales industriales de grado aeroespacial para enfatizar la durabilidad con un peso relativamente ligero de 11 oz.',
			second_part: 'Desde las almohadillas de microfibra hechas a mano hasta la resistente diadema de metal con elemento de amortiguación interno, los componentes trabajan juntos para brindar comodidad y un sonido inigualable. Su diseño cerrado ofrece hasta 27 dB de cancelación pasiva de ruido, lo que reduce la resonancia al reflejar el sonido en un absorbedor dedicado. Para la conectividad, se incluye un cable especialmente sintonizado con un conector dorado balanceado.'
		},
		price: 1750,
		amountInitial: 1,
		includes: [
			{
				quantity: 1,
				item: 'Unidad de auriculares'
			},

			{
				quantity: 2,
				item: 'Auriculares de repuesto'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de audio de 3,5mm y 5m'
			}
		],
		
		first_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
		}

	},

	{
		id: 'xx99 mark two',
		category: 'headphones',
		name: 'Audífonos XX99 Mark II',
		description: 'Los nuevos auriculares XX99 Mark II son el pináculo del audio impecable. Redefine su experiencia premium con auriculares al reproducir la profundidad y precisión equilibradas del sonido con calidad de estudio.',
		image: {
			bg_cart: '/assets/cart/image-xx99-mark-two-headphones.jpg',
			bg_mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
			bg_tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
			bg_desktop: '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Con una correa para la cabeza de cuero genuino y auriculares de primera calidad, estos auriculares brindan una comodidad superior para aquellos a quienes les gusta disfrutar de una escucha interminable. Incluye controles intuitivos diseñados para cualquier situación. Ya sea que esté atendiendo una llamada de negocios o simplemente en su propio espacio personal, las funciones de encendido/apagado automático y pausa aseguran que nunca perderá el ritmo.',
			second_part: 'La cancelación activa de ruido avanzada con ecualizador incorporado le permite experimentar su mundo de audio en sus términos. Le permite disfrutar de su audio en paz, pero interactuar rápidamente con su entorno cuando lo necesite. Combinados con conectividad compatible con Bluetooth 5.0 y una duración de la batería de 17 horas, los auriculares XX99 Mark II le brindan un sonido superior, tecnología de punta y una estética de diseño moderno.'
		},
		price: 2999,
		amountInitial: 1,
		includes: [
			{
				quantity: 1,
				item: 'Unidad de auriculares'
			},

			{
				quantity: 2,
				item: 'Auriculares de repuesto'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de audio de 3,5mm y 5m'
			},

			{
				quantity: 1,
				item: 'Bolsa de viaje'
			},
		],

		first_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
		}

	},

	{
		id: 'xx59',
		category: 'headphones',
		name: 'Audífonos XX59',
		description: 'Disfrute de su audio en casi cualquier lugar y personalícelo según sus gustos específicos con los auriculares XX59. Los auriculares inalámbricos versátiles, elegantes pero duraderos, son un compañero brillante en casa o en movimiento.',
		image: {
			bg_cart: '/assets/cart/image-xx59-headphones.jpg',
			bg_mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
			bg_tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
			bg_desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Estos auriculares se han creado con materiales duraderos y de alta calidad lo suficientemente resistentes como para llevarlos a cualquier parte. Su diseño plegable compacto fusiona comodidad y estilo minimalista haciéndolo perfecto para viajar. La transmisión impecable está asegurada por la última tecnología inalámbrica diseñada para la sincronización de audio con videos.',
			second_part: 'Más que un simple par de auriculares, este auricular cuenta con un par de micrófonos integrados para llamadas claras y manos libres cuando se combina con un teléfono inteligente compatible. Controlar la música y las llamadas también es intuitivo gracias a los botones táctiles de fácil acceso en los auriculares. Independientemente de cómo use los auriculares XX59, puede hacerlo todo el día gracias a una impresionante duración de la batería de 30 horas que se puede recargar rápidamente a través de USB-C.'
		},
		price: 899,
		amountInitial: 1,
		includes: [
			{
				quantity: 1,
				item: 'Unidad de auriculares'
			},

			{
				quantity: 2,
				item: 'Auriculares de repuesto'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de audio de 3,5mm y 5m'
			},

			{
				quantity: 1,
				item: 'Bolsa de viaje'
			},
		],

		first_image_gallery: {
			url_mobile: '/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-xx59-headphones/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
		}
		
	},

	{
		id: 'zx7 altavoz',
		category: 'speakers',
		name: 'Altavoz ZX7',
		description: 'Transmita sonido de alta calidad de forma inalámbrica con una pérdida mínima o nula. El altavoz ZX7 utiliza componentes para audiófilos de gama alta que representan los altavoces autoamplificados de primera línea para uso doméstico o de estudio.',
		image: {
			bg_cart: '/assets/cart/image-zx7-speaker.jpg',
			bg_mobile: '/assets/product-zx7-speaker/mobile/image-product.jpg',
			bg_tablet: '/assets/product-zx7-speaker/tablet/image-product.jpg',
			bg_desktop: '/assets/product-zx7-speaker/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Aproveche las ventajas de un cono de tweeter de diafragma plano. Esto proporciona una tasa de respuesta rápida y excelentes frecuencias altas que los altavoces de estantería de nivel inferior no pueden proporcionar. Los woofers están hechos de aluminio que produce un sonido único y claro. Las entradas XLR le permiten conectarse a un mezclador para un uso más avanzado.',
			second_part: 'El altavoz ZX7 es la combinación perfecta de diseño elegante y alto rendimiento. Alberga una caja de madera MDF revestida que minimiza la resonancia acústica. La conectividad dual permite el emparejamiento a través de bluetooth o entrada óptica tradicional y RCA. Cambie las fuentes de entrada y controle el volumen con la punta de sus dedos con el control remoto inalámbrico incluido. Este altavoz versátil está equipado para brindar una experiencia auditiva auténtica.'
		},
		price: 3500,
		amountInitial: 1,
		includes: [
			{
				quantity: 2,
				item: 'Unidad de altavoz'
			},

			{
				quantity: 2,
				item: 'Panel de tela del altavoz'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de audio de 3,5mm y 5m'
			},

			{
				quantity: 1,
				item: 'Cable óptico de 7,5m'
			}
		],
		
		first_image_gallery: {
			url_mobile: '/assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-zx7-speaker/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-zx7-speaker/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
		}

	},

	{
		id: 'zx9 altavoz',
		category: 'speakers',
		name: 'Altavoz ZX9',
		description: 'Actualice su sistema de sonido con el nuevo altavoz activo ZX9. Es un sistema de altavoces de estantería que ofrece conectividad verdaderamente inalámbrica, creando nuevas posibilidades para configuraciones de audio más agradables y prácticas.',
		image: {
			bg_cart: '/assets/cart/image-zx9-speaker.jpg',
			bg_mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
			bg_tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
			bg_desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Conéctese a través de Bluetooth o casi cualquier fuente con cable. Este altavoz cuenta con entradas ópticas, coaxiales digitales, USB tipo B, RCA estéreo y XLR estéreo, lo que le permite tener hasta cinco dispositivos de fuente con cable conectados para cambiar fácilmente. La tecnología bluetooth mejorada ofrece una calidad de audio casi sin pérdidas a una distancia de hasta 328 pies (100m).',
			second_part: 'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
		},
		price: 4500,
		amountInitial: 1,
		includes: [
			{
				quantity: 2,
				item: 'Unidad de altavoz'
			},

			{
				quantity: 2,
				item: 'Panel de tela del altavoz'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de audio de 3,5mm y 5m'
			},

			{
				quantity: 1,
				item: 'Cable óptico de 10m'
			}
		],
		
		first_image_gallery: {
			url_mobile: '/assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
		}

	},

	{
		id: 'yx1 auricular',
		category: 'earphones',
		name: 'Auricular inalámbrico YX1',
		description: 'Adapte su experiencia auditiva con controladores dinámicos personalizados de los nuevos auriculares inalámbricos YX1. Disfruta de un increíble sonido de alta fidelidad incluso en entornos ruidosos con su función de cancelación activa de ruido.',
		image: {
			bg_cart: '/assets/cart/image-yx1-earphones.jpg',
			bg_mobile: '/assets/product-yx1-earphones/mobile/image-product.jpg',
			bg_tablet: '/assets/product-yx1-earphones/tablet/image-product.jpg',
			bg_desktop: '/assets/product-yx1-earphones/desktop/image-product.jpg'
		},
		features: {
			first_part: 'Experimente un sonido estéreo inigualable gracias a la innovadora tecnología acústica. Con una ergonomía mejorada diseñada para usarlos todo el día, estos revolucionarios auriculares han sido finamente diseñados para brindarle el ajuste perfecto, brindando total comodidad durante todo el día mientras disfrutan de un aislamiento de ruido excepcional y un sonido realmente envolvente.',
			second_part: 'Los auriculares inalámbricos YX1 cuentan con controles personalizables para volumen, música, llamadas y asistentes de voz integrados en ambos auriculares. La nueva duración de la batería de 7 horas se puede extender hasta 28 horas con el estuche de carga, lo que le brinda tiempo de juego ininterrumpido. Exquisita artesanía con un diseño resistente a salpicaduras ahora disponible en un nuevo esquema de color blanco y gris, así como en el popular negro clásico.'
		},
		price: 599,
		amountInitial: 1,
		includes: [
			{
				quantity: 2,
				item: 'Unidad de auriculares'
			},

			{
				quantity: 6,
				item: 'Tapones para los oídos de varios tamaños'
			},

			{
				quantity: 1,
				item: 'Manual de usuario'
			},

			{
				quantity: 1,
				item: 'Cable de carga USB‑C'
			},

			{
				quantity: 1,
				item: 'Bolsa de viaje'
			}
		],
		
		first_image_gallery: {
			url_mobile: '/assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
			url_tablet: '/assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
			url_desktop: '/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
		},

		second_image_gallery: {
			url_mobile: '/assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
			url_tablet: '/assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
			url_desktop: '/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
		},

		third_image_gallery: {
			url_mobile: '/assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
			url_tablet: '/assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
			url_desktop: '/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
		}

	},

];