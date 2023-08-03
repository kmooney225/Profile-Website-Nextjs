module.exports = {
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {
			boxShadow: {
				'neumorphic': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
			  },
			fontFamily: {
				sacramento: ['Sacramento'],
			  },
			colors: {
				primary: '#111',
				secondary: '#333',
				accent: '#ff0034',
			},
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}