function calculadora(cantidad,categoria) {
    let divTotal = 0
    let DtoEstudiante = 0.2
    let DtoTrainee = 0.5
    let DtoJunior = 0.75
    let precio=200
  
    if (categoria == "estudiante"){
        calculo = cantidad * DtoEstudiante * precio
    }
        if (categoria == "trainee"){
        calculo = cantidad * DtoTrainee * precio
    }
    if (categoria == "junior"){
        calculo = cantidad * DtoJunior * precio  
    }
    return calculo
}

let formulario = document.getElementById ("form_compra")
let cantidad = document.getElementById ("cantidad")
let categoria = document.getElementById ("categoria")
let divTotal = document.getElementById ("Total")
let reseteo = document.getElementById ("borrar")
let boton = document.getElementById ("bt_n")
let divResultado = document.getElementById ("div")

formulario.addEventListener("reset", ()=>{
    divTotal.textContent = "100"
})

//Id(Boton).addEventLitener("click" funciona(){
//    evento.preventDefault();
//    divTotal.textContent = "Total a pagar: $" + calculadora(cantidad.value,categoria.value) })

//formulario.addEventListener("submit", (evento)=>{
    //evento.preventDefault();
    //divTotal.textContent = "Total a pagar: $" + calculadora(cantidad.value,categoria.value) 
//})

boton.addEventListener("click",function(){
    divResultado.textContent="Total a pagar: $"+ calculadora(cantidad.value, categoria.value)
  })
  reseteo.addEventListener("click",function(){
    divResultado.textContent = "Total a pagar:"
  })

    