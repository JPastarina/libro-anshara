/* =====================================================================
   INFORME DEL INCIDENTE · libro interactivo
   ---------------------------------------------------------------------
   1) EDITA AQUÍ ABAJO el contenido (bloque LIBRO).
   2) El motor del libro está más abajo; no hace falta tocarlo.

   Cada "hoja" tiene dos caras:
     frente → página de la DERECHA (se ve antes de pasar la hoja)
     dorso  → página de la IZQUIERDA (se ve después de pasarla)

   Tipos de página:
     portada, guarda, registro, titulo, texto, html, blanca, contraportada

   Marcas dentro de los textos:
     ==texto==   → marcador negro
     !!texto!!   → marcador rojo
     ~~texto~~   → texto rojo de máquina de escribir
     __texto__   → subrayado discontinuo
     ##texto##   → censurado (se convierte en #@o$&)

   Elementos del "contenido" de una página de texto:
     "un párrafo"                         → párrafo normal
     { titulo: "Línea en rojo" }          → línea suelta en rojo
     { espacio: 2 }                       → deja 2 líneas en blanco
     { img: "img/foto.jpg", filas: 8,     → foto pegada (8 líneas de alto)
       ancho: "70%", pie: "Pie de foto" }

   Imágenes: súbelas a una carpeta "img" junto al index.html.
   Una página aguanta unas 26 líneas (~ 1.300 caracteres): si te pasas,
   pasa el resto a la página siguiente.
   ===================================================================== */

