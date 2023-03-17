let ciudad = ``;
let ciudades = [];

do{
    ciudad = prompt(`Ingrese el nombre de una ciudad`);
    ciudades.push(ciudad);
} while(confirm("¿Desea seguir agregando nombres de ciudades?"));

// Mostrar el arreglo generado
document.write('<h2>Lista de ciudades</h2>');
document.write('<ul>');
for(let indiceCiudades=0; indiceCiudades < ciudades.length; indiceCiudades++){
    document.write(`<li>${ ciudades[indiceCiudades] }</li>`)
}
document.write('</ul>');

// Mostrar la longitud del arreglo
document.write(`<h2>Mostramos la longitud del arreglo</h2>`)
document.write(ciudades.length);

//Mostrar los ítems de las posiciones primera, tercera y última
document.write(`<h2>Mostramos los elementos de la primera, tercera y última posición</h2>`);

document.write('<ul>');
document.write(`<li> ${ciudades[0]} </li>`);
document.write(`<li> ${ciudades[2]} </li>`);
document.write(`<li> ${ciudades[ciudades.length-1]} </li>`);
document.write('</ul>');

//Añade en última posición la ciudad de París
ciudades.push(`París`);

document.write('<h2>Agregamos París al final del array Ciudades</h2>');
document.write('<ul>');
for(let indiceCiudades=0; indiceCiudades < ciudades.length; indiceCiudades++){
    document.write(`<li>${ ciudades[indiceCiudades] }</li>`);
}
document.write('</ul>');

//Escribe por pantalla el elemento que ocupa la segunda posición
document.write(`<h2>Mostramos el elemento de la posición 2</h2>`)

document.write(ciudades[1]);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = `Barcelona`;

document.write('<h2>Sustituímos el elemento de la posición 2 por Barcelona</h2>');
document.write('<ul>');
for(let indiceCiudades=0; indiceCiudades < ciudades.length; indiceCiudades++){
    document.write(`<li>${ ciudades[indiceCiudades] }</li>`);
}
document.write('</ul>');
