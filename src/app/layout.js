// app/layout.jsx
'use client';

import { usePathname } from 'next/navigation';
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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // Verifica se é a página de login
  const isLoginPage = pathname === '/usuario/login';
  
  // Você pode adicionar outras páginas que não devem ter cabeçalho/rodape se necessário
  // const hideHeaderFooter = isLoginPage || pathname === '/outra-pagina';

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isLoginPage && <Cabecalho />}
        {children}
        {!isLoginPage && <Rodape />}
      </body>
    </html>
  );
}