// ─── FLUX App ────────────────────────────────────────────
let currentCat = 'filmovi';

const gallery    = document.getElementById('gallery');
const heroTitle  = document.getElementById('hero-title');
const heroSub    = document.getElementById('hero-sub');
const overlay    = document.getElementById('overlay');
const closeBtn   = document.getElementById('close-btn');

// Fallback poster (solid gradient as data URI)
const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='750'%3E%3CdefinES%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%237209b7'/%3E%3Cstop offset='50%25' stop-color='%234361ee'/%3E%3Cstop offset='100%25' stop-color='%2300f5d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='750' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='rgba(255,255,255,0.2)' font-family='sans-serif'%3E✦%3C/text%3E%3C/svg%3E";

// Tab switching
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    renderGallery(currentCat);
  });
});

function renderGallery(cat) {
  const items = data[cat];

  // Animate hero
  heroTitle.style.animation = 'none';
  heroTitle.offsetHeight;
  heroTitle.style.animation = 'slideUp 0.45s cubic-bezier(0.4,0,0.2,1) both';
  heroTitle.textContent = categoryNames[cat];
  heroSub.textContent = `Top ${items.length} · IMDb ocjena`;

  gallery.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${i * 0.035}s`;

    card.innerHTML = `
      <img class="card-img" src="${item.poster}" alt="${item.title}" loading="lazy" />
      <span class="card-badge">★ ${item.rating}</span>
      <div class="card-overlay">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span class="card-year">${item.year}</span>
          <span class="card-dot">·</span>
          <span class="card-rating">★ ${item.rating}</span>
        </div>
      </div>
    `;

    // Fallback on broken poster
    card.querySelector('.card-img').addEventListener('error', function () {
      this.src = FALLBACK;
    });

    card.addEventListener('click', () => openModal(item, cat));
    gallery.appendChild(card);
  });
}

function openModal(item, cat) {
  const poster = document.getElementById('m-poster');
  poster.src = item.poster;
  poster.alt = item.title;
  poster.onerror = () => { poster.src = FALLBACK; };

  document.getElementById('m-rating-pill').querySelector('#m-rating').textContent = item.rating;
  document.getElementById('m-cat').textContent = categoryNames[cat];
  document.getElementById('m-title').textContent = item.title;
  document.getElementById('m-year').textContent = item.year;
  document.getElementById('m-dur').textContent = item.duration;
  document.getElementById('m-dir').textContent = item.director;
  document.getElementById('m-desc').textContent = item.desc;
  document.getElementById('ms-rating').textContent = item.rating;
  document.getElementById('ms-year').textContent = item.year;
  document.getElementById('ms-dur').textContent = item.duration;

  const genresEl = document.getElementById('m-genres');
  genresEl.innerHTML = item.genre.map(g => `<span class="genre-tag">${g}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Init
renderGallery(currentCat);
