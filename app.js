/* ================================================
   PLAN DE RODAJE — SECUESTRO (8.OMAR)
   App Logic & Data
   ================================================ */

// ============ SHOOTING SCHEDULE DATA ============
const SCHEDULE = [
  {
    date: "2026-04-20",
    sequences: [
      { id: "3.51",   set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "ÀLVAR come con los demás, le encanta. OMAR regresa al campamento, junto al resto." },
      { id: "3.02-A", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "La pick up de los guerrilleros y JOSE llegan con caza." },
      { id: "3.02-B", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "JOSE y otros preparan la caza para cocinarla. ÀLVAR y SIDI juegan al ajedrez." },
      { id: "3.02-C", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "ÀLVAR sigue apartado. JOSE come con el resto, le regalan un transistor." },
      { id: "3.06",   set: "DESIERTO MALI. CAUTIVERIO 2 / ZONA CENTINELA", synopsis: "Hay más vigías. Es el momento del Mghrib, la oración del anochecer. JOSE también reza." }
    ]
  },
  {
    date: "2026-04-21",
    sequences: [
      { id: "3.53", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "ÀLVAR y GUERRILLERO 1 juegan al ajedrez. OMAR se mete en la partida." },
      { id: "3.55", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "JOSE le pide a ÀLVAR que deje ganar a OMAR." },
      { id: "3.57", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "OMAR saca un cuchillo contra ÀLVAR. Llega MOKTHAR y CHAFI para liberarles." },
      { id: "3.70", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "Desmontan el campamento. ÀLVAR y JOSE se despiden de todos excepto de OMAR." }
    ]
  },
  {
    date: "2026-04-22",
    sequences: [
      { id: "2.39", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "MOKTHAR anima a NÚRIA a convertirse al islam para mejorar su situación." },
      { id: "2.42", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "Llegan unos GUERRILLEROS AL QAEDA al campamento. A MOKTHAR no le gusta." },
      { id: "2.43", set: "DESIERTO MALI. CAUTIVERIO 2. TIENDA MOKHAR", synopsis: "LÍDER AL QAEDA presiona a MOKTHAR. OMAR sale reforzado." },
      { id: "2.44", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "Los GUERRILLEROS AL QAEDA se van. MOKTHAR preocupado. OMAR parece retarle." }
    ]
  },
  {
    date: "2026-04-23",
    sequences: [
      { id: "2.37", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "MOKTHAR manda castigar a los guerrilleros. OMAR se enfrenta a él." },
      { id: "2.45", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "MOKTHAR vigila a sus REHENES. Se la llevan a NÚRIA a la fuerza." }
    ]
  },
  {
    date: "2026-04-24",
    sequences: [
      { id: "3.63", set: "DESIERTO MALI. CAUTIVERIO 2. TIENDA ÀLVAR & JOSE", synopsis: "JOSE y ÀLVAR siguen celebrando. OMAR dispara y destroza el transistor." },
      { id: "3.66", set: "DESIERTO MALI. CAUTIVERIO 2. TIENDA ÀLVAR & JOSE", synopsis: "OMAR arrastra a ÀLVAR y JOSE fuera de la tienda." },
      { id: "3.67", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "MOKTHAR les da el teléfono. Ramón les informa que están libres." }
    ]
  },
  {
    date: "2026-04-27",
    sequences: [
      { id: "2.26-C", set: "DESIERTO MALI. CAUTIVERIO 2 / CENTINELA", synopsis: "Las 3 PICK UPS llegan al cautiverio 2." },
      { id: "2.26-D", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "NÚRIA, ÀLVAR y JOSE llegan a la nueva zona. Hay una gran antena." },
      { id: "2.26-A", set: "DESIERTO MALI. TRANSICIÓN IV DE POBLADO A CAUTIVERIO 2", synopsis: "Las tres pick ups siguen su camino." },
      { id: "2.26-B", set: "DESIERTO MALI. TRANSICIÓN V DE POBLADO A CAUTIVERIO 2", synopsis: "Las tres PICK UPS siguen su camino, llegando al campamento 2." },
      { id: "2.33-A", set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "ÀLVAR pasea solo. Observa como JOSE se integra y él se siente un pez fuera del agua." },
      { id: "2.33-B", set: "DESIERTO MALI. CAUTIVERIO 2. ZONA AJEDREZ", synopsis: "ÀLVAR ha ideado un tablero de ajedrez. Invita a SIDI a jugar." },
      { id: "2.34",   set: "DESIERTO MALI. CAUTIVERIO 2", synopsis: "OMAR se fija en NÚRIA. Dice que se puede hacer lo que quieras con el botín de guerra." }
    ]
  },
  {
    date: "2026-04-29",
    sequences: [
      { id: "2.15",    set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "Los GUERRILLEROS votan. Meten a los REHENES en las pick ups. Se van." },
      { id: "2.19-PR", set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "PREVIO – DRON – (Sc 2.15) Los vehículos salen cada uno hacia una dirección distinta." },
      { id: "2.03",    set: "DESIERTO MALI. CAUTIVERIO 1. ZONA WC", synopsis: "NÚRIA se asea. OMAR la vigila. SIDI lo ve todo." }
    ]
  },
  {
    date: "2026-04-30",
    sequences: [
      { id: "1.47-B",  set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "Sacan a NÚRIA de su zulo. También a JOSE y ÀLVAR." },
      { id: "1.50",    set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "SIDI reparte arroz. Ven un dron. MOKTHAR no se altera." },
      { id: "1.50-PR", set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "PREVIO – DRONE – Los SECUESTRADOS alrededor del fuego." },
      { id: "1.51-PR", set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "PREVIO – DRONE – Los SECUESTRADOS alrededor del fuego." },
      { id: "1.37-A",  set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "OMAR dispara a los pies de JOSE para sacarle de su delirio. Se dan cuenta que Núria ha escapado." },
      { id: "1.39",    set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "OMAR trae de vuelta a NÚRIA. MOKTHAR le arranca el crucifijo." }
    ]
  },
  {
    date: "2026-05-01",
    sequences: [
      { id: "2.02",   set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "Los GUERRILLEROS hacen el primer rezo del día. SIDI muestra su fe." },
      { id: "1.46-B", set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "El 4x4 llega al campamento. OMAR y MOKTHAR reciben al TUAREG." },
      { id: "1.38",   set: "DESIERTO MALI. CAUTIVERIO 1. HUÍDA NÚRIA", synopsis: "OMAR y otros GUERRILLEROS dan caza a NÚRIA." }
    ]
  },
  {
    date: "2026-05-04",
    sequences: [
      { id: "1.16", set: "DESIERTO MALI. CAUTIVERIO 1 / TIENDA MOKTHAR", synopsis: "MOKTHAR invita a SIDI a redimir su error. Quiere que espíe a OMAR." },
      { id: "1.49", set: "DESIERTO MALI. CAUTIVERIO 1. ZONA PRUEBA DE VIDA", synopsis: "Parece que los vayan a matar, pero es una prueba de vida. MOKTHAR les deja una llamada." }
    ]
  },
  {
    date: "2026-05-05",
    sequences: [
      { id: "1.13-C", set: "DESIERTO MALI. CAUTIVERIO 1", synopsis: "JOSE, ÀLVAR y NÚRIA llegan a un cautiverio, secuestrados." }
    ]
  },
  {
    date: "2026-05-06",
    sequences: [
      { id: "2.20-D", set: "DESIERTO MALI. POBLADO DESIERTO / PICK UP", synopsis: "Los 3 REHENES son trasladados de campamento. Se unifican las pick ups y siguen." },
      { id: "3.20",   set: "DESIERTO MALI. POBLADO DESIERTO", synopsis: "CHAFI llega a otro poblado. Saluda al jefe. Le esperan algunos GUERRILLEROS." },
      { id: "3.24",   set: "DESIERTO MALI. POBLADO DESIERTO", synopsis: "DRON – Unos hombres (OMAR) salen de la tienda y suben a la pick up. El dron la sigue." }
    ]
  },
  {
    date: "2026-05-11",
    sequences: [
      { id: "1.06-A", set: "CARRETERA ASFALTO NOUADHIBOU. CALZADA / CAMIÓN ONG 1 / PICK UPS GUERRILLEROS", synopsis: "Asaltan a los cooperantes. ÀLVAR acaba herido. Se los llevan." }
    ]
  },
  {
    date: "2026-05-12",
    sequences: [
      { id: "1.07-A1", set: "DESIERTO MAURITANIA. PUENTE SECUESTRO (FAKE) / PICK UPS GUERRILLEROS", synopsis: "ONBOARD – ÀLVAR chilla dolorido encima de la pick up. NÚRIA y JOSE desesperados." },
      { id: "1.11-B",  set: "DESIERTO MALI. SEPARACIÓN REHENES", synopsis: "OMAR separa a los TRES REHENES." },
      { id: "1.07-A2", set: "DESIERTO MAURITANIA. PUENTE SECUESTRO / PICK UPS GUERRILLEROS", synopsis: "PASADA – Las pick ups con los secuestrados siguen camino por el desierto." }
    ]
  },
  {
    date: "2026-05-13",
    sequences: [
      { id: "3.80", set: "DESIERTO MALI. ZONA MUERTE SIDI", synopsis: "MOKTHAR se va. OMAR mata a SIDI." }
    ]
  },
  {
    date: "2026-05-14",
    sequences: [
      { id: "3.29",    set: "DESIERTO MALI. CARRETERA PERSECUCIÓN OMAR / ZONA ASALTO / PICK UP GUERRILLEROS 1", synopsis: "(TBC ONBOARD) – Los GUERRILLEROS ven humo por el retrovisor. Es solo un camión, dicen." },
      { id: "3.34",    set: "DESIERTO MALI. CARRETERA PERSECUCIÓN OMAR / ZONA ASALTO", synopsis: "JAVIER se da cuenta del error: no es Mokthar sinó OMAR. Tienen que marcharse." },
      { id: "3.31",    set: "DESIERTO MALI. CARRETERA PERSECUCIÓN OMAR / ZONA ASALTO", synopsis: "DRON – El operativo es un éxito, paran el vehículo de los guerrilleros." },
      { id: "3.33-PR", set: "DESIERTO MALI. CARRETERA PERSECUCIÓN OMAR / ZONA ASALTO", synopsis: "DRON – Las imágenes aéreas no permiten distinguir a los detenidos." }
    ]
  }
];

