import { PrismaClient } from '@prisma/client'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NotaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const idNumero = parseInt(id);
  if (isNaN(idNumero)) return notFound();

  const post = await prisma.post.findUnique({
    where: { id: idNumero },
  });

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. PORTADA DINÁMICA */}
      <div className="relative w-full min-h-[60vh] flex items-end bg-gray-900">
         <div className="absolute inset-0">
            <img 
                src={post.imageUrl || "/fondo.png"} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
         </div>
         
         <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 pt-32">
            <span className="bg-brand-gold text-brand-blue px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest w-fit mb-6 shadow-sm inline-block">
                {post.category || "Actualidad"}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight shadow-sm drop-shadow-md pb-2">
                {post.title}
            </h1>
            
            <div className="text-gray-300 mt-6 flex flex-wrap items-center gap-4 text-sm font-sans tracking-wide border-t border-gray-600 pt-6 w-fit">
                <span className="uppercase font-bold text-white">{post.source || "Estudio Scheifler"}</span>
                <span className="hidden sm:inline">•</span>
                <span>{post.createdAt.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
         </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 font-serif leading-relaxed text-gray-700">
        
        {/* FUENTE EXTERNA */}
        {post.externalUrl && (
            <div className="bg-gray-50 border-l-4 border-brand-blue p-6 mb-10 shadow-sm rounded-r-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
                <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">Fuente Externa</p>
                    <p className="text-sm text-gray-700 italic">
                        Publicado originalmente en <strong>{post.source}</strong>.
                    </p>
                </div>
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 text-brand-blue text-xs font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors rounded-sm text-center">
                    Ver Original ↗
                </a>
            </div>
        )}

        {/* 2. BAJADA / COPETE (Cursiva) */}
        {post.subtitle && (
            <div className="text-xl italic mb-8 text-gray-600 font-medium leading-relaxed border-b border-gray-100 pb-6">
                {post.subtitle}
            </div>
        )}

        {/* 3. AUTOR (Negrita) */}
        {post.author && (
            <div className="font-bold mb-8 text-brand-blue text-lg">
               {post.author}
            </div>
        )}

        {/* 4. CUERPO PRINCIPAL (Con Letra Capital) */}
        <div className="prose prose-lg prose-blue max-w-none 
            first-letter:text-6xl first-letter:font-bold first-letter:text-brand-gold first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* PIE DE PÁGINA */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6 font-sans">
            <Link href="/prensa" className="group text-brand-blue font-bold text-sm uppercase tracking-widest hover:text-brand-gold transition-colors flex items-center gap-3">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Repositorio
            </Link>
            
            <a href={`https://wa.me/?text=Mirá esta nota: ${post.title}`} target="_blank" className="text-gray-500 font-bold text-sm hover:text-green-600 flex items-center gap-2 transition-colors">
               Compartir <span className="text-xl">📱</span>
            </a>
        </div>

      </article>
    </main>
  )
}