var op;
var button;
var num1 = undefined;
var num2 = 0;
var resultado;
const visor = document.querySelector("#visor");
button = document.querySelector("#button0");
button = document.querySelector("#button1");
button = document.querySelector("#button2");
button = document.querySelector("#button3");
button = document.querySelector("#button4");
button = document.querySelector("#button5");
button = document.querySelector("#button6");
button = document.querySelector("#button7");
button = document.querySelector("#button8");
button = document.querySelector("#button9");
const buttonSuma = document.querySelector("#buttonSuma");
const buttonResta = document.querySelector("#buttonResta");
const buttonMult = document.querySelector("#buttonMult");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonDec = document.querySelector("#buttonDec");
const buttonIgual = document.querySelector("#buttonIgual");

button1.addEventListener('click', function(){
    if(num1===undefined) num1 = 1;
    else num2 = 1;
    visor.innerText=1;
});

button2.addEventListener('click', function(){
    if(num1===undefined) num1 = 2;
    else num2 = 2;
    visor.innerText=2;
});

button3.addEventListener('click', function(){
    if(num1===undefined) num1 = 3;
    else num2 = 3;
    visor.innerText=3;
});

button4.addEventListener('click', function(){
    if(num1===undefined) num1 = 4;
    else num2 = 4;
    visor.innerText=4;
});

button5.addEventListener('click', function(){
    if(num1===undefined) num1 = 5;
    else num2 = 5;
    visor.innerText=5;
});


button6.addEventListener('click', function(){
    if(num1===undefined) num1 = 6;
    else num2 = 6;
    visor.innerText=6;
});


button7.addEventListener('click', function(){
    if(num1===undefined) num1 = 7;
    else num2 = 7;
    visor.innerText=7;
});

button8.addEventListener('click', function(){
    if(num1===undefined) num1 = 8;
    else num2 = 8;
    visor.innerText=8;
});

button9.addEventListener('click', function(){
    if(num1===undefined) num1 = 9;
    else num2 = 9;
    visor.innerText=9;
});

button0.addEventListener('click', function(){
    if(num1===undefined) num1 = 0;
    else num2 = 0;
    visor.innerText=0;
});

buttonSuma.addEventListener('click', function(){
    op = "suma";
    visor.innerText = "+"
});

buttonResta.addEventListener('click', function(){
    op = "resta";
    visor.innerText = "-";
});

buttonDiv.addEventListener('click', function(){
    op = "div";
    visor.innerText = "/"
});

buttonMult.addEventListener('click', function(){
    op = "mult";    
    visor.innerText="*";
});

buttonBorrar.addEventListener('click', function(){
    //body.classList.toggle("dark-mode")
    num1 = undefined;
    num2 = 0;
    visor.innerText = "";
});

buttonIgual.addEventListener('click', function(){
    resultado = operar(num1,num2,op);
    num1 = resultado;
    visor.innerText = resultado;
});

function operar(num1,num2,op){
    if(op==="suma") return num1+num2;
    if(op==="resta") return num1-num2;
    if(op==="div") return num1/num2;    
    if(op==="mult") return num1*num2; 
    console.log("estoy en operar")   ;
}


