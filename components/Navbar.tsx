"use client"; // Esto es vital para que ande el botón del celular

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // Este es el "interruptor" para el menú del celular
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
            
            {/* LOGO */}
            <Link href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
                {/* Asegurate de tener el archivo logo.png en la carpeta 'public' */}
                <Image 
                  src="/logo.png" 
                  alt="Estudio Scheifler" 
                  width={180} 
                  height={50} 
                  className="h-12 w-auto object-contain"
                  priority // Esto hace que el logo cargue inmediato
                />
            </Link>

            {/* MENÚ DE ESCRITORIO (Desktop) */}
            <div className="hidden md:flex space-x-6 items-center">
                <Link href="/#inicio" className="text-xs font-bold tracking-widest text-gray-600 hover:text-brand-blue transition-colors uppercase">Inicio</Link>
                <Link href="/#empresas" className="text-xs font-bold tracking-widest text-gray-600 hover:text-brand-blue transition-colors uppercase">Empresas</Link>
                <Link href="/#gobierno" className="text-xs font-bold tracking-widest text-gray-600 hover:text-brand-blue transition-colors uppercase">Gobierno</Link>
                <Link href="/#estudio" className="text-xs font-bold tracking-widest text-gray-600 hover:text-brand-blue transition-colors uppercase">El Estudio</Link>
                <Link href="/prensa" className="text-xs font-bold tracking-widest text-brand-blue hover:text-brand-gold transition-colors uppercase border-b-2 border-transparent hover:border-brand-gold">Prensa</Link>
                
                <Link href="/#contacto" className="px-6 py-2.5 text-xs font-bold tracking-widest text-white bg-brand-blue hover:bg-brand-gold transition-colors rounded-sm shadow-md uppercase">
                    Contacto
                </Link>
            </div>

            {/* BOTÓN MENÚ CELULAR (Hamburguesa) */}
            <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 hover:text-brand-blue focus:outline-none p-2"
                >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                          // Ícono de "Cerrar" (X)
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                          // Ícono de "Hamburguesa"
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>
            </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE CELULAR */}
      {/* Usamos lógica condicional: Si isOpen es true, mostramos el menú */}
      <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md uppercase">Inicio</Link>
              <Link href="#empresas" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md uppercase">Empresas</Link>
              <Link href="#gobierno" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md uppercase">Gobierno</Link>
              <Link href="#estudio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md uppercase">El Estudio</Link>
              <Link href="/prensa" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-brand-blue hover:text-brand-gold hover:bg-gray-50 rounded-md uppercase">Prensa & Novedades</Link>
              <Link href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wide text-white bg-brand-blue hover:bg-opacity-90 rounded-md mt-4 text-center uppercase">Contacto</Link>
          </div>
      </div>
    </nav>
  );
}