// ============ STATE ============
let currentView = 'days';
let currentDayIndex = null;
let currentSeqIndex = null;
let navHistory = [];

// ============ HELPERS ============
const WEEKDAYS_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function parseDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(dateStr) {
  const d = parseDate(dateStr);
  return `${d.getDate()} de ${MONTHS_ES[d.getMonth()]} ${d.getFullYear()}`;
}

function formatDateShort(dateStr) {
  const d = parseDate(dateStr);
  return `${d.getDate()} ${MONTHS_ES[d.getMonth()].substring(0, 3)}`;
}

function getWeekday(dateStr) {
  return WEEKDAYS_ES[parseDate(dateStr).getDay()];
}

function isToday(dateStr) {
  const d = parseDate(dateStr);
  const now = new Date();
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

function isPast(dateStr) {
  const d = parseDate(dateStr);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return d < now;
}

function getCountdown() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const firstDay = parseDate(SCHEDULE[0].date);
  const diff = firstDay - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days > 0) return `En ${days} día${days !== 1 ? 's' : ''}`;
  if (days === 0) return '¡HOY!';
  return 'Rodaje en curso';
}

// ============ STATUS MANAGEMENT ============
const STATUS = { PENDING: 0, WIP: 1, DONE: 2 };
const STATUS_ICONS = ['⬜', '🟡', '✅'];
const STATUS_LABELS = ['Pendiente', 'En trabajo', 'Lista'];

