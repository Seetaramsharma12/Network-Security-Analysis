/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#0f172a',
                'brand-blue': '#3b82f6',
                'brand-red': '#ef4444',
            }
        },
    },
    plugins: [],
}
