function fruits(){
    if (true){
        var fruit1 = 'Apple'; //Function scope
        let fruit2 = 'Kiwi'; //Block scope
        const fruit3='Banana'; //Block scope
        console.log( fruit2);
        console.log( fruit3);
    }
    console.log(fruit1);


}
fruits();
//No encuentra fruit 2  (si es que está fuera del bloque) porque 'kiwi' solo es accesible desde el bloque dentro del if.
