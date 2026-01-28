import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

// Instanciamos la base de datos
const prisma = new PrismaClient()

// Función para buscar las últimas 3 notas
async function getLatestPosts() {
  return await prisma.post.findMany({
    take: 3, // Traemos máximo 3
    orderBy: { createdAt: 'desc' }, // Las más nuevas primero
  })
}

export default async function NewsSection() {
  // 1. Buscamos las noticias en la base de datos
  const noticias = await getLatestPosts()

  // Si no hay noticias cargadas, no mostramos la sección vacía
  if (noticias.length === 0) return null

  return (
    <section id="novedades" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CABECERA DE LA SECCIÓN */}
          <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-2">
                Prensa & Opinión
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue">
                ANÁLISIS DE COYUNTURA
              </h3>
          </div>

          {/* GRILLA DE NOTICIAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {noticias.map((nota) => {
                  // LÓGICA HÍBRIDA:
                  // Detectamos si es una nota externa (Diario Junio, etc) o interna
                  const esExterna = !!nota.externalUrl && nota.externalUrl.length > 0;
                  
                  // Si es externa, el link es directo. Si es interna, vamos a /prensa/ID
                  const linkDestino = esExterna ? nota.externalUrl! : `/prensa/${nota.id}`; 
                  
                  // Si es externa, abrimos pestaña nueva (_blank)
                  const target = esExterna ? "_blank" : "_self"; 

                  return (
                    <article key={nota.id} className="bg-white rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border-t-4 border-brand-blue overflow-hidden relative">
                        
                        {/* FOTO DE PORTADA */}
                        <div className="h-48 relative overflow-hidden bg-gray-200">
                            {/* Usamos <img> normal para que acepte links externos sin configuración extra */}
                            <img 
                                src={nota.imageUrl || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"} 
                                alt={nota.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            {/* Etiqueta de Categoría */}
                            <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm z-10">
                                {nota.category || "NOVEDADES"}
                            </div>
                        </div>

                        {/* INFO DE LA NOTA */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="text-xs text-brand-gold font-bold mb-3 flex items-center gap-2">
                                <span className="uppercase">{nota.source || "Estudio Scheifler"}</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-400 font-normal">
                                    {nota.createdAt.toLocaleDateString('es-AR')}
                                </span>
                            </div>

                            <h3 className="text-xl font-serif font-bold text-brand-blue mb-4 leading-tight group-hover:text-brand-gold transition-colors">
                                {nota.title}
                            </h3>
                            
                            {/* Resumen cortito */}
                            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                                {nota.content}
                            </p>

                            {/* BOTÓN INTELIGENTE */}
                            {esExterna ? (
                                // CASO A: LINK EXTERNO (Ej: Diario Junio)
                                <a href={linkDestino} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold transition-colors uppercase tracking-widest mt-auto cursor-pointer">
                                    Leer en {nota.source}
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            ) : (
                                // CASO B: NOTA INTERNA (Blog propio)
                                <Link href={linkDestino} className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold transition-colors uppercase tracking-widest mt-auto cursor-pointer">
                                    Leer Nota Completa
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Link>
                            )}
                        </div>
                    </article>
                  )
              })}
              
              {/* TARJETA DE RELLENO (Solo aparece si tenés menos de 3 noticias) */}
              {noticias.length < 3 && (
                 <article className="bg-brand-blue rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden justify-center items-center text-center p-8 min-h-[400px]">
                      <div className="absolute inset-0 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity"></div>
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform relative z-10">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Historial Completo</h3>
                      <p className="text-blue-200 text-sm mb-6 px-4 relative z-10">Acceda a la colección completa de artículos.</p>
                      <Link href="/prensa" className="px-8 py-3 bg-brand-gold text-brand-blue font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors shadow-lg relative z-10">
                        Ver Todo
                      </Link>
                 </article>
              )}
          </div>
      </div>
    </section>
  )
}