// ── STATE ──
const state = {
  currentPage: 'landing',
  vibeChoice: null,
  selectedWeek: 9,
  currentFormulaIndex: 0,
  wrongAttempts: 0,
  userArrangement: [],
  solutionRevealed: false,
  progress: loadProgress()
};

const audio = new Audio();
audio.loop = true;

const TRACKS = {
  lofi: {
    src: 'vibes/Gustixa full album  Lo-fi Remix.mp3',
    name: 'lo-fi (gustixa)'
  },
  oldsong: {
    src: 'vibes/Michael Learns To Rock (Paint My Love) Greatest Hits [Full Album].mp3',
    name: 'old song (mltr)'
  },
  peterpan: {
    src: 'vibes/Peterpan - Kumpulan Lagu Peterpan Terbaik - Mungkin Nanti, Ku Katakan Dengan Indah [2CE1i-l3xaI].mp3',
    name: 'peterpan'
  }
};

// ── PROGRESS ──
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('kalkulus_progress') || '{}');
  } catch { return {}; }
}

function saveProgress() {
  localStorage.setItem('kalkulus_progress', JSON.stringify(state.progress));
}

function markFormulaComplete(weekNum, formulaId) {
  if (!state.progress[weekNum]) state.progress[weekNum] = { formulas: [] };
  if (!state.progress[weekNum].formulas.includes(formulaId)) {
    state.progress[weekNum].formulas.push(formulaId);
  }
  const week = WEEKS_DATA[weekNum];
  if (state.progress[weekNum].formulas.length >= week.formulas.length) {
    state.progress[weekNum].completed = true;
  }
  saveProgress();
}

function isWeekCompleted(weekNum) {
  return !!(state.progress[weekNum] && state.progress[weekNum].completed);
}

function isFormulaCompleted(weekNum, formulaId) {
  return !!(state.progress[weekNum] && state.progress[weekNum].formulas &&
    state.progress[weekNum].formulas.includes(formulaId));
}

// ── PAGE TRANSITIONS ──
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.classList.remove('visible');
    setTimeout(() => {
      p.classList.remove('active');
    }, 220);
  });

  const next = document.getElementById('page-' + pageId);
  if (!next) return;

  setTimeout(() => {
    next.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.classList.add('visible');
      });
    });
    window.scrollTo(0, 0);
  }, 230);

  state.currentPage = pageId;
}

// ── MUSIC ──
function playTrack(key) {
  if (key === 'none') {
    audio.pause();
    audio.src = '';
    document.getElementById('music-player').classList.remove('active');
    return;
  }
  const track = TRACKS[key];
  if (!track) return;
  audio.src = track.src;
  audio.play().catch(() => {});
  document.querySelector('.music-track-name').textContent = track.name;
  document.getElementById('music-player').classList.add('active');
  document.getElementById('btn-music-toggle').textContent = 'pause';
}

document.getElementById('btn-music-toggle').addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
    document.getElementById('btn-music-toggle').textContent = 'pause';
  } else {
    audio.pause();
    document.getElementById('btn-music-toggle').textContent = 'play';
  }
});

// ── LANDING ──
document.getElementById('btn-start').addEventListener('click', () => {
  showPage('vibes');
});

// ── VIBES ──
document.querySelectorAll('.btn-vibes').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-vibes').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.vibeChoice = btn.dataset.vibe;
    playTrack(state.vibeChoice);
    setTimeout(() => showPage('motivasi'), 300);
  });
});

// ── MOTIVASI ──
function renderWeekTabs() {
  const container = document.getElementById('week-tabs');
  container.innerHTML = '';
  for (let w = 9; w <= 15; w++) {
    const tab = document.createElement('button');
    tab.className = 'week-tab' + (w === state.selectedWeek ? ' selected' : '') +
      (isWeekCompleted(w) ? ' completed' : '');
    tab.textContent = 'Week ' + w;
    tab.dataset.week = w;
    tab.setAttribute('tabindex', '0');
    tab.addEventListener('click', () => {
      state.selectedWeek = +tab.dataset.week;
      renderWeekTabs();
    });
    container.appendChild(tab);
  }
}

document.getElementById('btn-belajar').addEventListener('click', () => {
  showPage('summary');
  renderSummary();
});

renderWeekTabs();

// ── SUMMARY ──
function renderSummary() {
  const week = WEEKS_DATA[state.selectedWeek];
  document.getElementById('summary-week-label').textContent = 'Week ' + state.selectedWeek;
  document.getElementById('summary-week-title').textContent = week.title;

  const content = document.getElementById('summary-content');
  content.innerHTML = week.summary
    .split('\n\n')
    .map(para => para.trim() ? `<p class="summary-para">${para.trim()}</p>` : '')
    .join('');
}

