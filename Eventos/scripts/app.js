//EJERCICIO 1 IMC

let botonCalculo = document.getElementById("botonCalculo")
botonCalculo.addEventListener("click", calcularIMC)

function calcularIMC (e) {
    e.preventDefault()
    let peso = document.getElementById("peso").value
    let estatura = document.getElementById("estatura").value

    let IMC = peso / (estatura / 100) **2

    let resultado = document.getElementById("resultado")
    resultado.placeholder = IMC.toFixed(2)
}

//EJERCICIO 2 CONVERSOR DE DIVISA

const tasaDeCambio = 0.056

let convertirMoneda = () => {
    let pesoADolar = document.getElementById("pesoMX").value
    let dolarAPeso = document.getElementById("dolarUS").value

    let tasaConversion = tasaDeCambio[pesoADolar][dolarAPeso]
    let convertido = ()

   /*  if (e.target.id === "pesoMX") {
        document.getElementById("dolarUS").value = (pesoADolar * tasaDeCambio.toFixed(2))
        } else {
            document.getElementById("pesoMX").value = (dolarAPeso * tasaDeCambio.toFixed(2))
        } */
}


document.getElementById("pesoMX").addEventListener('change', convertirMoneda)
document.getElementById("dolarUS").addEventListener('change', convertirMoneda)

convertirMoneda()




