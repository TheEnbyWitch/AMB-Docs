// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import preact from '@astrojs/preact';
import react from '@astrojs/react';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	integrations: [
		preact(),
		react(),
	  ],
});
