function calcularPerimetro(num1, num2){
    if(!isNaN(num1) && !isNaN(num2)){
        return 2*(num1 + num2);
    } else{
        alert(`Ingrese valores numéricos`)
    }
}

let base = parseFloat(prompt(`Ingresa la medida de la base`));
let altura = parseFloat(prompt(`Ingresa la medida de la altura`));
document.write(`El perimetro de la figura es ${calcularPerimetro(base, altura)} cm`);