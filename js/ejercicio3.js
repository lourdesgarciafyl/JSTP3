let numerosAleatorios = [];


for(i=1; i<=50; i++){
        let dado1 = Math.round(Math.random() * (6 - 1) + 1);
        let dado2 = Math.round(Math.random() * (6 - 1) + 1);
        let total = dado1 + dado2;
        numerosAleatorios.push(total);
}

let sacarDuplicados = numerosAleatorios.filter((item, index) => numerosAleatorios.indexOf(item) === index);
console.log(sacarDuplicados);

let total = 0
for (i= 0; i < sacarDuplicados.length; i++){
    let apariciones = 0;
    for(j=0; j < numerosAleatorios.length; j++){
        if(sacarDuplicados(i) === numerosAleatorios(j)){
            apariciones++
        }
        total(i)= apariciones
    }
}
