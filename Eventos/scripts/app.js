let botonCalculo = document.getElementById("botonCalculo")
botonCalculo.addEventListener("click", calcularIMC)


function calcularIMC () {
    let peso = document.getElementById("peso").value
    let estatura = document.getElementById("estatura").value

    let IMC = peso / (estatura*estatura)

    alert(IMC)
}