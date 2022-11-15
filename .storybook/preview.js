import "rsuite/dist/rsuite.min.css";
import "tailwindcss/tailwind.css";
import "../styles/index.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}