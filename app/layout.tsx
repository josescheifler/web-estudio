import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
// Configuramos la fuente Inter
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuramos la fuente Playfair
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Estudio Scheifler & Asoc. | Consultoría Estratégica",
  description: "Gerenciamiento Externo, Ingeniería de Costos y Desarrollo de Negocios Internacionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 text-gray-800`}>
        {/* 1. El Menú arriba de todo */}
        <Navbar /> 
        
        {/* 2. El contenido de la página en el medio */}
        {children} 

        <ChatWidget />  {/* 👈 Listo el pollo */}
      </body>
    </html>
  );
}