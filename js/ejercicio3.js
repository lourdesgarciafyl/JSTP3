let numerosAleatorios = [];
let total = [];

for(i=1; i<=50; i++){
        let dado1 = Math.round(Math.random() * (6 - 1) + 1);
        let dado2 = Math.round(Math.random() * (6 - 1) + 1);
        let total = dado1 + dado2;
        numerosAleatorios.push(total);
}

let sacarDuplicados = numerosAleatorios.filter((item, index) => numerosAleatorios.indexOf(item) === index);
console.log(sacarDuplicados);


for (i = 0; i < sacarDuplicados.length; i++) {
  let apariciones = 0;
  for (j = 0; j < numerosAleatorios.length; j++) {
    if (sacarDuplicados[i] === numerosAleatorios[j]) {
        apariciones++;
  }
  total[i] = apariciones;
}
}
console.log(total)

/*
document.write(`<table>
<thead>
    <tr>
        <th>Suma de los dados</th>
        <th>Cantidad de apariciones de esa suma</th>
    </tr>
</thead>
<tbody>`);

for(i=0; i < sacarDuplicados.length; i++){
    document.write(
        `<tr>
             <td>${sacarDuplicados[i]}</td>
             <td>${total[i]}</td>
        </tr>`
    )
}

document.write(`
    </tbody>
</table>`);

*/