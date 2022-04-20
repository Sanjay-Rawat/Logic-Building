


function factorCombinationWithRecursion(number){
    const result ={}
    function handler(n,temp=50,arr=[]){
        if(temp<=1) return []
        if(n%temp==0){
            result[[...arr,n/temp,temp].toString()]=[...arr,n/temp,temp]
            handler(n/temp,temp-1,[...arr,temp])
            handler(temp,temp-1,[...arr,n/temp])
        }else{
            handler(n,temp-1,[...arr])
        }
    }
    for(let i=2;i<number;i++){
        handler(number,i,[])
    }
    
    return Object.values(result)
}
const result =factorCombinationWithRecursion(16)
console.log(result)