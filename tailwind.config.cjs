/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {


      backgroundImage: {
		 
				"range-thumb": "url(/src/svg/range-thumb.svg)",
				"range-thumb-gray": "url(/src/svg/range-thumb-gray.svg)",
				range:
					'linear-gradient(to bottom, rgba(37,43,60,0.98) 0%,rgba(29,36,54,0.98) 11%,rgba(29,37,55,0.98) 85%,rgba(34,41,59,0.98) 96%,rgba(39,46,63,0.98) 100%)',
				dropdown:
					'linear-gradient(116.02deg, rgba(170, 170, 170, 0.35) 0%, rgba(170, 170, 170, 0.2) 100%)',
				'blue-box': 'linear-gradient(104.64deg, #007DF2 0%, #46A6FF 100%)',
				glass:				
					'linear-gradient(116.02deg, rgba(196, 196, 196, 0.25) 0%, rgba(196, 196, 196, 0.1) 100%)',
				linear:				
					'linear-gradient(116.02deg, rgba(196, 196, 196, 0.05) 0%, rgba(196, 196, 196, 0.02) 100%)',
				'glass-light ':
					'linear-gradient(116.02deg, rgba(104, 104, 104, 0.25) 0%, rgba(142, 142, 142, 0.1) 100%)',
				'radial-blue-light':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #88C5FF 0%, #5AAEFC 100%)',
				'radial-blue': 'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #46A6FF 0%, #007DF2 100%)',
				'radial-blue-2':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #46A6FF 0%, #007DF2 0.01%, #004A8F 100%)',
				'radial-green': 'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #61F5DB 0%, #16CCAC 100%)',
				'radial-green-2':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #11C1A2 0%, #008B72 100%)',
				'radial-red': 'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #E14343 0%, #BD1616 100%)',
				'radial-red-light':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #F77A7A 0%, #EB4141 100%)',
				'radial-purple': 'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #C663F7 0%, #A221E1 100%)',
				'glass-purple': 'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #C663F7 0%, #A221E1 100%)',
				'radial-purple-dark':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #A929E8 0%, #6F01A5 100%)',
				'radial-purple-light':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #DF9EFF 0%, #CA6CF9 100%)',
				'stroke-blue-purple':
					'linear-gradient(123.66deg, #007DF2 0%, rgba(0, 125, 242, 0) 52.6%, #A221E1 100%)',
				'radial-yellow':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #FBD28E 0%, #F9AF35 100%)',
				'radial-yellow-2':
					'radial-gradient(63.52% 63.52% at 68.03% 31.76%, #EEB85F 0%, #CF8916 100%)',
				'red-yellow-green':'linear-gradient(90deg, #BD1616 0%, #F9AF35 50%, #11C1A2 100%)',
				'green-yellow-red':'linear-gradient(to right, #11c1a2 0%,#f9af35 50%,#bd1616 100%)',
				'ig':'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
			},

    },
  },
  
	plugins: [
		plugin(function ({ addBase, components, theme }) {
			addBase({});
		}),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
}
module.exports = config;