// EJERCICIO 1
/* let numeroIngresado = prompt("Ingrese el número del cuál desea obtener su tabla de multiplicar")

for (let i = 1; i <= 10; i++) {
    let numeroMultiplicado = numeroIngresado * i
    console.log(numeroIngresado + " x " + i + " = " + numeroMultiplicado);   
} */


// EJERCICIO 2
/* let numeroAcumulado = 0
let numeroAAcumular

while (numeroAAcumular != 0) {
    numeroAAcumular = parseInt(prompt("Introduzca el número a acumular"))
    numeroAcumulado = numeroAcumulado + numeroAAcumular
    console.log("La suma de los números ingresados hasta el momento es: " + numeroAcumulado);
} */


// EJERCICIO 3
/* let i = 0
let numeroAAdivinar = 75
let numeroIngresado

while (numeroIngresado != numeroAAdivinar) {
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 100"))
    if (numeroIngresado > numeroAAdivinar) {
        alert("El número ingresado es mayor, vuelva a intentar con otro número")   
    } else if (numeroIngresado < numeroAAdivinar) {
        alert("El número ingresado es menor, vuelva a intentar con otro número")
    }
    i++
}

alert("¡Felicidades! Adivinó el número en " + i + " intentos")*/


// EJERCICIO 4
/* let div = 0
let numeroIngresado = parseInt(prompt("Ingrese el número a evaluar"))

for(let i = 1; i <= numeroIngresado; i++){
   if (numeroIngresado % i == 0) {
     div++;
   }
}

if (div == 2) {
    console.log("El número ingresado es primo");
} else {
    console.log("El número ingresado no es primo");
} */


// EJERCICIO 5
/* let numeroIngresado = parseInt(prompt("Ingrese el número del cuál desea obtener sus divisores"))
let divisores = []

for (let i = 1; i<= numeroIngresado; i++) {
   if (numeroIngresado % i == 0) {
      divisores.push(i)
   }
}

console.log("El número ingresado tiene los siguientes divisores: " + divisores); */


// EJERCICIO 6
/* let arreglo = ["Mandarina, Naranja, Ciruela, Aguacate, Maracuyá, Mamey, Zaramullo, Mango, Fresa, Cayumito"]

for (let i = 0; i<arreglo.length; i++ ){
 console.log(arreglo[i])
} */


// EJERCICIO 7
/* let arreglo = [2,7,48,201,4,307,654,130,90,22]

for (let i = 0; i<arreglo.length; i++) {
 console.log(arreglo[i]*2)
} */


// EJERCICIO 8
/* let familiares =[
    {
        nombre: "Emmanuel",
        apellido: "Cime",
        edad: 25,
        naturaleza: true
    },

    {
        nombre: "Ruben",
        apellido: "Guerrero",
        edad: 60,
        naturaleza: true
    },

    {
        nombre:"Fendi",
        apellido:"Guerrero",
        edad: 2,
        naturaleza: true
    },

    {
        nombre:"Kitrisia",
        apellido:"Cime",
        edad: 20,
        naturaleza: true
    },

    {
        nombre:"Clarita",
        apellido:"Cime",
        edad: 3,
        naturaleza: false
    }
]

for (let i = 0; i<familiares.length; i++) {
    console.log("Mi nombre es " + familiares[i].nombre + ", mi apellido es " + familiares[i].apellido + ", tengo " + familiares[i].edad + " años de edad y " + familiares[i].naturaleza + " me gusta la naturaleza.");
} */


// EJERCICIO 9
/* let arreglo = [23,30,15,12,9,8,98,22,46,501]

for (let i = 0; i<arreglo.length; i++) {
    if (arreglo[i] % 2 != 0){
        console.log(arreglo[i])
    }
} */


// EJERCICIO 10
/* let numeroIngresado = parseInt(prompt("Ingrese el número a sumar"))
let sumaNumerosPar = 0
let sumaNumerosImpar = 0

while(numeroIngresado!=0){
    if (numeroIngresado % 2 == 0) {
        sumaNumerosPar+=numeroIngresado;
    } else {
        sumaNumerosImpar = sumaNumerosImpar + numeroIngresado;
    }

    numeroIngresado = parseInt(prompt("Ingrese otro número a sumar"))
}

console.log("Sumatoria de los números pares: " + sumaNumerosPar);
console.log("Sumatoria de los números impares: " + sumaNumerosImpar); */


// EJERCICIO 11
/* let arreglo = [5,7,34,85,9,59,56,579,445,44]
let numeroMax= 0

for (let i = 0; i <= arreglo.length; i++) {
  if (arreglo[i] > numeroMax) {
     numeroMax = arreglo[i]
  }
}

console.log("El mayor número del arreglo es: " + numeroMax) */


// EJERCICIO 12
let arreglo = [23,30,15,12,9,8,98,22,46,501]
let numeroMin = arreglo[0]

for (let i = 0; i<arreglo.length; i++) {
   if (arreglo[i] < numeroMin) {
    numeroMin = arreglo[i];
   }
}

console.log("El menor número del arreglo es: " + numeroMin)