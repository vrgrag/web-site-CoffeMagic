/* Basic React + Vite ESLint config */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      "react-refresh": (await import("eslint-plugin-react-refresh")).default,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  }
]
