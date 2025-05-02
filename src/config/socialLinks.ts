// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'twitter',
		link: 'https://x.com/mukeshsoni',
		icon: 'twitter-icon'
	},
	{
		name: 'github',
		link: 'https://github.com/mukeshsoni',
		icon: 'github-icon'
	}
]
