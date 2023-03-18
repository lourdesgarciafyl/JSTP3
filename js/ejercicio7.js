function multiplosDeUnNumero(numero){
    if(!isNaN(numero)){
    document.write(`<table>
    <thead>
        <tr>
            <th>Tabla de multiplicar</th>
        </tr>
    </thead>
    <tbody>`);
        for(i=1; i <= 10; i++){
            document.write(`<td> ${numero} x ${i} es igual a: ${numero * i}</tr>`);
        }
        document.write(`</tbody> </table>`)
    } else {
        alert(`Ìngrese un número, por favor`)
    }
}

let numeroAMultiplicar = parseInt(prompt(`Ingresa un número para multiplicar`));
multiplosDeUnNumero(numeroAMultiplicar);
    /*
    document.write(`<tr>`);
    for(let indiceColumnas = 0; indiceColumnas<columnas; indiceColumnas++){
        document.write(`<td> ${total} </td>`);
        total--;
    }
    document.write(`</tr>`);
}
 document.write(`</table>`); */
