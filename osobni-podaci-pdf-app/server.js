const express = require('express');
const PDFDocument = require('pdfkit');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function safeText(value) {
  return String(value || '').trim();
}

app.post('/generate-pdf', (req, res) => {
  const podaci = {
    ime: safeText(req.body.ime),
    prezime: safeText(req.body.prezime),
    datumRodenja: safeText(req.body.datumRodenja),
    oib: safeText(req.body.oib),
    email: safeText(req.body.email),
    telefon: safeText(req.body.telefon),
    adresa: safeText(req.body.adresa),
    grad: safeText(req.body.grad),
    napomena: safeText(req.body.napomena)
  };

  if (!podaci.ime || !podaci.prezime || !podaci.email) {
    return res.status(400).send('Ime, prezime i email su obavezni podaci.');
  }

  const fileName = `osobni-podaci-${podaci.ime}-${podaci.prezime}.pdf`
    .replace(/[^a-zA-Z0-9čćžšđČĆŽŠĐ-]/g, '-');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 50, bottom: 50, left: 60, right: 60 }
  });

  doc.pipe(res);

  doc
    .fontSize(22)
    .text('Osobni podaci', { align: 'center' })
    .moveDown(1.5);

  doc
    .fontSize(11)
    .text(`Datum generiranja: ${new Date().toLocaleDateString('hr-HR')}`, { align: 'right' })
    .moveDown(1.5);

  doc
    .fontSize(14)
    .text('Podaci iz forme', { underline: true })
    .moveDown(0.8);

  const rows = [
    ['Ime', podaci.ime],
    ['Prezime', podaci.prezime],
    ['Datum rođenja', podaci.datumRodenja],
    ['OIB', podaci.oib],
    ['Email', podaci.email],
    ['Telefon', podaci.telefon],
    ['Adresa', podaci.adresa],
    ['Grad', podaci.grad],
    ['Napomena', podaci.napomena]
  ];

  rows.forEach(([label, value]) => {
    doc
      .fontSize(12)
      .font('Helvetica-Bold')
      .text(`${label}: `, { continued: true })
      .font('Helvetica')
      .text(value || '-');
    doc.moveDown(0.4);
  });

  doc.moveDown(2);
  doc
    .fontSize(10)
    .fillColor('gray')
    .text('PDF je automatski generiran iz Node.js web aplikacije.', { align: 'center' });

  doc.end();
});

app.listen(PORT, () => {
  console.log(`Aplikacija je pokrenuta: http://localhost:${PORT}`);
});
