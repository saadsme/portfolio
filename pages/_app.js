import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";


    function App({ Component, pageProps }) {
      return (
        
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
        
      );
    }

    export default App;