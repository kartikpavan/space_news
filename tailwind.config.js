module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern':
					"url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')",
				'footer-texture': "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['autumn'],
	},
};
