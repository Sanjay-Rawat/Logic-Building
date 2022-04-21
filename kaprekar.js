

function Kuprekar(p,q){
    for(let i=p;i<=q;i++){
        if(checker(i)){
            console.log(i)
        }
    }


function checker(n){
    const square = n*n;
    const str= square+'';
    return parseInt(str.substring(0,str.length/2))+parseInt(str.substring(str.length/2,str.length)) == n;
}
}

Kuprekar(100,300)