// Template String

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 726129981,
        lat: 14.3213,
        lng: 34.9471263
    }
}

// console.table( persona );

// No hacer esta asignación jamas

// ===============================================
// const persona2 = persona;
// persona2.nombre = 'Peter';

// console.log( persona );
// console.log( persona2 );

// ===============================================

// Utilizar operador spread (spread operator)
const persona2 = { ...persona};
persona2.nombre = 'Peter'

console.log( persona );
console.log( persona2 );


