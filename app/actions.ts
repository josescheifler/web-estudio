'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const subtitle = formData.get('subtitle') as string // <--- NUEVO
  const author = formData.get('author') as string     // <--- NUEVO
  const content = formData.get('content') as string
  const password = formData.get('password') as string
  
  const category = formData.get('category') as string
  const source = formData.get('source') as string
  const imageUrl = formData.get('imageUrl') as string
  const externalUrl = formData.get('externalUrl') as string

  if (password !== process.env.ADMIN_PASSWORD) {
    return { success: false, message: '❌ Contraseña incorrecta' }
  }

  try {
    await prisma.post.create({
      data: { 
        title, 
        subtitle: subtitle || null, // Guardamos la bajada
        author: author || "José A. Scheifler", // Guardamos el autor
        content,
        category: category || "GENERAL",
        source: source || "Estudio Scheifler",
        imageUrl: imageUrl || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
        externalUrl: externalUrl || null,
      },
    })

    revalidatePath('/prensa')
    revalidatePath('/')
    return { success: true, message: '✅ ¡Nota publicada correctamente!' }
  } catch (e) {
    return { success: false, message: 'Error al guardar en base de datos' }
  }
}