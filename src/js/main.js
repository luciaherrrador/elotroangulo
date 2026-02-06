'use strict';

import { listaActuaciones } from './actuaciones.js';
import { listaNoticias } from './noticias.js';
/* --- 2. FUNCIONES DE LÓGICA --- */

// Función para formatear la fecha de YYYY-MM-DD a "12 de enero de 2026"
function formatearFecha(fechaStr) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
}

// Función que dibuja las tarjetas en el grid
function renderizarPronosticos() {
    const contenedor = document.getElementById('forecast-grid');
    const paginador = document.getElementById('actuaciones-paginator');
    const contenedorInicio = document.getElementById('recent-forecasts'); // Para la Landing

    // PAGINADOR POR MESES
    if (contenedor) {
        // Obtener lista de meses únicos (YYYY-MM)
        const mesesUnicos = Array.from(new Set(listaActuaciones.map(a => a.fecha.slice(0,7)))).sort((a, b) => b.localeCompare(a));
        let mesActual = mesesUnicos[0];
        const mesesCorto = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        function renderMes(mes) {
            contenedor.innerHTML = "";
            listaActuaciones
                .filter(a => a.fecha.startsWith(mes))
                .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                .forEach(item => {
                    contenedor.innerHTML += crearCard(item);
                });
            if (paginador) {
                paginador.innerHTML = '';
                mesesUnicos.forEach(m => {
                    const btn = document.createElement('button');
                    const [y, mo] = m.split('-');
                    const mesNombre = mesesCorto[parseInt(mo,10)-1] || mo;
                    btn.textContent = `${mesNombre}/${y}`;
                    btn.className = 'paginator-btn' + (m === mes ? ' active' : '');
                    btn.onclick = () => {
                        mesActual = m;
                        renderMes(mesActual);
                    };
                    paginador.appendChild(btn);
                });
            }
        }
        renderMes(mesActual);
    }

    // Si estamos en la página de INICIO (solo mostrar los 3 últimos)
    if (contenedorInicio) {
        contenedorInicio.innerHTML = "";
        const ultimosTres = listaActuaciones
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
    // Para la página de noticias con paginador
    const grid = document.getElementById('news-grid');
    const paginador = document.getElementById('news-paginator');
    const noticiasPorPagina = 6;
    let paginaActual = 1;

    function mostrarPagina(pagina) {
        if (!grid) return;
        grid.innerHTML = '';
        const inicio = (pagina - 1) * noticiasPorPagina;
        const fin = inicio + noticiasPorPagina;
        const noticiasPagina = listaNoticias.slice(inicio, fin);
        noticiasPagina.forEach(noticia => {
            // Usar miniatura del sitio (thum.io)
            grid.innerHTML += `
                <a href="${noticia.enlace}" class="noticia-card" target="_blank" rel="noopener">
                    <div class="noticia-content">
                        <div class="noticia-title">${noticia.titulo}</div>
                        <div class="noticia-resumen">${noticia.resumen}</div>
                        <div class="noticia-fecha">${noticia.fecha}</div>
                    </div>
                </a>
            `;
        });
        if (paginador) {
            const totalPaginas = Math.ceil(listaNoticias.length / noticiasPorPagina);
            paginador.innerHTML = '';
            for (let i = 1; i <= totalPaginas; i++) {
                const btn = document.createElement('button');
                btn.textContent = i;
                btn.className = 'paginator-btn' + (i === pagina ? ' active' : '');
                btn.onclick = () => {
                    paginaActual = i;
                    mostrarPagina(paginaActual);
                };
                paginador.appendChild(btn);
            }
        }
    }
    if (grid) mostrarPagina(paginaActual);
    // Para la home (listado clásico)
    // Carrusel para la home
    const carouselTrack = document.querySelector('.news-carousel .carousel-track');
    if (carouselTrack && typeof listaNoticias !== 'undefined') {
        carouselTrack.innerHTML = "";
        listaNoticias.forEach(noticia => {
            carouselTrack.innerHTML += `
                <a href="${noticia.enlace}" class="news-link" target="_blank">
                    <article class="news-item">
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
