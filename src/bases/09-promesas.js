import {getHeroesById, getHeroesByOwner} from './bases/08-export';

// const promesa = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         const hero = getHeroesById(3);
//        if (hero !== undefined) {
//            resolve(hero);
//        }else{
//            reject('no se pudo encontar el heroe')
//        }
//     },2000)
// });

// promesa.then((hero) =>{
//     console.log('el heroe es:' ,hero);
// })
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) =>{
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const hero = getHeroesById(id);
           if (hero) {
               resolve(hero);
           }else{
               reject('no se pudo encontar el heroe')
           }
        },2000)
    });
    return promesa;
}

getHeroesByIdAsync(4)
    .then(console.log)
    .catch(console.warn);