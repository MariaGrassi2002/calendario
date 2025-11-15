const desafios = [
  "🎨 Día 1 – Tu primera tarjeta navideña: ¡Crea una tarjeta con título, imagen y un mensaje que haga sonreír!",
  "📝 Día 2 – Lista navideña: Haz una lista con tus 5 cosas favoritas de la Navidad.",
  "🏠 Día 3 – Construye tu espacio navideño: Usa header, main y footer para crear tu rinconcito navideño.",
  "🎁 Día 4 – La tabla de regalos perfecta: Diseña una tabla con regalos, destinatarios y categorías.",
  "✨ Día 5 – Formulario de deseos: Crea un formulario donde puedas escribir tu nombre y tu deseo navideño.",
  "🎨 Día 6 – Colores y fuentes mágicas: Agrega color y tipografía a tu tarjeta.",
  "⚡ Día 7 – Centro de atención: Usa Flexbox para centrar tu tarjeta en la página.",
  "🎄 Día 8 – Trío de tarjetas navideñas: Haz tres tarjetas alineadas, cada una con su propio espíritu navideño.",
  "🌟 Día 9 – Galería de magia: Crea una galería de imágenes navideñas que se adapten al tamaño de la pantalla.",
  "📱 Día 10 – La galería que se transforma: Usa media queries para que tu galería cambie según el tamaño de la pantalla.",
  "✍️ Día 11 – Letras que crecen contigo: Usa tipografía fluida con clamp().",
  "💫 Día 12 – Tu tarjeta cobra vida: Agrega una animación suave para que tu tarjeta aparezca con estilo.",
  "✨ Día 13 – Detalles que encantan: Usa pseudo-elementos para agregar adornos navideños.",
  "🎁 Día 14 – Pequeños movimientos: Agrega transiciones y efectos hover en botones o tarjetas.",
  "💌 Día 15 – Mensaje sorpresa: Haz un botón que cambie el mensaje dentro de tu tarjeta.",
  "🕵️‍♀️ Día 16 – Mostrar u ocultar magia: Crea un botón que muestre u oculte un mensaje o imagen.",
  "🍪 Día 17 – Menú desplegable: Haz un menú que se abra al hacer click.",
  "⏱ Día 18 – Contador de clicks: Cada click cuenta… ¿cuántos clicks necesitas para llenar de alegría la tarjeta?",
  "🌙 Día 19 – Modo oscuro navideño: Cambia los colores de la página con un botón.",
  "🖊 Día 20 – Tu nombre, tu mensaje: Que quien visite la página pueda escribir su nombre y recibir un mensaje personalizado.",
  "💫 Día 21 – Tarjeta animada con un click: Haz que al hacer click, tu tarjeta tenga un efecto de animación.",
  "⏳ Día 22 – Cuenta regresiva: Agrega un temporizador dentro de la tarjeta.",
  "🎉 Día 23 – Lluvia de confetti: Crea un pequeño confetti que caiga al hacer click.",
  "🌟 Día 24 – Tarjeta final de Navidad: Combina animaciones, cambios de fondo y un mensaje que sorprenda."
];

// Referencias al DOM
const calendario = document.querySelector(".calendario");
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo-dia");
const descripcion = document.getElementById("descripcion");
const close = document.getElementById("close");

// Crear divs dinámicamente
desafios.forEach((texto, index) => {
  const dia = document.createElement("div");
  dia.classList.add("dia");
  dia.dataset.dia = index + 1;
  dia.textContent = index + 1;
  calendario.appendChild(dia);

  // Click para abrir modal
  dia.addEventListener("click", () => {
    titulo.textContent = `Día ${index + 1}`;
    descripcion.textContent = texto;
    modal.classList.remove("hidden");
  });
});

// Cerrar modal
close.addEventListener("click", () => {
  modal.classList.add("hidden");
});