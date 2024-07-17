const arregloNotas = [
  {
    id: 1,
    titulo: "",
    texto: "",
    realizado: true
  },
  {
    id: 2,
    titulo: "",
    texto: "",
    realizado: false
  }
]

let idGlobal = 3

document.createElement("titulo")
document.createElement("texto")
document.createElement("guardar")

function añadirNota (titulo, texto) {
  let notaNueva = {
    id: idGlobal++,
    titulo: titulo,
    texto: texto,
    realizado: false
  }
  listaNotas.push(notaNueva)
}


let botonGuardar = document.getElementById("guardarNota")
botonGuardar.addEventListener("click", () => {
let titulo = document.getElementById("titulo").value
let texto = document.getElementById("texto").value

añadirNota(titulo,texto)
pintarTarjetas(listaNotas)
})


function pintarTarjetas(arregloNotas) {
  let contenedor = document.getElementById("contenedorTarjetas")
  if (arregloNotas.length !== 0) {
    contenedor.innerHTML = ""
  } else {
    contenedor.innerHTML = "<p>No existen notas para mostrar<p/>"
  }

  for (let i = 0; i < arregloNotas.length; i++) {
    let nota = document.createElement("div")
    nota.className = "card col-lg-3 m-0 p-0 border-primary"
    nota.innerHTML = `
              <div class="card-body">
                <p class="card-text">${arregloNotas[i].id}</p>
                <h5 class="card-title">${arregloNotas[i].titulo}</h5>
                <p class="card-text">${arregloNotas[i].texto}</p>
              </div>`

    container.appendChild(card)    
  }
}










let botonBorrar = document.getElementById("botonBorrar")
    botonBorrar.addEventListener("click",(e) => {
        let titulo = document.getElementById("titulos").value = ""
    })
}



let resetForm = document.getElementById("reset");
  resetForm.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value = "";
    let texto = document.getElementById("exampleFormControlTextarea1").value = "";
  });







 