// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Viroop. Photo manager and editor.',
	siteDescription:
		'Viroop is a lightweight alternative for something like Lightroom. It wants to combine a photo manager and a photo editor into a single app.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Viroop. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
