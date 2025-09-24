import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Portfólio — Gabriel Araújo",
  description: "Currículo/Portfólio com jogo da forca (Pokémon)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="header">
          <nav className="nav">
            <Link className="logo" href="/" prefetch={false}>GA</Link>
            <div className="links">
              <Link href="/forca" prefetch={false}>Jogo da Forca</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="footer">
          Made by Gabriel S.L. Araújo • {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
