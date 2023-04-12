/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: 'Poppins, sans-serif',
			},
			screens: {
				xs: '475px',
				'2xs': '360px'
			}
		},
	},
	plugins: [],
}
