function tipoDeLetras(texto){
    if(isNaN(texto)){
        if(texto == texto.toUpperCase()){
            return `todas las letras son mayusculas`;
        } else if(texto == texto.toLowerCase()){
            return `todo las letras son minúsculas`;
        } else{
            return `hay letras minusculas y mayusculas`;
        }
    } else{
        alert(`Debes ingresar una palabra o frase`)
    }
}

let frase = prompt(`Ingresa una frase`);
document.write(`En la frase "${frase}"  ${tipoDeLetras(frase)}`)

