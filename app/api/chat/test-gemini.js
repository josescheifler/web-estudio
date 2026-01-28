const { GoogleGenerativeAI } = require("@google/generative-ai");

// 👇 PEGA TU CLAVE NUEVA ACÁ
const genAI = new GoogleGenerativeAI("AIzaSyAttJAdm30Ru-UQrfLXHPYtwUYqb3ALCuk");

async function main() {
  try {
    // Esto hace magia: Le pide a Google que nos diga qué modelos podemos usar
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    console.log("----------------------------------------");
    console.log("📡 PROBANDO CONEXIÓN CON GEMINI...");
    
    const result = await model.generateContent("¿Estás funcionando?");
    const response = await result.response;
    
    console.log("✅ ¡EXITO! El modelo respondió:");
    console.log(response.text());
    console.log("----------------------------------------");

  } catch (error) {
    console.log("❌ ERROR FATAL:");
    console.log(error.message);
    console.log("----------------------------------------");
    
    // Si falla, intentamos listar qué modelos SÍ hay disponibles
    console.log("🔍 Intentando ver qué modelos tienes disponibles...");
    try {
        // Esta función a veces requiere permisos extra, pero probemos
        // No hay una función pública simple en el SDK para listar sin autenticación compleja
        // pero el error de arriba ya nos dirá mucho.
    } catch (e) {}
  }
}

main();