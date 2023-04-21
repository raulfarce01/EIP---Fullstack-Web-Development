var hambur = document.getElementById("hunger")
var boton1 = document.getElementById("signAContract");
var boton2 = document.getElementById("please");
var boton3 = document.getElementById("view1");
var boton4 = document.getElementById("edit1");
var boton5 = document.getElementById("view2");
var boton6 = document.getElementById("edit2");
var boton7 = document.getElementById("view3");
var boton8 = document.getElementById("edit3");

hambur.addEventListener("click", () => {
    alert("I'm hungry");
});

boton1.addEventListener("click", () => {
    alert("I want to sign a new contract :(");
});

boton2.addEventListener("click", () => {
    alert("Please, I hate casinos and my salary is a shit for all the work I have to do");
});

boton3.addEventListener("click", () => {
    alert("I only get 16k € per year :_( and I'm one of the workers in my department who has more knowledge");
});

boton4.addEventListener("click", () => {
    alert("I'm a beast in PHP, HTML, CSS and those kind of things");
});

boton5.addEventListener("click", () => {
    alert("I'm really good in english, I speak and write as a B2 Level");
});

boton6.addEventListener("click", () => {
    alert("If you give me 21k € per year or a little bit more (I have no limit :P) I'm happy");
});

boton7.addEventListener("click", () => {
    alert("I love to learn new things, and I do it really fast ;)");
});

boton8.addEventListener("click", () => {
    alert("Have you ever watched my GitHub? Let's go");
    window.location = "https://raulfarce01.github.io";
});