
let trenutnaKategorija = 'filmovi';


const galleryGrid   = document.getElementById('galleryGrid');
const heroLabel     = document.getElementById('heroLabel');
const heroEyebrow   = document.getElementById('heroEyebrow');
const heroCount     = document.getElementById('heroCount');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const modalPoster   = document.getElementById('modalPoster');
const modalBadge    = document.getElementById('modalBadge');
const modalTitle    = document.getElementById('modalTitle');
const modalMeta     = document.getElementById('modalMeta');
const modalZanr     = document.getElementById('modalZanr');
const modalDesc     = document.getElementById('modalDesc');

const labelMap = { filmovi: 'Filmovi', serije: 'Serije', dokumentarci: 'Dokumentarci' };
const eyebrowMap = { filmovi: 'Filmska Kolekcija', serije: 'Serijska Kolekcija', dokumentarci: 'Dokumentarna Kolekcija' };


function renderGalerija(kategorija) {
  const stavke = mediaData[kategorija];
  heroLabel.textContent = labelMap[kategorija];
  heroEyebrow.textContent = eyebrowMap[kategorija];
  heroCount.textContent = stavke.length + ' naslova';

  galleryGrid.classList.add('fade-out');

  setTimeout(() => {
    galleryGrid.innerHTML = '';

    stavke.forEach((stavka, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${i * 40}ms`;
      card.innerHTML = `
        <div class="card-poster">
          <img class="card-cover" src="${stavka.slika}" alt="${stavka.naziv}" />
          <div class="card-shine"></div>
          <div class="card-overlay"></div>
          <div class="card-rating-badge">★ ${stavka.ocjena}</div>
          <div class="card-title-overlay">${stavka.naziv}</div>
        </div>
      `;
      card.addEventListener('click', () => otvoriModal(stavka, kategorija));
      galleryGrid.appendChild(card);
    });

    galleryGrid.classList.remove('fade-out');
    galleryGrid.classList.add('fade-in');
    setTimeout(() => galleryGrid.classList.remove('fade-in'), 500);
  }, 200);
}


function otvoriModal(stavka, kategorija) {
  modalPoster.style.background = '#080c14';
  modalPoster.innerHTML = `<img class="modal-cover" src="${stavka.slika}" alt="${stavka.naziv}" />`;

  modalBadge.textContent = labelMap[kategorija];
  modalBadge.style.background = `${stavka.boja}44`;
  modalBadge.style.borderColor = `${stavka.boja}66`;

  modalTitle.textContent = stavka.naziv;

  modalDesc.textContent = stavka.opis;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function zatvoriModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}


document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    trenutnaKategorija = btn.dataset.category;
    renderGalerija(trenutnaKategorija);
  });
});

modalClose.addEventListener('click', zatvoriModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) zatvoriModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') zatvoriModal(); });


renderGalerija(trenutnaKategorija);
