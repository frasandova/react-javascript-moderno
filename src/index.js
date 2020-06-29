// Import, export funciones

const { default: heroes } = require("./data/heroes");

// Import default function
// import heroes from './data/heroes';
// ////////////////////////////////////////////////////////////
// Importación sin default
// import {heroes} from './data/heroes';
// ////////////////////////////////////////////////////////////


console.log( heroes )

const getHeroesById = (id) => {
     return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroesById(5));


const getHeroesByOwner = (owner) => {
    return heroes.filter( heroes => heroes.owner === owner);    
}





console.log(getHeroesByOwner('Marvel'));