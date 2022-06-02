module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}','./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',],
	theme: {
		extend: {
			colors: {
				dark: '#15083E',
				primary: '#8C72FF',
				secondary: '#291C52',
				info: '#6CD3FF'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
}
