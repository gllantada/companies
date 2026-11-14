DEVS EXTENSION · LANDING HOME
Documento maestro para implementación web | Versión 1.0 · 14/11/2026
Objetivo: entregar al desarrollador el copy exacto, su ubicación, fotografías sugeridas, estados de interacción y decisiones de responsive. La landing mantiene cinco secciones; no se agregan páginas ni promesas no verificadas.
0. Referencia visual y criterios globales
Template de referencia: Do — Framer. https://www.framer.com/marketplace/templates/do/
Vista en vivo: https://do-consulting.framer.website/
Aplicar una adaptación original: fondo blanco o marfil, títulos negros grandes, composición editorial, fotografía realista de pymes y procesos, tarjetas con esquinas suavemente redondeadas, divisores finos y contraste alto.
Arquitectura: 01 Hero · 02 Problemas · 03 Dos servicios · 04 Tres aplicaciones · 05 Quién desarrolla + contacto. Menú: Soluciones [ancla #servicios] · Diagnóstico web [herramienta, URL pendiente] · Cómo trabajamos [ancla #contacto] · Contacto [ancla #contacto].
Regla de copy: en la primera lectura hablar de tareas, funcionalidades, pedidos y consultas. No usar “transformación digital”, “revolucionamos”, “potenciamos”, “innovación” ni atribuir mejoras medibles no comprobadas. “Agente” e “IA” solo en explicaciones interiores si fueran necesarios.
Accesibilidad: todas las funciones deben estar disponibles por clic, teclado o toque; el hover es solo una mejora visual. Respetar prefers-reduced-motion; contraste AA, focos visibles, imágenes con alt y lazy loading excepto hero.
01 · HERO — Presentación principal
Layout y fotografía
Desktop: dos columnas aproximadamente 53/47, texto a la izquierda y fotografía sin texto a la derecha. Mobile: texto y CTAs primero, fotografía debajo. Proporción de recorte sugerida: desktop 4:5 o 5:4 dentro del bloque; mobile 4:3. Foto con foco desplazado del borde para no cortar rostro ni manos.
Asset: hero-empresa.webp.
Copy visible permanente
H1: Desarrollo web y automatizaciones para tu empresa.
Bajada: Mejoramos sitios y aplicaciones, desarrollamos nuevas funcionalidades y automatizamos tareas que hoy requieren trabajo manual.
CTA principal: Contanos qué necesitás resolver → #contacto
CTA secundario: Conocé nuestros servicios → #servicios
Interacción y mobile
Sin hover ni sobreimpresión sobre la foto. En mobile, CTA principal ancho completo o de fácil toque; franja de confianza en una fila desplazable o 3 ítems apilados sin romper el ancho.
02 · ¿QUÉ NECESITÁS RESOLVER? — Identificación rápida
Layout
Cuatro cards de fondo claro y borde fino, sin fotografías, íconos lineales SVG. Desktop: cuatro columnas. Tablet: dos columnas. Mobile: una columna (preferido para legibilidad) o dos si cada título y descripción caben.
Título de sección visible: ¿Qué necesitás resolver?
Copy exacto card por card
Card 02A · Ícono message-circle · Título siempre visible: Consultas y pedidos por WhatsApp
Hover/expansión: Automatizamos la primera atención, recopilamos los datos necesarios y organizamos las solicitudes para tu equipo.
Destino: #servicios (card Automatizaciones) o una página de solución cuando exista.
Card 02B · Ícono monitor · Título siempre visible: Tu web necesita hacer más
Hover/expansión: Incorporamos pedidos, cotizadores, agenda de turnos y .
reservas, formularios inteligentes y otras funcionalidades.
Destino: #servicios (card Desarrollo web).
Card 02C · Ícono database · Título siempre visible: Carga manual de información
Hover/expansión: Conectamos formularios, mensajes y documentos con tus herramientas para evitar transcripciones repetidas.
Destino: #servicios (card Automatizaciones).
Card 02D · Ícono plug · Título siempre visible: Sistemas que no se comunican
Hover/expansión: Integramos las aplicaciones que utilizás para que la información pase de una a otra sin tener que copiarla.
Destino: #servicios (card Automatizaciones).
Interacción
Desktop: al pasar cursor aparece la descripción dentro de la misma card (no flip). Mantener tamaño o alto estable para evitar saltos. También visible con foco de teclado. Mobile: tocar card expande/acorta contenido; un segundo control “Ver solución” lleva al destino. No hacer clic en card y expansión simultánea si genera acciones ambiguas.
03 · DOS FORMAS DE RESOLVERLO — Servicios
Layout y textos sobreimpresos
Título de sección: Dos formas de resolverlo. Desktop: dos tarjetas grandes y horizontales con foto de fondo, 50/50. Mobile: apiladas. Degradado oscuro desde abajo (aprox. 55–75% de opacidad al pie) y texto blanco, sin tapar rostro. Toda card clicable.
Card 03A · DESARROLLO WEB · Asset: servicio-desarrollo.webp
Texto sobre foto, visible siempre: Desarrollo web
Bajada siempre visible: Sitios, aplicaciones y funcionalidades a medida.
Al hover: Mejoramos tu web, sumamos herramientas para tus clientes y desarrollamos aplicaciones para procesos específicos.
CTA hover / link: Conocé nuestros servicios → URL de vertical Desarrollo web [PENDIENTE].
CTA secundario: Analizá tu web gratis → se solicita vía el form de contacto
Card 03B · AUTOMATIZACIONES · Asset: servicio-automatizacion.webp
Texto sobre foto, visible siempre: Automatizaciones
Bajada siempre visible: Consultas, pedidos y tareas que pueden resolverse sin intervención manual.
Al hover: Implementamos asistentes y conexiones entre sistemas para recibir información, organizar solicitudes y ejecutar tareas repetitivas.
CTA hover / link: Conocé qué podemos automatizar → URL de vertical Automatizaciones [PENDIENTE].
Interacción
Desktop: overlay oscurece suavemente la fotografía y revela explicación + CTA, transición 180–240 ms; título y bajada nunca desaparecen. En mobile: mostrar título, bajada y un enlace visible sin depender de hover; el clic abre la vertical. Si las páginas interiores no estarán listas, redirigir al contacto con asunto preseleccionado, no a un 404.
04 · EJEMPLOS DE LO QUE PODEMOS RESOLVER — Aplicaciones
Layout
Tres cards fotográficas verticales en una fila desktop; mobile una columna. Textos siempre visibles sobre foto al pie, en blanco sobre degradado oscuro. El hover agrega un párrafo y una acción. Estas cards ejemplifican resultados, no afirman ser clientes o casos realizados.
Título de sección: Ejemplos de lo que podemos resolver
Card 04A · Pedidos y cotizaciones
Sobreimpreso siempre visible: Pedidos y cotizaciones
Promesa visible: Recibí pedidos con la información completa.
Hover: Un asistente puede solicitar productos, cantidades y especificaciones, detectar datos faltantes y registrar cada solicitud para tu equipo.
Acción: Solicitar demostración → #contacto con interés “Pedidos y cotizaciones” (hasta que exista una demo real).
Asset: caso-pedidos.webp.
Card 04B · Portales y aplicaciones
Sobreimpreso siempre visible: Portales y aplicaciones
Promesa visible: Que tus clientes hagan más gestiones online.
Hover: Desarrollamos portales, cotizadores y aplicaciones para que tus clientes puedan hacer pedidos, consultar información o realizar solicitudes desde tu web.
Acción: Consultar un desarrollo → #contacto con interés “Portal o aplicación”.
Asset: caso-portales.webp.
Card 04C · Atención comercial
Sobreimpreso siempre visible: Atención comercial
Promesa visible: Respondé consultas y derivá oportunidades.
Hover: Un asistente responde preguntas frecuentes, recopila información del interesado y deriva las consultas que necesitan la intervención de un vendedor.
Acción: Solicitar demostración → #contacto con interés “Atención comercial”.
Asset: caso-atencion.webp. 
Interacción
Desktop: título y promesa sobre foto sin hover; al cursor/foco, mayor contraste y párrafo descriptivo, acción visible. Mobile: título, promesa y CTA visibles siempre; la explicación breve puede figurar debajo de la foto o revelarse con un botón “Más información”. Todas las cards deben tener alt descriptivo y foco visible.
05 · QUIÉN DESARROLLA + CONTACTO
Layout y fotografía
Desktop: foto a la izquierda, texto a la derecha, CTA debajo; puede integrarse un fondo marfil o banda final. Mobile: foto primero o después del título según rendimiento visual; CTA visible sin desplazamientos grandes.
Asset: gonzalo-devsextension.webp. Encuadre horizontal 4:3, sujeto ligeramente a la izquierda/derecha según layout.
Copy visible
H2: Hablás directamente con quien desarrolla tu solución.
Párrafo: En Devs Extension trabajás con un desarrollador que se involucra desde la primera conversación, entiende qué necesitás resolver y se ocupa de implementarlo.
Párrafo: Estamos en Pilar, Buenos Aires. Podemos reunirnos para conocer tu proyecto y evaluar cómo llevarlo adelante.
Línea de método: Entendemos el problema → Definimos el alcance → Desarrollamos y probamos → Ofrecemos soporte.
Cierre H2: ¿Qué necesitás resolver?
Cierre breve: Contanos qué querés mejorar. Podemos evaluar si necesitás una nueva funcionalidad, una automatización o un desarrollo a medida.
CTA principal: Hablemos de tu proyecto → formulario #contacto
Destacado secundario: ¿Querés saber cómo está funcionando tu web? Solicitá un diagnóstico gratuito de rendimiento, velocidad y accesibilidad de tu sitio.
CTA: Analizá tu web gratis

6. Reglas de desarrollo y control de calidad
Responsive: desktop ≥1024 px; tablet 768–1023 px; mobile <768 px. Verificar 1440, 1024, 768, 390 y 320 px. No cortar texto ni imágenes críticas.
Comportamiento: el hover nunca es el único acceso al contenido; focus y toque equivalentes; las tarjetas de servicios navegan, las de problemas expanden y las de ejemplos muestran CTA contextual.
Visual: no editar palabras dentro de las imágenes; todo copy en HTML accesible, superpuesto mediante CSS. Usar object-position individual y overlay gradual. Evitar fotos que parecen testimonios o instalaciones propias.
Performance: hero optimizado con prioridad, resto lazy; tamaños responsivos; evitar scripts/animaciones pesadas. Validar PageSpeed en mobile y desktop sin prometer una puntuación fija.
Analytics: medir clic de CTA hero, clic de tarjetas de servicios, clic de demo, inicio/envío de formulario y uso del diagnóstico. Registrar origen UTM de campañas locales.
