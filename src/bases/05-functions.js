const saludo = function (nombre){
    return `Hola, ${nombre}`;
}

const saludo2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludo3 = (nombre) => `Hola, ${nombre}`;

const saludo4 = () => `Hola mundo`;

console.log(saludo);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4());


const getUser = () =>({
        uid: 'dasd21',
        username: 'deltax'
    });
console.log(getUser());

/*function getUserActive(nombre){
    return{
        uid: 'dsada123',
        username: nombre
    }
};
const userActive = getUserActive('felipe');
console.log(userActive);*/
const getUserActive = (nombre) => ({
    uid: 'dasda211',
    username: nombre
})
console.log(getUserActive('felipe'));




