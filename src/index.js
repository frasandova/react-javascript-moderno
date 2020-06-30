//Operador Ternario
const activo = true;
const mensaje = activo ? 'Activo' : 'Inactivo';
console.log('mensaje', mensaje);

// Operador Ternario sin else
const mensaje2 = !activo && 'Activo';
console.log('mensaje2', mensaje2);