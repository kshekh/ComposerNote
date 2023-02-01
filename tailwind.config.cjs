/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {  
		fontFamily: {
			sans: ["'Inter var'", ...defaultTheme.fontFamily.sans],
		  },
		
		colors: {
		  dark: {
			100:'#202020',
			200:'#616161',
			300:'#2F2F2F',
			400:'#1C1C1C',
			500:'#929294',
			600:'#9D9D9F',
		  },
		  white: {
			DEFAULT:'#ffffff',
			100:'#FAFAFF',		 
			200:'#ECEBE4',		 
			300:'#A1A1A1',		 
			400:'#DADDD8',				
		  },
		  
		  red:{
			DEFAULT:'#E10C0C',
			 
		  }
		}, 
		backgroundImage:{
			'gradient-1':'linear-gradient(180deg, #1C1C1C 0%, #373737 100%)',
			'gradient-2':'linear-gradient(to right, rgba(94,94,94,0.6) 50%,rgba(94,94,94,0) 87%)',
			'gradient-3':'linear-gradient(to right, rgba(94,94,94,0) 13%,rgba(94,94,94,0.6) 50%)',
			'gradient-4':'linear-gradient(180deg, rgba(170, 170, 170, 0.3) 0%, rgba(155, 155, 155, 0.165) 110.09%)',
			'gradient-5':'linear-gradient(90deg, rgba(162, 162, 162, 0) -0.02%, #A2A2A2 51.55%, rgba(161, 161, 161, 0) 100%)',
		}
    },
  },  
  
	plugins: [
		plugin(function ({ addBase, components, theme }) {
			addBase({});
		}),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	]
}
module.exports = config;
