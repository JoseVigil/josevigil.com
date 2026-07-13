/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				paper: 'var(--paper)',
				'paper-dark': 'var(--paper-dark)',
				ink: 'var(--ink)',
				'ink-2': 'var(--ink-2)',
				'ink-3': 'var(--ink-3)',
				'ink-4': 'var(--ink-4)',
				'ink-5': 'var(--ink-5)',
				rule: 'var(--rule)',
				'rule-light': 'var(--rule-light)',
				accent: 'var(--red)',
				'accent-2': 'var(--red-2)',
			},
			fontFamily: {
				serif: ['EB Garamond', 'Libre Baskerville', 'Georgia', 'serif'],
				mono: ['DM Mono', 'Courier New', 'monospace'],
				display: ['Cinzel', 'serif'],
			},
		},
	},
	plugins: [
    require('@tailwindcss/forms')
	],
}
