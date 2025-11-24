function rand(){
    return Math.floor(Math.random()*100)+1;
}

let randBroj=rand();
let pokusaji=0;

let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts= document.getElementById("attempts");

function updateAttempts(){
    attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event){
    event.preventDefault(); //ne osvježava stranicu
    let value=parseInt(input.value);
    //console.log(value);
    if(isNaN(value) || value<1 || value>100){
        msg.innerHTML="Unesi broj između 1 i 100";
        msg.style.color="crimson";
        return;
    }

    pokusaji++;
    updateAttempts();

    if(value === randBroj){
        msg.innerHTML="Pogodak, broj je; "+ randBroj;
        msg.style.color= "green";
    }
    else if(value<randBroj){
         msg.innerHTML="Premalo";
        msg.style.color= "orange";
    }
    else{
        msg.innerHTML="Previše";
        msg.style.color= "orange";
    }
}

function newGame(){
randBroj=rand();
pokusaji=0;
input.value="";
msg.innerHTML="Nova igra";
msg.style.color="black";
updateAttempts();
input.focus();


}


