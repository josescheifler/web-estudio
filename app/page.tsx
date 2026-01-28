import Image from "next/image";
import Link from "next/link";
import NewsSection from "@/components/NewsSection"; // 👈 IMPORTAMOS TU NUEVA SECCIÓN

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* --- HERO SECTION (INTACTA) --- */}
      <header id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
            <Image 
              src="/fondo.png" 
              alt="Fondo Escritorio" 
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                POTENCIAMOS CAPITALES.<br />
                <span className="text-brand-gold">PÚBLICOS Y PRIVADOS.</span>
            </h1>
            
            <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide mb-10">
                Gerenciamiento Externo, Ingeniería de Costos y Desarrollo de Negocios Internacionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Link href="#gobierno" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-brand-blue transition-all duration-300 text-center uppercase tracking-wider text-sm">
                    Sector Público
                </Link>
                <Link href="#empresas" className="w-full sm:w-auto px-8 py-4 bg-brand-gold border-2 border-brand-gold text-brand-blue font-bold rounded-sm hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition-all duration-300 text-center uppercase tracking-wider text-sm shadow-lg">
                    Sector Privado
                </Link>
            </div>
        </div>
      </header>

      {/* --- EMPRESAS SECTION (INTACTA) --- */}
      <section id="empresas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                    NO VENDEMOS TRÁMITES. <br /><span className="text-brand-gold">GESTIONAMOS RENTABILIDAD.</span>
                </h2>
                <p className="text-lg text-gray-600 font-light">
                    Ingeniería de costos y seguridad normativa para su empresa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Tarjeta 1 */}
                <div className="bg-brand-gray/30 p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-blue group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-4">EXPORTACIÓN</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Inteligencia Comercial.</li>
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Ingeniería de Costos FOB.</li>
                    </ul>
                </div>
                {/* Tarjeta 2 */}
                <div className="bg-brand-gray/30 p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-gold group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-4">IMPORTACIÓN</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Cálculo de Landed Cost.</li>
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Sourcing y Pagos al Exterior.</li>
                    </ul>
                </div>
                 {/* Tarjeta 3 */}
                 <div className="bg-brand-gray/30 p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-blue group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-4">CONSULTORÍA</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Auditoría de procesos.</li>
                        <li className="flex items-start"><span className="text-brand-gold mr-2">▪</span> Outsourcing Gerencial.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- GOBIERNO SECTION (INTACTA) --- */}
      <section id="gobierno" className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        DE LA ADMINISTRACIÓN <br />
                        <span className="text-brand-gold">A LA PRODUCCIÓN.</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                        Transformamos municipios dependientes en motores de desarrollo económico real. Gestión política con mentalidad de eficiencia privada.
                    </p>
                    <Link href="#contacto" className="hidden lg:inline-block px-8 py-3 border-2 border-brand-gold text-brand-gold font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-brand-gold hover:text-white transition-all duration-300">
                        Solicitar Diagnóstico
                    </Link>
                </div>
                <div className="space-y-8">
                    {/* Item 1 */}
                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10 text-brand-gold border border-white/20 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-white">Ingeniería Fiscal</h3>
                            <p className="mt-2 text-gray-400 text-sm">Transformación de tasas arcaicas en recaudación genuina.</p>
                        </div>
                    </div>
                     {/* Item 2 */}
                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10 text-brand-gold border border-white/20 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-white">Gerenciamiento Ejecutivo</h3>
                            <p className="mt-2 text-gray-400 text-sm">Mentalidad de gestión privada aplicada a la cosa pública.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SOBRE MI SECTION (INTACTA) --- */}
      <section id="sobre-mi" className="py-24 bg-brand-gray/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-72 h-80 bg-gray-300 rounded-sm shadow-[12px_12px_0px_0px_rgba(1,1,68,1)] flex items-center justify-center text-gray-500 relative overflow-hidden">
                        <Image src="/perfil.jpg" alt="José Antonio Scheifler" width={300} height={400} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-brand-blue/10"></div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-2">El Profesional</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">JOSÉ ANTONIO SCHEIFLER</h3>
                    <p className="text-lg text-brand-blue/80 font-medium mb-6">Licenciado en Comercio Internacional & Consultor de Negocios Internacionales</p>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            En un mercado globalizado, los números no son solo cifras; son la brújula de su estrategia comercial. 
                            Con matrícula profesional en el <strong>CPCEER</strong> y una trayectoria enfocada en el desarrollo comercial, 
                            mi objetivo es simple: transformar la complejidad contable e internacional en rentabilidad clara.
                        </p>
                        <p>
                            No soy solo un consultor externo, soy su aliado estratégico para escalar su negocio con seguridad jurídica y financiera.
                        </p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-300">
                        <p className="font-serif italic text-2xl text-brand-blue">J.A. Scheifler</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section id="sobre-mi" className="py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-2">INSTITUCIONAL</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-brand-blue mb-10 font-serif">
                    Cuentas Claras. <span className="text-brand-gold">Negocios Seguros.</span>
                    </h3>

                    <div className="mb-14 max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                            Somos una firma de consultoría estratégica radicada en Entre Ríos, con una visión que trasciende las fronteras locales. 
                            Entendemos que en la economía actual, <strong>la contabilidad, la gestión pública y el comercio internacional</strong> no pueden tratarse como áreas aisladas.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Nuestro enfoque combina el <strong>rigor técnico</strong> de la matriculación profesional con la <strong>agilidad comercial</strong> necesaria para los negocios modernos. 
                            Ya sea optimizando la recaudación de un municipio o estructurando la primera exportación de una PyME, nuestro compromiso es el mismo: 
                            maximizar sus resultados minimizando sus riesgos.
                        </p>
                    </div>

                            {/* Tarjeta de Respaldo Profesional */}
                    <div className="bg-white border-l-4 border-brand-blue p-8 shadow-2xl relative inline-block text-left max-w-2xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-xl text-gray-700 italic leading-relaxed mb-6 font-serif">
                        "Su capital no admite errores. Todas nuestras proyecciones cuentan con el respaldo legal de un profesional matriculado en el <strong>CPCEER</strong>."
                        </p>
                    <div className="text-brand-blue opacity-80 flex justify-end items-center gap-3">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Respaldo Certificado</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>
                 </div>
             </div>
        </section>

      {/* 👇 AQUÍ ESTÁ EL CAMBIO IMPORTANTE 👇
        Reemplazamos la sección vieja por el componente que lee la base de datos 
      */}
      <NewsSection />

      {/* --- AGENDA SECTION (INTACTA) --- */}
      <section id="agenda" className="py-20 bg-brand-blue text-center relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                ¿Necesita un diagnóstico rápido?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Sabemos que los tiempos empresariales y públicos apremian. 
                Coordine una videollamada de 30 minutos directamente en nuestra agenda para evaluar su situación.
            </p>

            <a href="https://calendar.app.google/mva39qFrowM7Lzk97" target="_blank" rel="noopener noreferrer" className="inline-flex items-center group bg-white text-brand-blue border-2 border-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-300 shadow-xl">
                <svg className="w-6 h-6 mr-3 text-brand-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Agendar Videollamada
            </a>

            <p className="mt-6 text-sm text-gray-400">
                Sincronizado directamente con Google Calendar
            </p>
        </div>
      </section>

      {/* --- SECCIÓN FAQ --- */}
        <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-2">DUDAS COMUNES</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue">
                Preguntas Frecuentes
            </h3>
            </div>

            <div className="space-y-4">
            {/* Pregunta 1 */}
            <details className="group bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg border border-transparent open:border-gray-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-brand-blue text-lg select-none">
                <span>¿Ustedes reemplazan a mi Estudio Contable actual?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed text-base font-light">
                <strong>No, lo potenciamos.</strong> No somos un estudio contable tradicional que liquida impuestos mensuales; somos una <strong>Consultora de Negocios y Comercio Exterior</strong>. Mientras su contador se asegura de cumplir con AFIP (mirando el pasado), nosotros analizamos sus costos y su estructura comercial para proyectar el crecimiento (mirando el futuro). Trabajamos en equipo con su administración actual.
                </div>
            </details>

            {/* Pregunta 2 */}
            <details className="group bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg border border-transparent open:border-gray-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-brand-blue text-lg select-none">
                <span>Ya tengo Despachante de Aduana, ¿para qué necesito un Licenciado?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed text-base font-light">
                Es una distinción clave: el Despachante es nuestro socio operativo (hace el trámite ante Aduana), pero el <strong>Licenciado en Comercio Internacional define la estrategia</strong>. Nosotros analizamos si el precio es correcto, la logística más eficiente, cómo recuperar reintegros y la estructuración financiera. No solo hacemos que la carga salga, hacemos que la operación sea <strong>rentable</strong>.
                </div>
            </details>

            {/* Pregunta 3 */}
            <details className="group bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg border border-transparent open:border-gray-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-brand-blue text-lg select-none">
                <span>¿Trabajan únicamente con empresas que ya exportan?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed text-base font-light">
                No. Trabajamos con cualquier PyME o Municipio que quiera ordenar sus números para crecer. La mentalidad de "Comercio Internacional" implica <strong>eficiencia y competitividad</strong>, cualidades que sirven tanto para vender en China como en el mercado local. Si su estructura es eficiente puertas adentro, la exportación es una consecuencia natural.
                </div>
            </details>

            {/* Pregunta 4 */}
            <details className="group bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg border border-transparent open:border-gray-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-brand-blue text-lg select-none">
                <span>¿Qué aporta un perfil de Comercio Exterior a un Municipio?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed text-base font-light">
                Aporta una visión de <strong>Desarrollo Productivo</strong>. Entendemos qué necesitan las empresas locales para crecer y generar empleo. Nuestra "Ingeniería Fiscal" no busca solo recaudar tasas, sino crear un ecosistema donde al privado le convenga producir. Ayudamos al Municipio a gestionar sus recursos con la misma eficiencia que una empresa exportadora.
                </div>
            </details>

            {/* Pregunta 5 */}
            <details className="group bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg border border-transparent open:border-gray-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-brand-blue text-lg select-none">
                <span>Mi empresa es familiar, ¿es viable contratar consultoría externa?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed text-base font-light">
                Precisamente las estructuras familiares son las que más se benefician de una "Gerencia Externa". Al no tener los costos fijos de contratar un Gerente de Comex o de Finanzas a tiempo completo, usted accede a un servicio profesional por objetivos. <strong>Profesionalizamos la toma de decisiones</strong> sin cargar su estructura de costos fijos.
                </div>
            </details>
            </div>
        </div>
        </section>

      {/* --- CONTACTO SECTION (INTACTA) --- */}
      <section id="contacto" className="py-20 bg-brand-gray/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-brand-blue mb-3">Hablemos de Negocios</h2>
                <p className="text-gray-600">Complete el formulario y analizaré su caso a la brevedad.</p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg border-t-4 border-brand-green">
                <form action="https://formspree.io/f/xojdnjqa" method="POST" className="space-y-6">
    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre o Empresa</label>
                        <input type="text" name="nombre" required 
                               className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none" />
                    </div>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" required 
                                   className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                            <input type="tel" name="telefono" 
                                   className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none" />
                        </div>
                    </div>
                
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                        <select name="asunto" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none bg-white">
                            <option value="Consulta General">Consulta General</option>
                            <option value="Asesoria Contable">Asesoría Contable</option>
                            <option value="Comex">Comercio Exterior</option>
                            <option value="Sector Publico">Sector Público</option>
                        </select>
                    </div>
                
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                        <textarea name="mensaje" rows={4} required 
                                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"></textarea>
                    </div>
                
                    <button type="submit" className="w-full py-4 bg-brand-blue text-white font-bold tracking-widest uppercase rounded-sm hover:bg-opacity-90 transition-all shadow-md">
                        Enviar Consulta
                    </button>
                </form>
            </div>
        </div>
      </section>

      {/* --- FOOTER (CON ACCESO SECRETO AL ADMIN) --- */}
      <footer className="bg-brand-blue text-gray-300 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div className="border-l-2 border-brand-gold pl-6">
                    <h4 className="text-white text-xl font-bold mb-4 font-serif">Estudio Scheifler & Asoc.</h4>
                    <p className="text-sm leading-relaxed text-gray-400">Desarrollo Comercial y Negocios Internacionales.<br />Matriculado CPCEER.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 border-b border-brand-gold inline-block pb-2">Contacto Directo</h4>
                    <div className="space-y-4">
                        <a href="https://wa.me/5493454948738" target="_blank" className="flex items-center hover:text-white transition-colors">
                            <span className="text-2xl mr-3">📱</span> Nuestro whatsapp
                        </a>
                        <a href="mailto:direccion@estudioscheifler.com.ar" className="flex items-center hover:text-white transition-colors">
                            <span className="text-2xl mr-3">✉️</span> Nuestro Mail
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 border-b border-brand-gold inline-block pb-2">Más Información</h4>
                    <a href="https://linktr.ee/EstudioScheifler" target="_blank" className="inline-block bg-brand-gold text-brand-blue px-6 py-3 rounded-sm font-bold text-sm hover:bg-white transition-colors">
                        Ver Linktree Oficial
                    </a>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10 text-xs text-gray-500">
                <p>&copy; 2024 Estudio Scheifler & Asoc. Todos los derechos reservados.</p>
                
                {/* 👇 BOTÓN SECRETO PARA EL ADMIN 👇 */}
                <div className="mt-4 flex justify-center opacity-10 hover:opacity-100 transition-opacity">
                    <Link href="/admin" title="Acceso Administrativo">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    </footer>
    </main>
  );
}