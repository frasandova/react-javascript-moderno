// Funciones en JS

// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar1 = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar1('Gojeta'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));


//==============================================
// const getUser = () =>{
//    return{
//        uuid: 'ABC123',
//        username: 'Valores 123'
//    } 
// }
const getUser = () =>(    {
        uuid: 'ABC123',
        username: 'Valores 123'
    } 
)

console.log( getUser());

// Tarea
// 1. transformar a una función de Flecha
// 2. Retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo( nombre ){
    return {
        uid:'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Francisco');
console.log('usuarioActivo', usuarioActivo );


const getUsuarioActivoFlecha = (nombre) => (
    {
        uid:'ABC567',
        username: nombre
    }
);
console.log('usuarioActivoFlecha', getUsuarioActivoFlecha('Francisco') );