function getStatusKey(seqId) {
  return `pdr_status_${seqId}`;
}

function getSeqStatus(seqId) {
  const stored = localStorage.getItem(getStatusKey(seqId));
  return stored !== null ? parseInt(stored) : STATUS.PENDING;
}

function setSeqStatus(seqId, status) {
  localStorage.setItem(getStatusKey(seqId), status);
}

function getNotesKey(seqId) {
  return `pdr_notes_${seqId}`;
}

function getSeqNotes(seqId) {
  return localStorage.getItem(getNotesKey(seqId)) || '';
}

function setSeqNotes(seqId, notes) {
  localStorage.setItem(getNotesKey(seqId), notes);
}

// Script storage
function getScriptKey(seqId) {
  return `pdr_script_${seqId}`;
}

function getSeqScript(seqId) {
  return localStorage.getItem(getScriptKey(seqId)) || '';
}

function setSeqScript(seqId, script) {
  localStorage.setItem(getScriptKey(seqId), script);
}

// ============ STATS ============
function computeStats() {
  let totalSeqs = 0;
  let doneSeqs = 0;
  
  SCHEDULE.forEach(day => {
    day.sequences.forEach(seq => {
      totalSeqs++;
      if (getSeqStatus(seq.id) === STATUS.DONE) doneSeqs++;
    });
  });
  
  return { totalDays: SCHEDULE.length, totalSeqs, doneSeqs };
}