document.getElementById('btn-to-puzzle').addEventListener('click', () => {
  state.currentFormulaIndex = 0;
  showPage('puzzle');
  renderPuzzle();
});

document.getElementById('btn-summary-back').addEventListener('click', () => {
  showPage('motivasi');
  renderWeekTabs();
});

// ── PUZZLE ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderPuzzle() {
  const week = WEEKS_DATA[state.selectedWeek];
  const formula = week.formulas[state.currentFormulaIndex];

  state.userArrangement = [];
  state.wrongAttempts = 0;
  state.solutionRevealed = false;

  // Header
  const total = week.formulas.length;
  const idx = state.currentFormulaIndex + 1;
  document.getElementById('puzzle-progress').textContent = `Rumus ${idx} dari ${total}`;
  document.getElementById('formula-name').textContent = formula.name;
  document.getElementById('formula-label').textContent = `Rumus ${idx}: ${formula.name}`;

  // Progress bar
  document.getElementById('progress-bar-fill').style.width = ((idx - 1) / total * 100) + '%';

  // Reset UI
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('feedback').textContent = '';
  document.getElementById('hint-box').className = 'hint-box';
  document.getElementById('hint-box').textContent = '';
  document.getElementById('after-solve').className = 'after-solve';
  document.getElementById('btn-check').style.display = 'inline-flex';
  document.getElementById('btn-next-formula').style.display = 'none';

  // Drop zone
  renderDropZone();

  // Pool - shuffled
  const poolEl = document.getElementById('pieces-pool');
  poolEl.innerHTML = '';

  // Make sure shuffled differs from correct order (for fun)
  let shuffled;
  do { shuffled = shuffle(formula.pieces); }
  while (shuffled.join() === formula.correctOrder.join() && formula.pieces.length > 1);

  // If already completed, show correct order
  if (isFormulaCompleted(state.selectedWeek, formula.id)) {
    state.userArrangement = [...formula.correctOrder];
    renderDropZone();
    poolEl.innerHTML = '';
    showCorrect(formula);
    return;
  }

  shuffled.forEach((pieceText, i) => {
    poolEl.appendChild(createPiece(pieceText, i, 'pool'));
  });
}

function renderDropZone() {
  const zone = document.getElementById('drop-zone');
  zone.innerHTML = '';

  if (state.userArrangement.length === 0) {
    const ph = document.createElement('span');
    ph.className = 'drop-zone-placeholder';
    ph.textContent = 'ketuk potongan di bawah untuk menyusun rumus...';
    zone.appendChild(ph);
    return;
  }

  state.userArrangement.forEach((pieceText, i) => {
    zone.appendChild(createPiece(pieceText, i, 'zone'));
  });
}

function createPiece(text, index, location) {
  const el = document.createElement('button');
  el.className = 'piece' + (location === 'zone' ? ' in-zone' : '');
  el.innerHTML = text;
  el.setAttribute('tabindex', '0');
  el.dataset.index = index;
  el.dataset.loc = location;

  el.addEventListener('click', () => handlePieceClick(text, index, location));

  // Drag support (desktop only — mobile uses tap/click)
  el.draggable = true;
  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ text, index, location }));
    el.classList.add('dragging');
  });
  el.addEventListener('dragend', () => el.classList.remove('dragging'));

  return el;
}

function handlePieceClick(text, index, location) {
  const formula = WEEKS_DATA[state.selectedWeek].formulas[state.currentFormulaIndex];
  if (isFormulaCompleted(state.selectedWeek, formula.id)) return;

  if (location === 'pool') {
    // Move from pool to zone
    state.userArrangement.push(text);
    // Remove from pool
    const pool = document.getElementById('pieces-pool');
    const pieces = pool.querySelectorAll('.piece');
    // Remove first matching piece
    for (const p of pieces) {
      if (p.innerHTML === text && p.dataset.loc === 'pool') {
        p.remove();
        break;
      }
    }
    renderDropZone();
    resetFeedback();
  } else {
    // Move from zone back to pool
    state.userArrangement.splice(index, 1);
    const pool = document.getElementById('pieces-pool');
    pool.appendChild(createPiece(text, pool.children.length, 'pool'));
    renderDropZone();
    resetFeedback();
  }
}

// Drag and drop on drop zone
const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('drag-over');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  try {
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (data.location === 'pool') {
      handlePieceClick(data.text, data.index, 'pool');
    }
  } catch {}
});

function resetFeedback() {
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('feedback').textContent = '';
}

// ── CHECK ANSWER ──
document.getElementById('btn-check').addEventListener('click', checkAnswer);

