export const SITE = {
	title: 'Accumulation-Based Motion Blur Documentation',
	description: 'Here you can find useful info for the plugin!',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'TheEnbyWitch',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/LunaRyuko/AMB-Docs/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Overview', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'How does it work?', link: 'en/how-does-it-work' },

		{ text: 'Getting Started', header: true },
		{ text: 'Installation', link: 'en/start/install' },

		{ text: 'How to', header: true },
		{ text: 'Use in Sequencer', link: 'en/how-to/sequencer' },
		{ text: 'Use in C++', link: 'en/how-to/cpp' },
		{ text: 'Use in Blueprints', link: 'en/how-to/bp' },
		{ text: 'Use via console', link: 'en/how-to/console' },
	],
};
