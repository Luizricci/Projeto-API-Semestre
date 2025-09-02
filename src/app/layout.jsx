
import "./globals.css";


export const metadata = {
  title: "API Brasil",
  description: "Projeto de APIs públicas brasileiras.",
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
