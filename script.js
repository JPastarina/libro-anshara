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
     { img: "foto.jpg", filas: 8,     → foto pegada (8 líneas de alto)
       ancho: "70%", pie: "Pie de foto" }

   Imágenes: súbelas al repositorio, al mismo nivel que index.html (no hace falta ninguna carpeta).
   Luego escribe su nombre tal cual, por ejemplo: "foto1.jpg".
   Una página aguanta unas 26 líneas (~ 1.300 caracteres): si te pasas,
   pasa el resto a la página siguiente.
   ===================================================================== */

const LIBRO = {
  caso: 'RC-09-29-98',
  escudo: 'escudo-portada.png',   // imagen por defecto para las páginas que no indican otra

  hojas: [
    /* ── Hoja 1: portada + interior de la tapa ───────────────────── */
    {
      frente: {
        tipo: 'portada',
        agencia: 'Jikogisei Kaizokudan',
        unidad: 'Unidad especial de investigación',
        titulo: 'Informe del operativo',
        subtitulo: 'Grand Line - 1542',
        placa: 'Anshara · CASO Nº: AZ-25',
        pie: 'Propiedad de Jikogisei Kaizokudan',
        insignia: 'escudo-portada.png'   // ← imagen de la portada
      },
      dorso: { tipo: 'guarda' }
    },

    /* ── Hoja 2: registro de archivo + título del Preámbulo ──────── */
    {
      frente: {
        tipo: 'registro',
        caso: 'Anshara · CASO Nº: AZ-25',
        agencia: 'Jikogisei Kaizokudan',
        unidad: 'Unidad especial de investigación',
        insignia: 'emblema-registro.png',   // ← imagen de la página del registro
        titulo: 'Registro de archivo',
        campos: [
          ['Tipo de documento', 'Informe biográfico'],
          ['Ubicación', 'Grand Line'],
          ['Fecha del incidente', '1520 a 1542'],
          ['Elaborado por', 'Unidad de Investigaciones Especiales'],
          ['Recuperado por', 'Z. Anshara'],
          ['Estado', 'ABIERTO']
        ],
        sello: 'CLASSIFIED'
      },
      dorso: {
        tipo: 'titulo',
        archivo: 'JIKOGISEI ARCHIVE',
        cabecera: ['JIKOGISEI ARCHIVE', 'CASE FILE AZ-25', 'DOCUMENT 00'],
        docNum: '00',
        titulo: 'Niñez',
        meta: [
          ['ARCHIVO DE INVESTIGACIÓN', 'CASO: AZ-25'],
          ['DOCUMENTO Nº: 00', 'AGENTE: NOIR', 'SUPERVISIÓN: UNIDAD ESPECIAL DE INVESTIGACIÓN', 'CUSTODIA: ARCHIVO CLASIFICADO, KAGEBOSHI'],
          ['ESTADO: ~~CLASIFICADO~~', 'FECHA DEL REGISTRO: 1526', 'REFERENCIA CRUZADA: ARCHIVO AZ-00 / NIÑEZ']
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
          'El sujeto !!Ziusudra Anshara!!, hija de ##Ziusudra ZJSHS## y ##Ziusudra ASDHJ## presenta un estado psicofísico óptimo durante su infancia y niñez.',
          'El agente instructor Noir ha obtenido la custodia de Anshara en el año 1528 del Kaienreki, cuando el sujeto tenía 3 años.',
          'Z. Anshara demuestra capacidades sociales altas gracias a Noir. A sus 8 años logró crear un nuevo sistema de apuestas de comida entre sus compañeros del colegio, y no fue descubierta hasta los 10 años por el propio colegio. Noir indica que era consciente de esto, añadiendo que parecía llegar a casa con más dinero que con el que se iba.',
          'Hace tratos con varios de sus compañeros, tanto con juguetes como con comida. Vuelve a vender aquello que ha comprado o cambiado por algo de mayor valor, ==tiene potencial como comerciante==.',
          'Cuando tenía 12 años era infame por su gusto por el dinero, los niños que querían conseguir algo siempre se dirigían hacia ella aún cuando eran mayores. Sabe hacer contactos',
          'Ha establecido una aamistad con un sujeto masculino llamado Enki y otro sujeto fememino llamado Ishtar. Se hizo la verificación de antecedentes correspondiente, tanto ellos como sus familias son normales. No existe peligro para Z. Anshara',
          { espacio: 1 },
          { titulo: '[SECCIÓN ELIMINADA]' },
          '##texto totalmente censurado por la autoridad competente##'
        ]
      },
      dorso: {
        tipo: 'titulo',
        archivo: 'JIKOGISEI ARCHIVE',
        cabecera: ['JIKOGISEI ARCHIVE', 'CASE FILE AZ-25', 'DOCUMENT 01'],
        docNum: '01',
        titulo: 'Adolescencia',
        meta: [
          ['ARCHIVO DE INVESTIGACIÓN', 'CASO: AZ-25'],
          ['DOCUMENTO Nº: 01', 'AGENTE: NOIR', 'SUPERVISIÓN: UNIDAD ESPECIAL DE INVESTIGACIÓN', 'CUSTODIA: ARCHIVO CLASIFICADO, KAGEBOSHI'],
          ['ESTADO: ~~CLASIFICADO~~', 'FECHA DEL REGISTRO: 1539', 'REFERENCIA CRUZADA: ARCHIVO AZ-01 / ADOLESCENCIA']
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
          { img: 'foto1.jpg', filas: 9, ancho: '72%', pie: 'Fig. 1 — Pie de foto editable' }
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
      frente: { tipo: 'guarda' },
      dorso: { tipo: 'contraportada', texto: 'Raccoon City · 1969', insignia: 'escudo-portada.png' }
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

  /* ---------- escudo (imagen editable) ---------- */
  const emblema = src => {
    const ruta = src || LIBRO.escudo;
    // si no la encuentra, prueba también dentro de la carpeta img/ (o fuera de ella)
    const alt = ruta.startsWith('img/') ? ruta.slice(4) : 'img/' + ruta;
    return `<img class="insignia" src="${esc(ruta)}" alt="Escudo R.P.D." onerror="if(!this.dataset.r){this.dataset.r=1;this.src='${esc(alt)}'}else{this.classList.add('vacio')}">`;
  };

  /* ---------- sello ---------- */
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
      ${emblema(p.insignia)}
      <div class="c-mid">
        <div class="c-title foil">${marcas(p.titulo)}</div>
        <div class="c-sub">${marcas(p.subtitulo)}</div>
        <div class="c-plate">${marcas(p.placa)}</div>
      </div>
      <div class="c-foot">${marcas(p.pie)}</div>`],

    contraportada: p => ['f-cover trasera', `${emblema(p.insignia)}<div class="c-sub foil" style="margin:0">${marcas(p.texto || '')}</div>`],

    guarda: () => ['f-kraft', ''],

    registro: p => ['f-kraft', `
      <div class="r-caso">${marcas(p.caso)}</div>
      <h2 class="r-agencia">${marcas(p.agencia)}</h2>
      <div class="r-linea"></div>
      <div class="r-unidad">${marcas(p.unidad)}</div>
      ${emblema(p.insignia)}
      <div class="r-reg">
        <div class="r-tit">${marcas(p.titulo)}</div>
        ${(p.campos || []).map(([k, v]) => `<div><b>${marcas(k)}</b>: ${marcas(v)}</div>`).join('')}
      </div>
      ${sello(p.sello)}`],

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

  /* ---------- color de la esquina según la página que se ve al doblarla ---------- */
  const REGLAS = 'repeating-linear-gradient(to bottom,transparent 0,transparent calc(1.1em - 1px),rgba(88,108,128,.38) calc(1.1em - 1px),rgba(88,108,128,.38) 1.1em)';
  const TONOS = {
    papel: { fa: '#fbfcf8', fb: '#d3d6cd', us: '#a3a69e', ub: '#e5e7e1', rl: REGLAS },
    kraft: { fa: '#e8d3c6', fb: '#bd9d8f', us: '#98796c', ub: '#d2b7a8' },
    tapa:  { fa: '#a24747', fb: '#6b2525', us: '#451616', ub: '#7D2C2C' }
  };
  const tono = d => {
    if (!d) return TONOS.tapa;
    if (d.tipo === 'portada' || d.tipo === 'contraportada') return TONOS.tapa;
    if (d.tipo === 'guarda' || d.tipo === 'registro' || (d.tipo === 'html' && d.papel === 'kraft')) return TONOS.kraft;
    return TONOS.papel;
  };
  const pintar = (btn, flap, debajo) => {
    const st = btn.style;
    st.setProperty('--fa', flap.fa); st.setProperty('--fb', flap.fb);
    st.setProperty('--rl', flap.rl || 'linear-gradient(transparent,transparent)');
    st.setProperty('--us', debajo.us); st.setProperty('--ub', debajo.ub);
  };
  function colorEsquinas() {
    // siguiente: el doblez enseña el dorso de la hoja que se pasa; debajo queda el frente de la siguiente
    if (H[f]) pintar(btnN, tono(H[f].dorso), tono(H[f + 1] && H[f + 1].frente));
    // anterior: el doblez enseña el frente de la hoja que vuelve; debajo queda el dorso de la anterior
    if (H[f - 1]) pintar(btnP, tono(H[f - 1].frente), tono(H[f - 2] && H[f - 2].dorso));
  }

  function render() {
    colorEsquinas();
    const v = view();
    wrap.style.setProperty('--shift', (v === 'r' ? -pw / 2 : v === 'l' ? pw / 2 : 0) + 'px');
    corners.style.setProperty('--vw', (v === 'both' ? pw * 2 : pw) + 'px');
    const enPortada = f === 0 && v === 'r';
    const enTrasera = trasero && f === N && v === 'l';
    const sinPrev = f === 1 && (!single || side === 'l');                    // la izquierda es el interior de la tapa
    const sinNext = trasero && f === N - 1 && (!single || side === 'r');      // lo siguiente es la contraportada
    btnN.classList.toggle('on', canNext() && !enPortada && !enTrasera && !sinNext);
    btnP.classList.toggle('on', canPrev() && !enPortada && !enTrasera && !sinPrev);
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
  const caraIni = leaves[0].querySelector('.face.back');            // interior de la tapa (izquierda)
  const caraFin = leaves[N - 1].querySelector('.face.front');       // última guarda (derecha)
  [leaves[0].querySelector('.face.front'), caraIni, caraFin].forEach(x => x.classList.add('clic'));
  if (trasero) leaves[N - 1].querySelector('.face.back').classList.add('clic');

  wrap.addEventListener('click', e => {
    const v = view();
    if (f === 0 && v === 'r') return next();                        // abrir la portada
    if (trasero && f === N && v === 'l') return prev();             // volver desde la contraportada
    const cara = e.target.closest && e.target.closest('.face');
    if (cara === caraIni && f === 1 && (!single || side === 'l')) prev();                       // cerrar el libro
    else if (trasero && cara === caraFin && f === N - 1 && (!single || side === 'r')) next();   // ir a la contraportada
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
