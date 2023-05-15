/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		"./pages/**/*.{html,js,jsx}",
		"./components/**/*.{html,js,jsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Poppins", "Arial", "sans-serif"],
		},
		extend: {
			margin: {
				128: "32rem",
				160: "40rem",
				// Add more custom margin values as needed
			},
		},
	},
	plugins: [],
};
