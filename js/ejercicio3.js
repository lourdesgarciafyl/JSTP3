let numerosAleatorios = [];
let total = 0

for( i = 0; i < 50; i++){
    let dado1 = Math.round(Math.random() * (6 - 1) + 1);
    let dado2 = Math.round(Math.random() * (6 - 1) + 1);
    total = dado1+dado2;
    numerosAleatorios.push(total);
    console.log(numerosAleatorios);
} 

document.write('<h2>Lista de sumas de números aleatorios</h2>');
document.write('<ul>')
for(let indiceNumeros = 0; indiceNumeros < numerosAleatorios.length; indiceNumeros++){
    document.write(`<li>${numerosAleatorios[indiceNumeros] }</li>`);
}
document.write('</ul>');
