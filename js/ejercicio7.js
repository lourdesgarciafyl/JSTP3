function multiplosDeUnNumero(numero){
    if(!isNaN(numero)){
    document.write(`<table>
    <thead>
        <tr>
            <th>Tabla de múltiplos del 1 al 10</th>
        </tr>
    </thead>
    <tbody>`);
        for(i=1; i <= 10; i++){
            document.write(`<tr>
            <td>${numero} x ${i}</td>
            <td>${numero * i} </td>
            </tr>`);
        }
        document.write(`</tbody> </table>`)
    } else {
        alert(`Ìngrese un número, por favor`)
    }
}

let numeroAMultiplicar = parseInt(prompt(`Ingresa un número para multiplicar`));
multiplosDeUnNumero(numeroAMultiplicar);