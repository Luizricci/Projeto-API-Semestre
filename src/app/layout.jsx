
import "./globals.css";


export const metadata = {
  title: "API Animes",
  description: "Projeto de APIs de animes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
