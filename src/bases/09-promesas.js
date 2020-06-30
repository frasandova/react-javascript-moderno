import { getHeroesById } from './bases/08-imp-exp';

const getHeroesByIdAsync = (id) => {

   return new Promise( (resolve,  reject) => {

        setTimeout( () => {
            const p1 = getHeroesById(id);
            console.log('resolve',p1);
            if(p1){
                resolve( p1 );
            }else{
                reject( 'No se pudo encontrar el héroe' );
            }            
        }, 2000);
    });
}



getHeroesByIdAsync(1)
// .then(heroe => console.log('Heroe', heroe))
.then(console.log)
.catch(console.warn)