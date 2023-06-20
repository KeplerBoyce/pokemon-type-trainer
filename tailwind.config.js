/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'normal': '#737373',
                'fire': '#ef4444',
                'water': '#3b82f6',
                'electric': '#facc15',
                'grass': '#22c55e',
                'ice': '#7dd3fc',
                'fighting': '#9a3412',
                'poison': '#a21caf',
                'ground': '#b89d44',
                'flying': '#818cf8',
                'psychic': '#d946ef',
                'bug': '#84cc16',
                'rock': '#918546',
                'ghost': '#5b21b6',
                'dragon': '#7d2afa',
                'dark': '#573a1d',
                'steel': '#94a3b8',
                'fairy': '#f9a8d4',
            },
        },
    },
    plugins: [],
}
