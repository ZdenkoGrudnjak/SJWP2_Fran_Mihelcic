function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;

  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}