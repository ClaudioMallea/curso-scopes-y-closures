// variables

var a; //declarando variable a, "guardando espacio en memoria con nombre a"
var b = 'b'; //declaramos y asignamos el valor.
b = 'bb' //estamos reasignando el valor que se tiene.
var a  = 'aa'; //redeclaracion

//Global Scope

//cualquier variable que se encuentre en el documento pasan a ser variables globales se instancian dentro del objeto window.

var fruit = 'apple';  //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


//country queda como local
function countries(){
    country='Chile';
    console.log(country);
}
countries();
console.log(country);