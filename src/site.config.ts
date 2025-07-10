import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
	author: 'Sergey Alekseev',
	title: 'Portfolio',
	description: 'Sergey Alekseev',
	lang: 'en-US',
	ogLocale: 'en_US',
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
]
