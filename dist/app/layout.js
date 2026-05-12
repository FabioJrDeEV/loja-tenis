import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Passo Fino | Loja de Sapatos",
  description: "Loja de sapatos com novidades, modelos femininos e masculinos."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
