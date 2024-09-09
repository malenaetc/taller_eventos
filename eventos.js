const midiv = document.getElementById("miDiv");

midiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});


const miBoton = document.querySelector("button");

miBoton.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation();