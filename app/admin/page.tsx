'use client'
import { createPost } from "../actions"
import { useState, useRef } from "react"

export default function AdminPage() {
  const [mensaje, setMensaje] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const res = await createPost(formData)
    setMensaje(res.message)
    if (res.success) {
      formRef.current?.reset()
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-serif font-bold text-brand-blue mb-2">
          ✍️ Editor de Noticias
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Completá cada campo por separado para asegurar el formato periodístico perfecto.
        </p>

        <form ref={formRef} action={handleSubmit} className="space-y-6">
          
          {/* SECCIÓN 1: ENCABEZADO */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Encabezado</h3>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Título Principal</label>
                <input name="title" required placeholder="Ej: El dólar en bandas..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-lg font-bold" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Bajada / Copete (Saldrá en Cursiva)</label>
                <textarea name="subtitle" rows={3} placeholder="Resumen corto que va debajo del título..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none italic text-gray-600" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Autor (Saldrá en Negrita)</label>
                <input name="author" defaultValue="Por José A. Scheifler (*)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none font-bold" />
              </div>
          </div>

          {/* SECCIÓN 2: METADATA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Categoría</label>
                <select name="category" className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none">
                    <option value="ANÁLISIS">Análisis</option>
                    <option value="OPINIÓN">Opinión</option>
                    <option value="ECONOMÍA">Economía</option>
                    <option value="NOVEDADES">Novedades</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Medio / Fuente</label>
                <input name="source" placeholder="Ej: Diario Junio" defaultValue="Estudio Scheifler" className="w-full p-3 border border-gray-300 rounded-lg outline-none" />
            </div>
          </div>

          {/* SECCIÓN 3: MULTIMEDIA */}
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 space-y-4">
            <div>
                <label className="block text-xs font-bold text-blue-800 mb-1">URL de la Imagen</label>
                <input name="imageUrl" placeholder="Pegar link de la foto..." className="w-full p-3 border border-blue-200 rounded-lg text-sm bg-white" />
            </div>
            <div>
                <label className="block text-xs font-bold text-blue-800 mb-1">🔗 Link Fuente Original (Opcional)</label>
                <input name="externalUrl" placeholder="https://..." className="w-full p-3 border border-blue-200 rounded-lg text-sm bg-white" />
            </div>
          </div>

          {/* SECCIÓN 4: CUERPO */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Cuerpo de la Nota (Letra Capital Automática)</label>
            <textarea name="content" required rows={12} placeholder="Escribí acá el desarrollo de la nota. No hace falta poner título ni autor de nuevo." className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none font-serif text-gray-700 leading-relaxed" />
          </div>

          {/* SEGURIDAD */}
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <label className="block text-xs font-bold text-red-800 mb-2">🔒 Clave Admin</label>
            <input type="password" name="password" required className="w-full p-2 border border-red-200 rounded text-sm" />
          </div>

          <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            PUBLICAR NOTA
          </button>

          {mensaje && <p className="text-center font-bold mt-4 p-3 bg-gray-100 rounded">{mensaje}</p>}
        </form>
      </div>
    </div>
  )
}