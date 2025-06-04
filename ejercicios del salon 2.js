
let pesoString = prompt("Ingresa tu peso en kilogramos:");
let alturaString = prompt("Ingresa tu altura en metros:");

peso = parseFloat(pesoString);
altura = parseFloat(alturaString);

let imc = peso / (altura* altura) ;
let categoria

if (imc < 18.5)
 {
    categoria = "Tienes bajo peso";
}
else if (imc >= 18.5 && imc < 24.9); 
    {
        categoria = "Tienes un peso normal";
    }
else if (imc <= 24.9 && imc < 29.9);
    {
        categoria = "Tienes sobre peso";
    }
else (imc > 30);
    {
        categoria ="Tienes obesidad";
    }
console.log


