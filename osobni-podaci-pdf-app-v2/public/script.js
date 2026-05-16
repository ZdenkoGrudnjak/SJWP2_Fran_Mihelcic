const form = document.getElementById("personalForm");
const warningBox = document.getElementById("warningBox");

const rules = {
  ime: {
    validate: value => value.trim().length >= 2,
    message: "Ime mora imati najmanje 2 znaka."
  },
  prezime: {
    validate: value => value.trim().length >= 2,
    message: "Prezime mora imati najmanje 2 znaka."
  },
  email: {
    validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: "Unesi ispravan email, npr. ime@email.com."
  },
  telefon: {
    validate: value => /^\+?[0-9\s/-]{6,20}$/.test(value.trim()),
    message: "Telefon smije sadržavati brojeve, razmake, /, - i opcionalno +."
  },
  oib: {
    validate: value => /^\d{11}$/.test(value.trim()),
    message: "OIB mora imati točno 11 znamenki."
  },
  datumRodenja: {
    validate: value => {
      if (!value) return false;
      const selected = new Date(value);
      const today = new Date();
      return !Number.isNaN(selected.getTime()) && selected <= today;
    },
    message: "Odaberi ispravan datum rođenja koji nije u budućnosti."
  },
  adresa: {
    validate: value => value.trim().length >= 3,
    message: "Adresa mora imati najmanje 3 znaka."
  },
  grad: {
    validate: value => value.trim().length >= 2,
    message: "Grad mora imati najmanje 2 znaka."
  }
};

function setFieldState(input, isValid, message = "") {
  const field = input.closest(".field");
  const small = field.querySelector("small");

  field.classList.remove("error", "success");

  if (isValid) {
    field.classList.add("success");
    small.textContent = "";
  } else {
    field.classList.add("error");
    small.textContent = message;
  }
}

function validateForm() {
  const errors = [];

  Object.entries(rules).forEach(([name, rule]) => {
    const input = form.elements[name];
    const isValid = rule.validate(input.value);
    setFieldState(input, isValid, rule.message);

    if (!isValid) {
      errors.push(rule.message);
    }
  });

  if (errors.length > 0) {
    warningBox.innerHTML = `<strong>Provjeri unesene podatke:</strong><br>${errors.map(error => `• ${error}`).join("<br>")}`;
    warningBox.classList.remove("hidden");
  } else {
    warningBox.classList.add("hidden");
    warningBox.innerHTML = "";
  }

  return errors.length === 0;
}

Object.keys(rules).forEach(name => {
  const input = form.elements[name];
  input.addEventListener("input", () => {
    const rule = rules[name];
    setFieldState(input, rule.validate(input.value), rule.message);
  });
});

form.addEventListener("reset", () => {
  setTimeout(() => {
    warningBox.classList.add("hidden");
    warningBox.innerHTML = "";
    document.querySelectorAll(".field").forEach(field => {
      field.classList.remove("error", "success");
      field.querySelector("small").textContent = "";
    });
  }, 0);
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  if (!validateForm()) return;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const result = await response.json();
      warningBox.innerHTML = `<strong>Server je pronašao greške:</strong><br>${result.errors.map(error => `• ${error}`).join("<br>")}`;
      warningBox.classList.remove("hidden");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "osobni-podaci.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    warningBox.textContent = "Došlo je do greške. Provjeri je li server pokrenut.";
    warningBox.classList.remove("hidden");
  }
});
