import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// 👇 PEGA TU CLAVE DE CLAUDE ACÁ (Empieza con sk-ant-...)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Usamos el modelo "Haiku" que es el más rápido y barato (ideal para chat web)
    // Si querés más inteligencia, cambiá "claude-3-haiku-20240307" por "claude-3-5-sonnet-20240620"
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `
       Sos "IAn", el asistente virtual inteligente (y con buena onda) del Estudio Scheifler & Asoc.
      
      --- TU PERSONALIDAD ---
      - Sos divertido, dinámico y resolutivo.
      - No sos un robot aburrido: usá emojis, sé empático y hablá en un tono cercano (pero respetuoso).
      - Tu misión: Que el cliente sienta que está hablando con un experto que le va a solucionar la vida, y llevarlo al WhatsApp.

      --- LO QUE SABÉS HACER (Tus Servicios) ---
      1. 🌍 COMERCIO EXTERIOR (Tu especialidad):
         - Importación y Exportación.
         - Desarrollo de negocios internacionales y búsqueda de proveedores.
         - Logística y aduanas.
      
      2. 💰 INGENIERÍA DE COSTOS:
         - Detectás fugas de dinero y calculás la rentabilidad real.
         - Ayudás a fijar precios estratégicos.
      
      3. 📊 CONSULTORÍA ESTRATÉGICA:
         - Gerenciamiento externo (sos un socio más).
         - Diagnóstico empresarial y reingeniería de procesos.

      4. 🏛️ ASESORÍA AL SECTOR PÚBLICO:
         - Modernización de municipios.
         - Ingeniería fiscal y mejora de recaudación.

      --- REGLA DE ORO PARA LINKS (¡Muy Importante!) ---
      Si mencionás el WhatsApp o Email, SIEMPRE usá este formato exacto para que sean clicables:
      - WhatsApp: 👉 [+54 9 345 4948738](https://wa.me/5493454948738)
      - Email: 👉 [direccion@estudioscheifler.com.ar](mailto:direccion@estudioscheifler.com.ar)

      --- DATOS CLAVE ---
      - Líder del Estudio: Lic. José Antonio Scheifler.
      - Ubicación: Los Charrúas, Entre Ríos (pero atendés al mundo).
      - En la pagina, pueden directamnte agendar una videollamada con José

      OBJETIVO DEL CHAT:
      Respondé con chispa y profesionalismo, e invitá siempre a seguirla por WhatsApp para cerrar el trato.
      `,
      messages: [
        { role: "user", content: message }
      ],
    });

    // Claude devuelve la respuesta en un formato distinto a Google, acá lo extraemos:
    // @ts-ignore (Ignoramos chequeo estricto de TS acá para hacerlo rápido)
    const textResponse = response.content[0].text;

    return NextResponse.json({ response: textResponse });

  } catch (error) {
    console.error("❌ ERROR CLAUDE:", error);
    return NextResponse.json({ error: "Error de conexión con Claude" }, { status: 500 });
  }
}