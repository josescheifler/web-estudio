import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

// Buscamos TODAS las noticias, no solo 3
async function getAllPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }, // Las más nuevas primero
  })
}

export default async function PrensaPage() {
  const posts = await getAllPosts()

  // Separamos la noticia más nueva (Portada) del resto
  const portada = posts[0]
  const restoNoticias = posts.slice(1)

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      
      {/* --- CABECERA ESTILO DIARIO --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center border-b-2 border-brand-blue pb-8">
            <p className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase mb-2">
                Actualidad & Coyuntura
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-blue mb-4">
                SALA DE PRENSA
            </h1>
            <p className="text-gray-500 italic font-serif text-lg">
                "Información estratégica para la toma de decisiones."
            </p>
        </div>
        <div className="flex justify-between text-xs text-gray-400 py-2 border-b border-gray-200 font-sans uppercase tracking-widest">
            <span>Estudio Scheifler & Asoc.</span>
            <span>{new Date().toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>Entre Ríos, Argentina</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SI NO HAY NOTICIAS */}
        {posts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500">Aún no hay artículos publicados en el repositorio.</p>
            </div>
        )}

        {/* --- 1. NOTICIA DE PORTADA (DESTACADA) --- */}
        {portada && (
            <section className="mb-16">
                <Link href={`/prensa/${portada.id}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-xl rounded-sm overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                        {/* Imagen Grande */}
                        <div className="h-64 lg:h-auto relative overflow-hidden">
                            <img 
                                src={portada.imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"} 
                                alt={portada.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue px-4 py-1 text-sm font-bold uppercase tracking-widest">
                                {portada.category || "Destacado"}
                            </div>
                        </div>
                        {/* Texto */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 font-sans">
                                <span className="uppercase font-bold text-brand-blue">{portada.source || "Estudio Scheifler"}</span>
                                <span>—</span>
                                <span>{portada.createdAt.toLocaleDateString('es-AR')}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight group-hover:text-brand-blue transition-colors">
                                {portada.title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 line-clamp-4 leading-relaxed font-serif">
                                {portada.content}
                            </p>
                            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm border-b-2 border-brand-blue pb-1 w-fit group-hover:text-brand-gold group-hover:border-brand-gold transition-colors">
                                Leer Artículo Completo
                            </span>
                        </div>
                    </div>
                </Link>
            </section>
        )}

        {/* --- 2. EL RESTO DE LAS NOTICIAS (GRILLA) --- */}
        {restoNoticias.length > 0 && (
            <section>
                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-l-4 border-brand-gold pl-4">
                    Ediciones Anteriores
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {restoNoticias.map((nota) => (
                        <Link href={`/prensa/${nota.id}`} key={nota.id} className="group flex flex-col h-full bg-white border-b border-gray-200 hover:border-brand-gold pb-4 transition-colors">
                            {/* Imagen */}
                            <div className="h-56 overflow-hidden mb-5 relative bg-gray-100">
                                <img 
                                    src={nota.imageUrl || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"} 
                                    alt={nota.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                />
                                <span className="absolute bottom-0 left-0 bg-brand-blue text-white text-xs px-2 py-1 uppercase font-bold">
                                    {nota.category || "General"}
                                </span>
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-col flex-grow">
                                <div className="text-xs text-gray-400 mb-2 font-sans flex items-center justify-between">
                                    <span>{nota.createdAt.toLocaleDateString('es-AR')}</span>
                                    <span className="text-brand-gold font-bold">{nota.source}</span>
                                </div>
                                
                                <h4 className="text-xl font-serif font-bold text-gray-800 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                                    {nota.title}
                                </h4>
                                
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4 font-serif flex-grow">
                                    {nota.content}
                                </p>

                                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Leer nota <span>→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        )}

      </div>
    </main>
  )
}