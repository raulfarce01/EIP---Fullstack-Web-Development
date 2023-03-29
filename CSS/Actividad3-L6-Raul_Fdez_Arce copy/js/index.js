var hora = document.getElementById("hora");

function horaConstante() {
    var fecha = new Date();

    var now = fecha.toLocaleTimeString("es-ES");

    hora.innerHTML = now;


};

setInterval(horaConstante, 1000);
//setTimeout(horaConstante, 1000);