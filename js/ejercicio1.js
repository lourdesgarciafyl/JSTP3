let meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`];

document.write('<h2>Lista de meses</h2>')
document.write('<ul>')
for(let indiceMeses=0; indiceMeses < meses.length; indiceMeses++){
    document.write(`<li>${ meses[indiceMeses] }</li>`)
}
document.write('</ul>')
