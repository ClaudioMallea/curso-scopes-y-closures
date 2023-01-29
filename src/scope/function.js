
//todas las funciones tienen su propio alcance, las variables declarads dentro solo pueden accederse dentro de esta funcion, o funciones anidadas.
function greeting(){
    let userName = 'Claudio';
    console.log(userName);
    if(userName==='Claudio'){
        console.log(`Hello ${userName}`);

    }
}

greeting();
console.log("aloha");
console.log(userName); //userName no se puede usar, porque está dentro de una funcion.

