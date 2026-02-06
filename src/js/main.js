'use strict';

/* --- 1. BASE DE DATOS DE PRONÓSTICOS ---
   Cada vez que tengas un nuevo PDF, simplemente añade un bloque aquí arriba. */
const listaPronosticos = [
    {
        fecha: "2026-01-12",
        titulo: "Gran Premio de Madrid",
        descripcion: "Análisis de las 6 carreras de la jornada.",
        archivo: "2026-01-12.pdf"
    },
    {
        fecha: "2026-01-10",
        titulo: "Handicap de Invierno",
        descripcion: "Especial sementales y debutantes.",
        archivo: "2026-01-12.pdf"
    },
    {
        fecha: "2026-01-05",
        titulo: "Carrera de Reyes",
        descripcion: "Pronósticos para la jornada inaugural del año.",
        archivo: "2026-01-12.pdf"
    }
];

const listaNoticias = [
    {
        titulo: "Nuevo récord en el Derby",
        resumen: "Un análisis sobre la victoria histórica de ayer...",
        fecha: "12 Enero, 2026",
        imagen: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=300&q=80",
        enlace:"https://www.hipodromodelazarzuela.es/"
    },
    {
        titulo: "Preparativos para el Gran Premio",
        resumen: "Los establos se preparan para la cita más importante del mes.",
        fecha: "10 Enero, 2026",
        imagen: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=300&q=80",
        enlace:"https://www.france-galop.com/fr/hommes-chevaux/chevaux"
    },
    {
        titulo: "Entrevista exclusiva: Jockey del año",
        resumen: "Charlamos con el ganador del premio al mejor jockey de 2026 sobre sus retos y triunfos.",
        fecha: "08 Enero, 2026",
        imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
        enlace:"https://www.turfclub.com/entrevista-jockey"
    },
    {
        titulo: "La pista se renueva para 2026",
        resumen: "El hipódromo estrena nuevo césped y tecnología para mejorar la experiencia de los caballos y espectadores.",
        fecha: "05 Enero, 2026",
        imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80",
        enlace:"https://www.hipodromodelazarzuela.es/nueva-pista"
    },
    {
        titulo: "Guía de apuestas para principiantes",
        resumen: "Todo lo que necesitas saber para empezar a apostar en carreras de caballos de forma responsable.",
        fecha: "03 Enero, 2026",
        imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
        enlace:"https://www.turfclub.com/guia-apuestas"
    }
];
/* --- 2. FUNCIONES DE LÓGICA --- */

// Función para formatear la fecha de YYYY-MM-DD a "12 de enero de 2026"
function formatearFecha(fechaStr) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
}

// Función que dibuja las tarjetas en el grid
function renderizarPronosticos() {
    const contenedor = document.getElementById('forecast-grid');
    const contenedorInicio = document.getElementById('recent-forecasts'); // Para la Landing

    // Si estamos en la página de PRONÓSTICOS (grid completo)
    if (contenedor) {
        contenedor.innerHTML = "";
        listaPronosticos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

        listaPronosticos.forEach(item => {
            contenedor.innerHTML += crearCard(item);
        });
    }

    // Si estamos en la página de INICIO (solo mostrar los 3 últimos)
    if (contenedorInicio) {
        contenedorInicio.innerHTML = "";
        const ultimosTres = listaPronosticos
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
            .slice(0, 3);

        ultimosTres.forEach(item => {
            contenedorInicio.innerHTML += crearCard(item);
        });
    }
}

// Plantilla de la tarjeta para evitar repetir código
function crearCard(item) {
    return `
        <div class="forecast-card">
            <span class="date">${formatearFecha(item.fecha)}</span>
            <h3>${item.titulo}</h3>
            <p>${item.descripcion}</p>
            <a href="pdf/${item.archivo}" class="btn-view" target="_blank">Consultar</a>
        </div>
    `;
}

/* --- 3. INICIALIZACIÓN --- */

function renderizarNoticias() {
    // Para la página de noticias
    const grid = document.getElementById('news-grid');
    if (grid) {
        grid.innerHTML = '';
        listaNoticias.forEach(noticia => {
            grid.innerHTML += `
                <a href="${noticia.enlace}" class="noticia-card" target="_blank" rel="noopener">
                    <img src="${noticia.imagen}" alt="${noticia.titulo}" class="noticia-img" />
                    <div class="noticia-content">
                        <div class="noticia-title">${noticia.titulo}</div>
                        <div class="noticia-resumen">${noticia.resumen}</div>
                        <div class="noticia-fecha">${noticia.fecha}</div>
                    </div>
                </a>
            `;
        });
    }
    // Para la home (listado clásico)
    // Carrusel para la home
    const carouselTrack = document.querySelector('.news-carousel .carousel-track');
    if (carouselTrack && typeof listaNoticias !== 'undefined') {
        carouselTrack.innerHTML = "";
        listaNoticias.forEach(noticia => {
            carouselTrack.innerHTML += `
                <a href="${noticia.enlace}" class="news-link" target="_blank">
                    <article class="news-item">
                        <img src="${noticia.imagen}" alt="${noticia.titulo}">
                        <div class="news-content">
                            <h3>${noticia.titulo}</h3>
                            <p>${noticia.resumen}</p>
                            <small>${noticia.fecha}</small>
                        </div>
                    </article>
                </a>
            `;
        });

        // Carrusel funcionalidad
        let currentIndex = 0;
        const items = carouselTrack.querySelectorAll('.news-link');
        const prevBtn = document.querySelector('.news-carousel .carousel-btn.prev');
        const nextBtn = document.querySelector('.news-carousel .carousel-btn.next');
        const visibleCount = 3; // Mostrar siempre 3 noticias

        function updateCarousel() {
            items.forEach((item, idx) => {
                item.style.display = (idx >= currentIndex && idx < currentIndex + visibleCount) ? 'block' : 'none';
            });
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex + visibleCount >= items.length;
        }

        prevBtn.onclick = () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        };
        nextBtn.onclick = () => {
            if (currentIndex + visibleCount < items.length) {
                currentIndex++;
                updateCarousel();
            }
        };
        updateCarousel();
    }
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Renderizado inicial
    renderizarPronosticos();
    renderizarNoticias();

    // Lógica para el menú hamburguesa (adherida al cargar el DOM para ser robusta)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }
});
console.log('>> Ready :)');
