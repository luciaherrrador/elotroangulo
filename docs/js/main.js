const r=[{fecha:"2026-01-12",titulo:"Gran Premio de Madrid",descripcion:"Análisis de las 6 carreras de la jornada.",archivo:"2026-01-12.pdf"},{fecha:"2026-01-10",titulo:"Handicap de Invierno",descripcion:"Especial sementales y debutantes.",archivo:"2026-01-12.pdf"},{fecha:"2026-01-05",titulo:"Carrera de Reyes",descripcion:"Pronósticos para la jornada inaugural del año.",archivo:"2026-01-12.pdf"}],o=[{titulo:"Nuevo récord en el Derby",resumen:"Un análisis sobre la victoria histórica de ayer...",fecha:"12 Enero, 2026",imagen:"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=300&q=80",enlace:"https://www.hipodromodelazarzuela.es/"},{titulo:"Preparativos para el Gran Premio",resumen:"Los establos se preparan para la cita más importante del mes.",fecha:"10 Enero, 2026",imagen:"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=300&q=80",enlace:"https://www.france-galop.com/fr/hommes-chevaux/chevaux"}];function i(e){const a={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString("es-ES",a)}function l(){const e=document.getElementById("forecast-grid"),a=document.getElementById("recent-forecasts");e&&(e.innerHTML="",r.sort((t,n)=>new Date(n.fecha)-new Date(t.fecha)),r.forEach(t=>{e.innerHTML+=s(t)})),a&&(a.innerHTML="",r.sort((n,c)=>new Date(c.fecha)-new Date(n.fecha)).slice(0,3).forEach(n=>{a.innerHTML+=s(n)}))}function s(e){return`
        <div class="forecast-card">
            <span class="date">${i(e.fecha)}</span>
            <h3>${e.titulo}</h3>
            <p>${e.descripcion}</p>
            <a href="pdf/${e.archivo}" class="btn-view" target="_blank">Consultar</a>
        </div>
    `}function d(){const e=document.querySelector(".news-list");!e||typeof o>"u"||(e.innerHTML="",o.forEach(a=>{e.innerHTML+=`
            <a href="${a.enlace}" class="news-link" target="_blank">
                <article class="news-item">
                    <img src="${a.imagen}" alt="${a.titulo}">
                    <div class="news-content">
                        <h3>${a.titulo}</h3>
                        <p>${a.resumen}</p>
                        <small>${a.fecha}</small>
                    </div>
                </article>
            </a>
        `}))}document.addEventListener("DOMContentLoaded",()=>{l(),d();const e=document.getElementById("hamburger"),a=document.getElementById("nav-links");e&&a&&e.addEventListener("click",()=>{a.classList.toggle("active"),e.classList.toggle("open")})});console.log(">> Ready :)");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
