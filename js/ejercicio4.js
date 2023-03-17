function esParOImpar(numero){
    if(numero % 2 == 0){
        return `es par`
    } else{
        return `es impar`
    }
}
let numeroIngresado = parseInt(prompt(`Ingrese un número entero`));
if(!isNaN(numeroIngresado)){
    document.write(`El número ${numeroIngresado} ${esParOImpar(numeroIngresado)}`)
}else {
    alert(`Ingrese un número válido`)
}



