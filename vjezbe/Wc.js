function weightConverter(valNum) {
  document.getElementById("outputPounds").innerHTML = (valNum * 2.2046).toFixed(2);
  document.getElementById("outputOunces").innerHTML = (valNum * 35.274).toFixed(2);
  document.getElementById("outputGrams").innerHTML = (valNum * 1000).toFixed(2);
}