const LIBRO = {
  caso: 'RC-09-29-98',

  hojas: [
    /* ── Hoja 1: portada + interior de la tapa ───────────────────── */
    {
      frente: {
        tipo: 'portada',
        agencia: 'Departamento de Policía de Raccoon City',
        unidad: 'Unidad especial de investigación',
        titulo: 'Informe del incidente',
        subtitulo: 'Raccoon City - Septiembre de 1998',
        placa: 'A.C. Peterson · CASO Nº: RC-09-29-98',
        pie: 'Propiedad del Departamento de Policía de Raccoon City',
        insignia: null            // o "img/escudo.png" para usar tu propia imagen
      },
      dorso: { tipo: 'guarda', manchas: 'sangre' }
    },

    /* ── Hoja 2: registro de archivo + título del Preámbulo ──────── */
    {
      frente: {
        tipo: 'registro',
        caso: 'A.C. Peterson · CASO Nº: RC-09-29-98',
        agencia: 'Departamento de Policía de Raccoon City',
        unidad: 'Unidad especial de investigación',
        titulo: 'Registro de archivo',
        campos: [
          ['Tipo de documento', 'Informe de incidente mayor'],
          ['Ubicación', 'Raccoon City, condado de Arklay'],
          ['Fecha del incidente', 'Septiembre de 1998'],
          ['Elaborado por', 'Unidad de Investigaciones Especiales'],
          ['Recuperado por', 'A. C. Peterson (periodista)'],
          ['Estado', 'CERRADO']
        ],
        sello: 'CLASSIFIED',
        manchas: 'suave'
      },
      dorso: {
        tipo: 'titulo',
        archivo: 'ARKLAY FEDERAL ARCHIVE',
        cabecera: ['ARKLAY FEDERAL ARCHIVE', 'CASE FILE RC-09-29-98', 'DOCUMENT 00'],
        docNum: '00',
        titulo: 'Preámbulo',
        meta: [
          ['ARCHIVO DE INVESTIGACIÓN', 'CASO: RC-09-29-98'],
          ['DOCUMENTO Nº: 00', 'AGENTE: R. MÉNDEZ', 'SUPERVISIÓN: UNIDAD ESPECIAL DE INVESTIGACIÓN', 'CUSTODIA: ARCHIVO FEDERAL, ARKLAY'],
          ['ESTADO: ~~CLASIFICADO~~', 'FECHA DEL REGISTRO: 28 NOV 2002', 'REFERENCIA CRUZADA: ARCHIVO RC-00 / PREÁMBULO']
        ],
        sello: 'CLASSIFIED'
      }
    },

    /* ── Hoja 3: texto del Preámbulo + título del Documento 01 ───── */
    {
      frente: {
        tipo: 'texto',
        cabecera: 'DOCUMENT 00',
        contenido: [
          'Escribe aquí el primer párrafo del preámbulo. Este texto es solo un ejemplo: cámbialo por el tuyo directamente en script.js. Cada elemento de la lista "contenido" es un párrafo.',
          'Puedes resaltar con ==marcador negro==, con !!marcador rojo!!, subrayar con __líneas discontinuas__ o censurar con ##palabras tachadas## para que parezcan documentos oficiales.',
          { espacio: 1 },
          { titulo: '[SECCIÓN ELIMINADA POR ORDEN FEDERAL]' },
          '##texto totalmente censurado por la autoridad competente##'
        ]
      },
      dorso: {
        tipo: 'titulo',
        archivo: 'ARKLAY FEDERAL ARCHIVE',
        cabecera: ['ARKLAY FEDERAL ARCHIVE', 'CASE FILE RC-09-29-98', 'DOCUMENT 01'],
        docNum: '01',
        titulo: 'Introducción del autor',
        meta: [
          ['ARCHIVO DE INVESTIGACIÓN', 'CASO: RC-09-29-98'],
          ['DOCUMENTO Nº: 01', 'AUTOR: A. C. PETERSON', 'SUPERVISIÓN: UNIDAD ESPECIAL DE INVESTIGACIÓN', 'CUSTODIA: ARCHIVO FEDERAL, ARKLAY'],
          ['ESTADO: ~~CLASIFICADO~~', 'FECHA DEL REGISTRO: 27 OCT 1999', 'REFERENCIA CRUZADA: ARCHIVO RC-01 / INTRODUCCIÓN']
        ],
        sello: 'CLASSIFIED'
      }
    },

    /* ── Hoja 4: dos páginas de texto con imagen ─────────────────── */
    {
      frente: {
        tipo: 'texto',
        cabecera: 'DOCUMENT 01',
        contenido: [
          'Me resulta muy difícil ponerme a escribir estas líneas; no obstante, considero que es mi responsabilidad informar de todo lo acontecido. Sustituye este párrafo por tu propio texto.',
          'Aquí tienes ==una frase con marcador negro== y también __una palabra subrayada__ como en los archivos originales.',
          { espacio: 1 },
          { img: 'img/foto1.jpg', filas: 9, ancho: '72%', pie: 'Fig. 1 — Pie de foto editable' }
        ]
      },
      dorso: {
        tipo: 'texto',
        cabecera: 'DOCUMENT 01',
        contenido: [
          'Esta es la página de la izquierda cuando el libro está abierto. Puedes mezclar párrafos, líneas rojas y fotos en el orden que quieras.',
          { titulo: '~~NOTA DEL ARCHIVO~~' },
          'Si necesitas más espacio, añade otra hoja nueva copiando uno de estos bloques { frente: {...}, dorso: {...} } dentro de "hojas".'
        ]
      }
    },

    /* ── Hoja final: guarda trasera + contraportada ──────────────── */
    {
      frente: { tipo: 'guarda', manchas: 'suave' },
      dorso: { tipo: 'contraportada', texto: 'Raccoon City · 1969' }
    }
  ]
};


/* =====================================================================
   MOTOR DEL LIBRO  (no hace falta tocar nada de aquí hacia abajo)
   ===================================================================== */
