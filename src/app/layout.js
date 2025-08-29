'use client';

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";

import Cabecalho from "./componentes/cabecalho";
import Rodape from "./componentes/rodape";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Pharma-X",
//   description: "Sistema de Busca e Comparação de Preços de Medicamentos",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isLogin = pathname === "/usuario/login";
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isLogin && <Cabecalho />}
        {children}
        {!isLogin && <Rodape />}
      </body>
    </html>
  );
}
