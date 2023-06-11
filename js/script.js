function calcular(cantidad,categoria) {
    let resumen = 0
    let precio = 200
  
    if (categoria == "Estudiante"){
        resumen = cantidad * precio * 0,2 
    }
        if (categoria == "Trainee"){
        resumen = cantidad * precio * 0,5 
    }
    if (categoria == "Junior"){
        resumen = cantidad * precio * 0,85   
    } else {
        resumen = 0
    }

    return resumen
}

let formulario = document.getElementById("form_compra")
let cantidad = document.getElementById("CantidadTicket")
let categoria = document.getElementById("Categoria")
let divresumen = document.getElementById("resumen")

formulario.addEventListener("reset", ()=>{
    divresumen.textContent = ""
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    divresumen.textContent = calcular(cantidad.value,categoria.value) 
})