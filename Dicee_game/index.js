function randNumber(){
    return Math.floor(Math.random()*6)+1;
}
let randNumber1=randNumber();
let randNumber2=randNumber();
let randNumber3=randNumber();
let randNumber4=randNumber();

let randImageSource1="./images/dice" + randNumber1 + ".png";
let randImageSource2="./images/dice" + randNumber2 + ".png";
let randImageSource3="./images/dice" + randNumber3 + ".png";
let randImageSource4="./images/dice" + randNumber4 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randImageSource2);
document.querySelectorAll("img")[2].setAttribute("src", randImageSource3);
document.querySelectorAll("img")[3].setAttribute("src", randImageSource4);
document.querySelectorAll("h2")[0].innerHTML=randNumber1+randNumber2;
document.querySelectorAll("h2")[1].innerHTML=randNumber3+randNumber4;


if((randImageSource1+randImageSource2)>(randImageSource3+randImageSource4)){
    document.querySelector("h1").innerHTML="Igrac 1 pobjedio";
}
else if((randImageSource1+randImageSource2)<(randImageSource3+randImageSource4)){
    document.querySelector("h1").innerHTML="Igrac 2 pobjedio";
}
else{
document.querySelector("h1").innerHTML="Neriješeno!";
}