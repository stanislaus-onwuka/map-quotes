/** @type {import('tailwindcss').Config} */

const mapColors = {
  'primary-50': "rgba(255, 236, 229, 1)",
  'primary-400': "rgba(245, 102, 48, 1)",
  'primary-500': "rgba(255, 236, 229, 1)",
  'tertiary': "rgba(85, 94, 104, 1)",
  'grey-8': "rgba(228, 231, 236, 1)",
  'grey-50': "rgba(249, 250, 251, 1)",
  'grey-100': "rgba(240, 242, 245, 1)",
  'grey-300': 'rgba(208, 213, 221, 1)',
  'grey-400': "rgba(152, 162, 179, 1)",
  'grey-500': "rgba(102, 113, 133, 1)",
  'grey-600': "rgba(71, 83, 103, 1)",
  'grey-700': "rgba(52, 64, 84, 1)",
  'grey-800': "rgba(29, 39, 57, 1)",
  'grey-900': "rgba(16, 25, 40, 1)",
  'base-red': "rgba(212, 38, 32, 1)",
  'base-blue': "rgba(23, 92, 255, 1)",
  'base-green': "rgba(15, 151, 61, 1)",
  'light-blue': "rgba(227, 234, 251, 1)",
  'sidebar-bg': "rgba(247, 249, 252, 1)",
  'light-green': "rgba(231, 246, 236, 1)",
  'light-green-200': "rgba(181, 227, 196, 1)"

}

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: mapColors,
      colors: mapColors,
      fontSize: {
        "paragraph-large": ["18px", "26.1px"],
        "paragraph-small": ["14px", "20.3px"],
        "paragraph-medium": ["16px", "23.2px"],
        "paragraph-xs": ["12px", "17.4px"],
        "paragraph-caption": ["12px", "16.2px"],
        "heading-5": ["24px", "28.8px"],
        "heading-6": ["20px", "24px"],
      },
      boxShadow: {
        'container-shadow': '0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
        'toast-shadow': '0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
        'confirmation-shadow': '0px 16px 24px -4px rgba(16, 25, 40, 0.08)'
        
      }
    },
  },
  plugins: [],
}

