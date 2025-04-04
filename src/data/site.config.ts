interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://EDIMcGill/', // Write here your website url
	author: 'Ishita', // Site author
	title: 'Equity Diversity and Includion for Graduate Students', // Site title.
	description: 'Welcome to Team EDI McGill, Faculty of Engineering!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
