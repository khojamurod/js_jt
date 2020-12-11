
do{
    var x = +prompt('Son kriting');
    if( x % 2 == 0 && x!=0){
        alert( x + ' Juft son hisoblanadi. Keyingi sonni kriting');
    }else if(x % 2 == 1){
        alert(x + ' Toq son hisoblanadi. Keyingi sonni kriting')
    }else if(x == 0){
        alert('0 soni juftham emas toqham emas')
    }else{
        alert('Bu son emas, iltimos son kiriting')
    }
    
}while(true)