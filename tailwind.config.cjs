/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			'body': ['Montserrat', 'sans-serif'],
            'display': ['Montserrat Alternates', 'sans-serif'],
		},
		fontSize: {
            'xs': '.75rem', // 12px
            'sm': '.875rem', // 14px
            'base': '1rem', // 16px
            'lg': '1.125rem', // 18px
            'xl': '1.25rem', // 20px
            '2xl': '1.375rem', // 22px
            '4xl': '1.5rem', // 24px
            '6xl': '1.75rem', // 28px
            '8xl': '2rem', // 32px
            '9xl': '2.25rem', // 36px
            '10xl': '2.5rem', // 40px
            '14xl': '3rem', // 48px
            '16xl': '4rem', // 64px
            '18xl': '4.5rem', // 72px
            '20xl': '6rem', // 96px
        },
		screens: {
            'xl': {'max': '1279px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'xs': {'max': '500px'},
        },
		colors: {
			white: {
				DEFAULT: '#FFFFFF',
				100: '#FCFAFA',
			},
			black: {
				DEFAULT: '#000000',
			},
			transparent: {
				DEFAULT: 'rgba(0,0,0,0)',
			},
			current: {
				DEFAULT: 'currentColor',
			},
			blue: {
				DEFAULT: '#0D0D49',
				800: '#03032D'
			},
			green: {
				DEFAULT: '#45C0B8'
			},
			purple: {
				DEFAULT: '#8980F5'
			},
			gray: {
				DEFAULT: '#D9D9D9',
			}
		},
		extend: {
			spacing: {
				7.5: '1.875rem', // 30px
				13: '3.125rem' // 50px
			}
		},
	},
	plugins: [],
}