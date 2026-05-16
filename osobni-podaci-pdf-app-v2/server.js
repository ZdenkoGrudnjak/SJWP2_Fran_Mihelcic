const express = require("express");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\+?[0-9\s/-]{6,20}$/.test(phone);
}

function isValidOib(oib) {
  return /^\d{11}$/.test(oib);
}

function isValidDate(dateValue) {
  if (!dateValue) return false;
  const date = new Date(dateValue);
  const today = new Date();
  return !Number.isNaN(date.getTime()) && date <= today;
}

function cleanText(value) {
  return String(value || "").trim();
}

app.post("/generate-pdf", (req, res) => {
  const data = {
    ime: cleanText(req.body.ime),
    prezime: cleanText(req.body.prezime),
    email: cleanText(req.body.email),
    telefon: cleanText(req.body.telefon),
    oib: cleanText(req.body.oib),
    datumRodenja: cleanText(req.body.datumRodenja),
    adresa: cleanText(req.body.adresa),
    grad: cleanText(req.body.grad),
    napomena: cleanText(req.body.napomena),
  };

  const errors = [];

  if (data.ime.length < 2) errors.push("Ime mora imati najmanje 2 znaka.");
  if (data.prezime.length < 2) errors.push("Prezime mora imati najmanje 2 znaka.");
  if (!isValidEmail(data.email)) errors.push("Email nije u ispravnom formatu.");
  if (!isValidPhone(data.telefon)) errors.push("Telefon nije u ispravnom formatu.");
  if (!isValidOib(data.oib)) errors.push("OIB mora imati točno 11 znamenki.");
  if (!isValidDate(data.datumRodenja)) errors.push("Datum rođenja nije ispravan.");
  if (data.adresa.length < 3) errors.push("Adresa mora imati najmanje 3 znaka.");
  if (data.grad.length < 2) errors.push("Grad mora imati najmanje 2 znaka.");

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
    info: {
      Title: "Osobni podaci",
      Author: "Node.js PDF aplikacija",
    },
  });

  doc.registerFont("Arial", "C:/Windows/Fonts/arial.ttf");
  doc.font("Arial");

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="osobni-podaci.pdf"');

  doc.pipe(res);

  doc
    .fontSize(24)
    .text("Osobni podaci", { align: "center" })
    .moveDown(0.5);

  doc
    .fontSize(10)
    .fillColor("gray")
    .text(`Dokument generiran: ${new Date().toLocaleString("hr-HR")}`, { align: "center" })
    .moveDown(2);

  doc.fillColor("black");

  const startX = 60;
  let y = doc.y;

  function row(label, value) {
    doc
      .fontSize(12)
      .fillColor("#555555")
      .text(label, startX, y, { width: 140 })
      .fillColor("#111111")
      .text(value || "-", startX + 150, y, { width: 330 });
    y += 28;
    doc
      .moveTo(startX, y - 8)
      .lineTo(535, y - 8)
      .strokeColor("#eeeeee")
      .stroke();
  }

  row("Ime", data.ime);
  row("Prezime", data.prezime);
  row("Email", data.email);
  row("Telefon", data.telefon);
  row("OIB", data.oib);
  row("Datum rođenja", data.datumRodenja);
  row("Adresa", data.adresa);
  row("Grad", data.grad);

  if (data.napomena) {
    y += 15;
    doc
      .fontSize(12)
      .fillColor("#555555")
      .text("Napomena", startX, y)
      .moveDown(0.5)
      .fillColor("#111111")
      .text(data.napomena, startX, doc.y, { width: 470, align: "left" });
  }

  doc
    .fontSize(9)
    .fillColor("gray")
    .text("Ovaj PDF je generiran automatski pomoću Node.js aplikacije.", 50, 780, {
      align: "center",
    });

  doc.end();
});

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