(() => {
  const $ = s => document.querySelector(s);
  const stage = $('#stage'), wrap = $('#bookwrap'), book = $('#book'),
        corners = $('#corners'), btnN = $('#next'), btnP = $('#prev'), hint = $('#hint');
  const H = LIBRO.hojas, N = H.length;
  const RATIO = 0.72;                                   // ancho / alto de página
  const T = matchMedia('(prefers-reduced-motion: reduce)').matches ? 60 : 900;
  document.documentElement.style.setProperty('--t', T + 'ms');

  const trasero = !!(H[N - 1].dorso && H[N - 1].dorso.tipo === 'contraportada');
  let f = 0;            // hojas ya pasadas
  let side = 'r';       // modo móvil: página visible ('r' derecha / 'l' izquierda)
  let busy = false, single = false, pw = 400, uid = 0;

  /* ---------- utilidades de texto ---------- */
  const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const garble = t => [...t].map((c, i) => c === ' ' ? ' ' : '#@o$&%'[(i * 7 + c.charCodeAt(0)) % 6]).join('');
  const marcas = s => esc(s)
    .replace(/==(.+?)==/g, '<mark class="k">$1</mark>')
    .replace(/!!(.+?)!!/g, '<mark class="r">$1</mark>')
    .replace(/~~(.+?)~~/g, '<span class="rojo">$1</span>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/##(.+?)##/g, (_, t) => '<span class="tachado">' + garble(t) + '</span>');

  /* ---------- insignia vectorial (escudo R.P.D.) ---------- */
  const insignia = fill => {
    const id = 'i' + (++uid);
    return `<svg class="insignia" viewBox="0 0 300 330" fill="${fill}" stroke="${fill}" aria-hidden="true">
      <defs>
        <path id="${id}t" d="M82 188 A68 68 0 0 1 218 188"/>
        <path id="${id}b" d="M62 188 A88 88 0 0 0 238 188"/>
      </defs>
      <path d="M70 40 Q150 20 230 40 L236 92 Q150 72 64 92 Z" fill="none" stroke-width="4"/>
      <text x="150" y="70" text-anchor="middle" stroke="none" font-family="Bitter,serif" font-weight="800" font-size="38" letter-spacing="4">R.P.D.</text>
      <path d="M36 118 C28 228 92 282 150 322 C208 282 272 228 264 118" fill="none" stroke-width="4"/>
      <path d="M44 150 C12 140 12 98 44 96 C30 106 34 124 52 126" fill="none" stroke-width="5"/>
      <path d="M256 150 C288 140 288 98 256 96 C270 106 266 124 248 126" fill="none" stroke-width="5"/>
      <circle cx="150" cy="188" r="98" fill="none" stroke-width="3"/>
      <circle cx="150" cy="188" r="91" fill="none" stroke-width="1.5"/>
      <circle cx="150" cy="188" r="62" fill="none" stroke-width="3"/>
      <circle cx="150" cy="188" r="55" fill="none" stroke-width="5" stroke-dasharray="3 3"/>
      <text stroke="none" font-family="Bitter,serif" font-weight="800" font-size="29"><textPath href="#${id}t" startOffset="50%" text-anchor="middle">POLICÍA</textPath></text>
      <text stroke="none" font-family="Bitter,serif" font-weight="800" font-size="25" letter-spacing="1"><textPath href="#${id}b" startOffset="50%" text-anchor="middle">RACCOON CITY</textPath></text>
      <polygon stroke="none" points="150,156 157.6,177.5 180.4,178.1 162.4,192 168.8,213.9 150,201 131.2,213.9 137.6,192 119.6,178.1 142.4,177.5"/>
      <text x="150" y="309" text-anchor="middle" stroke="none" font-family="Bitter,serif" font-weight="800" font-size="22">1969</text>
    </svg>`;
  };

  /* ---------- manchas de sangre / café ---------- */
  const g = (x, y, d, extra = '') => `<span class="gota ${extra}" style="--x:${x}%;--y:${y}%;--d:${d}%"></span>`;
  const manchas = tipo => {
    if (tipo === 'sangre') {
      return `<div class="mancha-gr"></div>
        <span class="aro" style="--x:8%;--y:68%;--s:22%"></span>
        <span class="aro mancha" style="--x:10%;--y:72%;--s:16%"></span>
        <span class="aro" style="--x:-8%;--y:4%;--s:30%"></span>
        ${g(36,33,4)}${g(41,36,2.2)}${g(52,35,3)}${g(60,37,1.6)}${g(70,36,1.2)}
        ${g(18,52,3.8)}${g(46,55,1.4)}${g(33,62,2.4)}${g(64,62,1.8)}${g(78,48,1.4)}
        ${g(22,41,1.2)}${g(85,54,1.3)}${g(55,73,1.5)}${g(12,86,2.2)}${g(92,22,1.2)}`
        + `<span class="gota el" style="--x:55%;--y:43%;--d:12%;--r:-4deg"></span>`
        + `<span class="gota el" style="--x:64%;--y:41%;--d:8%;--r:2deg"></span>`;
    }
    if (tipo === 'suave') {
      return `<span class="aro" style="--x:-6%;--y:84%;--s:26%"></span>
        <span class="aro mancha" style="--x:6%;--y:88%;--s:14%"></span>
        ${g(95,64,1.4)}${g(93,72,1.1)}${g(96,80,1.8)}${g(90,93,1.2)}`;
    }
    return '';
  };

  const sello = txt => txt === false ? '' : `<div class="sello">${esc(txt || 'CLASSIFIED')}</div>`;

  /* ---------- contenido de las páginas de texto ---------- */
  const figura = it => `<figure class="foto" style="--rows:${+it.filas || 8}">
      <div class="marco" style="--ancho:${esc(it.ancho || '70%')};--rot:${esc(it.rot || '-1.2deg')}">
        <img src="${esc(it.img)}" alt="${esc(it.pie || '')}" onerror="this.parentNode.classList.add('vacio')">
      </div>${it.pie ? `<figcaption>${marcas(it.pie)}</figcaption>` : ''}</figure>`;

  const cuerpo = items => (items || []).map(it => {
    if (typeof it === 'string') return `<p>${marcas(it)}</p>`;
    if (it.img) return figura(it);
    if (it.titulo) return `<h3 class="sub">${marcas(it.titulo)}</h3>`;
    if (it.espacio) return `<div class="gap" style="--rows:${+it.espacio}"></div>`;
    return '';
  }).join('');

  /* ---------- tipos de página ---------- */
  const PAG = {
    portada: p => ['f-cover', `
      <div class="c-top">
        <div class="c-agency foil">${marcas(p.agencia)}</div>
        <div class="c-line"></div>
        <div class="c-unit">${marcas(p.unidad)}</div>
      </div>
      ${p.insignia ? `<img class="insignia-img" src="${esc(p.insignia)}" alt="">` : insignia('url(#foil)')}
      <div class="c-mid">
        <div class="c-title foil">${marcas(p.titulo)}</div>
        <div class="c-sub">${marcas(p.subtitulo)}</div>
        <div class="c-plate">${marcas(p.placa)}</div>
      </div>
      <div class="c-foot">${marcas(p.pie)}</div>`],

    contraportada: p => ['f-cover trasera', `${insignia('url(#foil)')}<div class="c-sub foil" style="margin:0">${marcas(p.texto || '')}</div>`],

    guarda: p => ['f-kraft', manchas(p.manchas)],

    registro: p => ['f-kraft', `
      <div class="r-caso">${marcas(p.caso)}</div>
      <h2 class="r-agencia">${marcas(p.agencia)}</h2>
      <div class="r-linea"></div>
      <div class="r-unidad">${marcas(p.unidad)}</div>
      ${insignia('currentColor')}
      <div class="r-reg">
        <div class="r-tit">${marcas(p.titulo)}</div>
        ${(p.campos || []).map(([k, v]) => `<div><b>${marcas(k)}</b>: ${marcas(v)}</div>`).join('')}
      </div>
      ${sello(p.sello)}${manchas(p.manchas)}`],

    titulo: p => ['f-paper', `
      <div class="hdr">${(p.cabecera || []).map(marcas).join('<br>')}</div>
      <div class="t-mid">
        <div class="t-doc">Documento ${esc(p.docNum)}</div>
        <h2 class="t-title">${marcas(p.titulo)}</h2>
      </div>
      <div class="t-meta">${(p.meta || []).map(gr => `<div class="g">${gr.map(l => `<div>${marcas(l)}</div>`).join('')}</div>`).join('')}</div>
      ${sello(p.sello)}`],

    texto: (p, num) => ['f-paper', `
      <div class="hdr">${marcas(p.cabecera || '')}</div>
      <div class="cuerpo">${cuerpo(p.contenido)}</div>
      <div class="pie"><span>CASO: ${esc(LIBRO.caso)}</span><span>${p.sinNumero ? '' : 'página. ' + num}</span></div>`],

    html: p => [p.papel === 'kraft' ? 'f-kraft' : 'f-paper', p.html || ''],

    blanca: () => ['f-paper', '']
  };

  const cara = (def = { tipo: 'blanca' }, lado, i) => {
    const d = document.createElement('div');
    d.className = 'face ' + lado;
    const num = def.pagina ?? (lado === 'front' ? 2 * (i - 1) + 1 : 2 * (i - 1) + 2);
    const [cls, html] = (PAG[def.tipo] || PAG.blanca)(def, num);
    cls.split(' ').forEach(c => d.classList.add(c));
    d.innerHTML = html;
    return d;
  };

  /* ---------- construir hojas ---------- */
  const leaves = H.map((h, i) => {
    const leaf = document.createElement('div');
    leaf.className = 'leaf' + (i === 0 || (trasero && i === N - 1) ? ' hard' : '');
    leaf.style.zIndex = N - i;
    leaf.append(cara(h.frente, 'front', i), cara(h.dorso, 'back', i));
    book.append(leaf);
    return leaf;
  });

  /* ---------- estado y vista ---------- */
  const view = () => single ? side : (f === 0 ? 'r' : (f === N && trasero ? 'l' : 'both'));
  const canNext = () => f < N;
  const canPrev = () => f > 0;

  function render() {
    const v = view();
    wrap.style.setProperty('--shift', (v === 'r' ? -pw / 2 : v === 'l' ? pw / 2 : 0) + 'px');
    corners.style.setProperty('--vw', (v === 'both' ? pw * 2 : pw) + 'px');
    const enPortada = f === 0 && v === 'r';
    const enTrasera = trasero && f === N && v === 'l';
    btnN.classList.toggle('on', canNext() && !enPortada && !enTrasera && (single ? side === 'l' || side === 'r' : true));
    btnP.classList.toggle('on', canPrev() && !enPortada && !enTrasera);
    hint.textContent = enPortada
      ? 'Pulsa la portada para abrir el informe'
      : enTrasera ? 'Pulsa la contraportada para volver atrás'
      : 'Pulsa la esquina inferior para pasar la página' + (single ? ' · o desliza' : ' · o usa ← →');
  }

  function bloquear(ms) {
    busy = true; stage.classList.add('busy');
    setTimeout(() => { busy = false; stage.classList.remove('busy'); render(); }, ms);
  }

  function voltear(i, adelante) {
    const L = leaves[i];
    L.style.zIndex = N + 10;
    L.classList.toggle('flipped', adelante);
    setTimeout(() => { L.style.zIndex = adelante ? i + 1 : N - i; }, T + 30);
  }

  function next() {
    if (busy) return;
    if (single) {
      if (side === 'r') { if (f < N) { voltear(f, true); f++; side = 'l'; } else return; }
      else if (f < N) side = 'r';
      else return;
    } else {
      if (f >= N) return;
      voltear(f, true); f++;
    }
    render(); bloquear(T + 40);
  }

  function prev() {
    if (busy) return;
    if (single) {
      if (side === 'l') { if (f > 0) { f--; voltear(f, false); side = 'r'; } else return; }
      else if (f > 0) side = 'l';
      else return;
    } else {
      if (f <= 0) return;
      f--; voltear(f, false);
    }
    render(); bloquear(T + 40);
  }

  /* ---------- tamaño responsive ---------- */
  function fit() {
    const w = innerWidth, h = innerHeight;
    const wasSingle = single;
    single = w < 720 || w / h < 1.1;
    if (single && !wasSingle) side = f === N ? 'l' : 'r';
    const availH = h - 64, availW = w - 20;
    pw = Math.min(single ? availW : availW / 2, availH * RATIO, 640);
    const root = document.documentElement.style;
    root.setProperty('--pw', pw + 'px');
    root.setProperty('--ph', (pw / RATIO) + 'px');
    wrap.style.transition = 'none';
    render();
    requestAnimationFrame(() => requestAnimationFrame(() => { wrap.style.transition = ''; }));
  }

  /* ---------- eventos ---------- */
  btnN.addEventListener('click', e => { e.stopPropagation(); next(); });
  btnP.addEventListener('click', e => { e.stopPropagation(); prev(); });
  wrap.addEventListener('click', () => {
    const v = view();
    if (f === 0 && v === 'r') next();                 // abrir la portada
    else if (trasero && f === N && v === 'l') prev(); // volver desde la contraportada
  });
  addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') next();
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') prev();
  });
  let x0 = null;
  addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (dx < -50) next(); else if (dx > 50) prev();
  }, { passive: true });
  addEventListener('resize', fit);

  fit();
})();
