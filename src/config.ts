export const SITE = {
  title: "Accumulation-Based Motion Blur Documentation",
  description: "Here you can find useful info for the plugin!",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "TheEnbyWitch",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/LunaRyuko/AMB-Docs/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://github.com/LunaRyuko/AMB-Docs/blob/main/`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Overview: [
      { text: "Introduction", link: "en/introduction" },
      //{ text: 'How does it work?', link: 'en/general/how-does-it-work' },
      { text: "Known Issues", link: "en/general/known-issues" },
    ],
    "Getting Started": [
      { text: "Installation", link: "en/start/install" },
      { text: "Configuration", link: "en/start/config" },
    ],
    "How To": [
      { text: "Use in Sequencer", link: "en/how-to/sequencer" },
      { text: "Use in C++", link: "en/how-to/cpp" },
      { text: "Use in Blueprints", link: "en/how-to/bp" },
      { text: "Use via console", link: "en/how-to/console" },
    ],
    "": [
      { text: "Version History", link: "en/version-history" },
      { text: "Credits", link: "en/credits" },
      { text: "Support", link: "en/support" },
    ],
  },
};