function getDayStats(dayIndex) {
  const day = SCHEDULE[dayIndex];
  let done = 0;
  day.sequences.forEach(seq => {
    if (getSeqStatus(seq.id) === STATUS.DONE) done++;
  });
  return { total: day.sequences.length, done };
}

// ============ RENDER: DAYS LIST ============
function renderDays() {
  const container = document.getElementById('days-list');
  const stats = computeStats();
  
  // Update stats
  document.getElementById('stat-total-seqs').textContent = stats.totalSeqs;
  document.getElementById('stat-total-days').textContent = stats.totalDays;
  document.getElementById('stat-ready').textContent = stats.doneSeqs;
  document.getElementById('badge-count').textContent = stats.totalDays;
  document.getElementById('countdown-value').textContent = getCountdown();
  
  let html = '';
  
  SCHEDULE.forEach((day, i) => {
    const dayStats = getDayStats(i);
    const progressPct = dayStats.total > 0 ? Math.round((dayStats.done / dayStats.total) * 100) : 0;
    const today = isToday(day.date);
    const past = isPast(day.date);
    
    // Get unique locations for the day
    const locations = [...new Set(day.sequences.map(s => s.set))];
    const mainLocation = locations[0];
    const extraLocs = locations.length > 1 ? ` (+${locations.length - 1} más)` : '';
    
    let classes = 'day-card';
    if (today) classes += ' today';
    else if (past) classes += ' past';
    
    html += `
      <div class="${classes}" onclick="openDay(${i})" role="button" tabindex="0" id="day-card-${i}">
        ${today ? '<span class="day-card-label today-label">HOY</span>' : ''}
        <div class="day-card-top">
          <div class="day-card-date">
            <span class="day-date-weekday">${getWeekday(day.date)}</span>
            <span class="day-date-full">${formatDate(day.date)}</span>
          </div>
          <span class="day-card-seqcount">${dayStats.total} sec</span>
        </div>
        <div class="day-card-location">${mainLocation}${extraLocs}</div>
        <div class="day-card-progress">
          <div class="progress-bar"><div class="progress-fill" style="width:${progressPct}%"></div></div>
          <span class="progress-text">${dayStats.done}/${dayStats.total}</span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ============ RENDER: DAY DETAIL ============
function renderDay(dayIndex) {
  const day = SCHEDULE[dayIndex];
  const dayStats = getDayStats(dayIndex);
  const progressPct = dayStats.total > 0 ? Math.round((dayStats.done / dayStats.total) * 100) : 0;
  
  // Update header
  document.getElementById('header-title').textContent = formatDateShort(day.date).toUpperCase();
  document.getElementById('header-subtitle').textContent = getWeekday(day.date);
  
  // Day header card
  document.getElementById('day-detail-date').textContent = `${getWeekday(day.date)}, ${formatDate(day.date)}`;
  
  const locations = [...new Set(day.sequences.map(s => s.set))];
  document.getElementById('day-detail-location').textContent = locations.join(' · ');
  document.getElementById('day-progress-fill').style.width = progressPct + '%';
  document.getElementById('day-progress-text').textContent = `${dayStats.done} / ${dayStats.total} secuencias`;
  
  // Sequences
  const container = document.getElementById('sequences-list');
  let html = '';
  
  day.sequences.forEach((seq, i) => {
    const status = getSeqStatus(seq.id);
    const hasScript = !!getSeqScript(seq.id);
    
    html += `
      <div class="seq-card ${hasScript ? 'seq-card-has-script' : ''}" onclick="openSequence(${dayIndex}, ${i})" role="button" tabindex="0" id="seq-card-${seq.id}">
        <div class="seq-card-status">${STATUS_ICONS[status]}</div>
        <div class="seq-card-info">
          <div class="seq-card-number">Sec ${seq.id}</div>
          <div class="seq-card-set">${seq.set}</div>
          <div class="seq-card-synopsis">${seq.synopsis}</div>
        </div>
        <div class="seq-card-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ============ RENDER: SEQUENCE DETAIL ============
function renderSequence(dayIndex, seqIndex) {
  const day = SCHEDULE[dayIndex];
  const seq = day.sequences[seqIndex];
  const status = getSeqStatus(seq.id);
  
  // Update header
  document.getElementById('header-title').textContent = `SEC ${seq.id}`;
  document.getElementById('header-subtitle').textContent = formatDateShort(day.date) + ' · ' + getWeekday(day.date);
  
  // Detail card
  document.getElementById('seq-detail-number').textContent = `Sec ${seq.id}`;
  document.getElementById('seq-detail-set').textContent = seq.set;
  document.getElementById('seq-detail-synopsis').textContent = seq.synopsis;
  document.getElementById('seq-status-icon').textContent = STATUS_ICONS[status];
  document.getElementById('seq-status-text').textContent = STATUS_LABELS[status];
  
  // Script content
  const script = getSeqScript(seq.id);
  const scriptContainer = document.getElementById('seq-script-content');
  if (script) {
    scriptContainer.innerHTML = `<div class="script-content-text">${escapeHtml(script)}</div>`;
  } else {
    scriptContainer.innerHTML = `
      <div class="script-empty">
        <span class="script-empty-icon">📄</span>
        <span class="script-empty-text">Guion pendiente de añadir</span>
        <span class="script-empty-hint">Cuando trabajes esta secuencia, la añadiremos aquí</span>
      </div>
    `;
  }
  
  // Notes
  document.getElementById('seq-notes').value = getSeqNotes(seq.id);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============ NAVIGATION ============
function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  
  // Show target
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');
  
  currentView = viewName;
  
  // Update header
  const backBtn = document.getElementById('btn-back');
  const badge = document.getElementById('header-badge');
  
  if (viewName === 'days') {
    backBtn.classList.add('hidden');
    badge.classList.remove('hidden');
    document.getElementById('header-title').textContent = 'SECUESTRO';
    document.getElementById('header-subtitle').textContent = '8.OMAR · Plan de Rodaje';
    
    // Update nav
    document.getElementById('nav-calendar').classList.add('active');
    document.getElementById('nav-all-seqs').classList.remove('active');
    
    renderDays();
  } else {
    backBtn.classList.remove('hidden');
    badge.classList.add('hidden');
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openDay(dayIndex) {
  currentDayIndex = dayIndex;
  navHistory.push('days');
  showView('day');
  renderDay(dayIndex);
}

function openSequence(dayIndex, seqIndex) {
  currentDayIndex = dayIndex;
  currentSeqIndex = seqIndex;
  navHistory.push('day');
  showView('sequence');
  renderSequence(dayIndex, seqIndex);
}

function goBack() {
  const prev = navHistory.pop();
  if (prev === 'day') {
    showView('day');
    renderDay(currentDayIndex);
  } else {
    showView('days');
  }
}

// ============ ALL SEQUENCES VIEW ============
function showAllSequences() {
  // Update nav
  document.getElementById('nav-calendar').classList.remove('active');
  document.getElementById('nav-all-seqs').classList.add('active');
  
  // Group all sequences by numerical order
  const allSeqs = [];
  SCHEDULE.forEach((day, dayIdx) => {
    day.sequences.forEach((seq, seqIdx) => {
      allSeqs.push({ ...seq, dayIndex: dayIdx, seqIndex: seqIdx, date: day.date });
    });
  });
  
  // Sort by sequence ID numerically
  allSeqs.sort((a, b) => {
    const numA = parseFloat(a.id.split('-')[0]);
    const numB = parseFloat(b.id.split('-')[0]);
    if (numA !== numB) return numA - numB;
    return a.id.localeCompare(b.id);
  });
  
  // Group by chapter (first digit)
  const chapters = {};
  allSeqs.forEach(seq => {
    const chapter = seq.id.split('.')[0];
    if (!chapters[chapter]) chapters[chapter] = [];
    chapters[chapter].push(seq);
  });
  
  // Render
  const container = document.getElementById('sequences-list');
  let html = '';
  
  for (const [chapter, seqs] of Object.entries(chapters)) {
    html += `<div class="all-seq-header">Capítulo ${chapter} — ${seqs.length} secuencias</div>`;
    seqs.forEach(seq => {
      const status = getSeqStatus(seq.id);
      const hasScript = !!getSeqScript(seq.id);
      html += `
        <div class="seq-card ${hasScript ? 'seq-card-has-script' : ''}" onclick="openSequence(${seq.dayIndex}, ${seq.seqIndex})" role="button" tabindex="0">
          <div class="seq-card-status">${STATUS_ICONS[status]}</div>
          <div class="seq-card-info">
            <div class="seq-card-number">Sec ${seq.id} <span style="color:var(--text-muted);font-size:0.65rem;font-weight:400">· ${formatDateShort(seq.date)}</span></div>
            <div class="seq-card-set">${seq.set}</div>
            <div class="seq-card-synopsis">${seq.synopsis}</div>
          </div>
          <div class="seq-card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>
      `;
    });
  }
  
  navHistory = ['days'];
  currentView = 'day';
  
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-day').classList.add('active');
  
  document.getElementById('day-header-card').innerHTML = `
    <div class="day-header-date">Todas las Secuencias</div>
    <div class="day-header-meta">
      <span class="day-header-location">${allSeqs.length} secuencias en ${SCHEDULE.length} días de rodaje</span>
    </div>
  `;
  
  container.innerHTML = html;
  
  document.getElementById('btn-back').classList.remove('hidden');
  document.getElementById('header-badge').classList.add('hidden');
  document.getElementById('header-title').textContent = 'SECUENCIAS';
  document.getElementById('header-subtitle').textContent = 'Todas · 8.OMAR';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ STATUS CYCLING ============
function cycleSeqStatus() {
  if (currentDayIndex === null || currentSeqIndex === null) return;
  const seq = SCHEDULE[currentDayIndex].sequences[currentSeqIndex];
  let status = getSeqStatus(seq.id);
  status = (status + 1) % 3;
  setSeqStatus(seq.id, status);
  
  document.getElementById('seq-status-icon').textContent = STATUS_ICONS[status];
  document.getElementById('seq-status-text').textContent = STATUS_LABELS[status];
  
  // Small haptic animation
  const btn = document.getElementById('seq-status-btn');
  btn.style.transform = 'scale(1.1)';
  setTimeout(() => btn.style.transform = '', 200);
}

// ============ NOTES SAVE ============
let notesTimeout = null;
function saveNotes() {
  if (currentDayIndex === null || currentSeqIndex === null) return;
  const seq = SCHEDULE[currentDayIndex].sequences[currentSeqIndex];
  const notes = document.getElementById('seq-notes').value;
  
  clearTimeout(notesTimeout);
  notesTimeout = setTimeout(() => {
    setSeqNotes(seq.id, notes);
  }, 300);
}

// ============ KEYBOARD NAV ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Backspace') {
    if (currentView !== 'days' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      goBack();
    }
  }
});

// ============ SERVICE WORKER ============
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  showView('days');
});
