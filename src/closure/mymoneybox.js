
function moneyBox(){
    let saveCoins= 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(saveCoins);
    }
    
    return countCoins;
}

var a = moneyBox();

a(2);
a(2);


function asd(){
    console.log(a);
    var a='a';
    console.log(a);
}

asd();
