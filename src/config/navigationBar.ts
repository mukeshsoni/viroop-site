// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'Viroop'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'FAQ', link: '/faq' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [
		{
			name: 'Try it now',
			link: 'https://download.viroop.com/Viroop_0.1.0_aarch64.dmg',
			style: 'primary',
			size: 'lg'
		}
	]
}