function checkAnswer() {
  const formula = WEEKS_DATA[state.selectedWeek].formulas[state.currentFormulaIndex];
  const correct = formula.correctOrder;

  if (state.userArrangement.length === 0) {
    showFeedback('Belum ada potongan yang disusun. Klik potongan di bawah untuk memulai!', 'wrong');
    return;
  }

  if (state.userArrangement.length < correct.length) {
    showFeedback('Masih kurang potongan. Susun semua bagian terlebih dahulu!', 'wrong');
    return;
  }

  const isCorrect = state.userArrangement.join('|') === correct.join('|');

  if (isCorrect) {
    showCorrect(formula);
    markFormulaComplete(state.selectedWeek, formula.id);
    renderWeekTabs();
  } else {
    state.wrongAttempts++;
    const hint = getHint(formula);
    if (hint) {
      document.getElementById('hint-box').textContent = hint;
      document.getElementById('hint-box').className = 'hint-box visible';
    }
    showFeedback('Belum tepat, coba lagi!', 'wrong');
  }
}

function getHint(formula) {
  if (state.wrongAttempts >= 5 && formula.hints[1]) return formula.hints[1];
  if (state.wrongAttempts >= 3 && formula.hints[0]) return formula.hints[0];
  return null;
}

function showFeedback(msg, type) {
  const el = document.getElementById('feedback');
  el.textContent = msg;
  el.className = 'feedback ' + type;
}

function showCorrect(formula) {
  showFeedback('Benar! Rumus tersusun dengan sempurna.', 'correct');
  document.getElementById('formula-display').innerHTML = formula.correctOrder.join(' ');
  document.getElementById('example-question').textContent = formula.example.question;
  document.getElementById('example-solution').innerHTML = formula.example.solution;
  document.getElementById('example-solution').className = 'example-solution';
  document.getElementById('after-solve').className = 'after-solve visible';

  const week = WEEKS_DATA[state.selectedWeek];
  const isLast = state.currentFormulaIndex >= week.formulas.length - 1;
  document.getElementById('btn-check').style.display = 'none';
  document.getElementById('btn-next-formula').style.display = 'inline-flex';
  document.getElementById('btn-next-formula').textContent = isLast
    ? 'Selesai Week ' + state.selectedWeek
    : 'Rumus Berikutnya';

  // Progress bar to this formula
  document.getElementById('progress-bar-fill').style.width =
    ((state.currentFormulaIndex + 1) / week.formulas.length * 100) + '%';
}

// Show/hide solution
document.getElementById('btn-toggle-solution').addEventListener('click', () => {
  const sol = document.getElementById('example-solution');
  const btn = document.getElementById('btn-toggle-solution');
  if (sol.classList.contains('visible')) {
    sol.classList.remove('visible');
    btn.textContent = 'Lihat Jawaban';
  } else {
    sol.classList.add('visible');
    btn.textContent = 'Sembunyikan';
  }
});

// Next formula
document.getElementById('btn-next-formula').addEventListener('click', () => {
  const week = WEEKS_DATA[state.selectedWeek];
  if (state.currentFormulaIndex >= week.formulas.length - 1) {
    showPage('complete');
    renderComplete();
  } else {
    state.currentFormulaIndex++;
    renderPuzzle();
    window.scrollTo(0, 0);
  }
});

// Back to summary
document.getElementById('btn-puzzle-back').addEventListener('click', () => {
  showPage('summary');
  renderSummary();
});

// ── COMPLETE ──
function renderComplete() {
  const week = WEEKS_DATA[state.selectedWeek];
  const count = week.formulas.length;
  document.getElementById('complete-title').textContent =
    'Week ' + state.selectedWeek + ' selesai!';
  document.getElementById('complete-subtitle').textContent =
    'Kamu sudah menguasai ' + count + ' rumus dari topik ' + week.title + '.';

  const nextBtn = document.getElementById('btn-next-week');
  if (state.selectedWeek < 15) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = 'Lanjut ke Week ' + (state.selectedWeek + 1);
  } else {
    nextBtn.style.display = 'none';
  }
}

document.getElementById('btn-next-week').addEventListener('click', () => {
  if (state.selectedWeek < 15) {
    state.selectedWeek++;
    state.currentFormulaIndex = 0;
    showPage('motivasi');
    renderWeekTabs();
  }
});

document.getElementById('btn-back-to-menu').addEventListener('click', () => {
  showPage('motivasi');
  renderWeekTabs();
});

// ── RESET PROGRESS ──
document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm('Reset semua progress?')) {
    state.progress = {};
    saveProgress();
    renderWeekTabs();
  }
});

// ── KEYBOARD SUPPORT ──
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.classList.contains('piece')) {
    document.activeElement.click();
  }
  if (e.key === 'Escape' && state.currentPage === 'puzzle') {
    document.getElementById('btn-puzzle-back').click();
  }
});

// ── INIT ──
function init() {
  showPage('landing');
}

init();
