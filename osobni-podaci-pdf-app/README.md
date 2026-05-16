# Node.js web aplikacija za generiranje PDF-a

Ovo je jednostavna web aplikacija u kojoj korisnik unosi osobne podatke u formu, a Node.js server generira PDF dokument pomoću paketa `pdfkit`.

## Pokretanje u Visual Studio Code

1. Otvori mapu projekta u Visual Studio Code.
2. Otvori terminal u VS Code-u.
3. Instaliraj pakete:

```bash
npm install
```

4. Pokreni aplikaciju:

```bash
npm start
```

5. Otvori browser:

```text
http://localhost:3000
```

## Struktura projekta

```text
osobni-podaci-pdf-app/
├── package.json
├── server.js
├── README.md
└── public/
    ├── index.html
    └── style.css
```

## Kako radi

- `index.html` prikazuje formu za unos osobnih podataka.
- Forma šalje podatke na rutu `/generate-pdf` metodom `POST`.
- `server.js` prima podatke i generira PDF pomoću `pdfkit`.
- PDF se automatski preuzima u browseru.
