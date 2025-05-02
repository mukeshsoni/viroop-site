// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Viroop',
		aboutText: "The lightweight Lightroom alternative which doesn't burn a hole in your pocket",
		logo: {
			src: '/logo.svg',
			alt: 'The lightweight photo organizer and editor',
			text: 'Viroop'
		}
	},
	footerColumns: [],
	subFooter: {
		copywriteText: '© Viroop 2025.'
	}
}
