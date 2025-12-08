function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let answer;

    

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Molim te unesi odgovarajuće brojeve";
        return;
    }

    switch (operation) {
        case "dodaj":
            answer = num1 + num2;
            break;
        case "oduzmi":
            answer = num1 - num2;
            break;
        case "množi":
            answer = num1 * num2;
            break;
        case "podjeli":
            if (num2 === 0) {
                answer = "Ne može se dijeliti s nulom";
            } else {
                answer = num1 / num2;
            }
            break;
        default:
            answer = "Nepoznata operacija";
    }

    document.getElementById("result").innerText = "Rezultat: " + answer;
}

function clearEverything() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}