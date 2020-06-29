// Template String


const nombre = 'Francisco'
const apellido = 'Sandoval';
const nombreCompleto = `Buenos días ${nombre} ${apellido}`;
// const nombreCompleto = `Buenos días 
// ${nombre} 
// ${apellido}
// ${1 + 1}
// `;

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto ${getSaludo(nombreCompleto)} `);
