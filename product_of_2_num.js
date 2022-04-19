/**
 * This will return the product of 2 number using recursion
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} product of first and second number
 */
function productNumberUsingRecursion(x,y){
    if(x==1){
        return y;
    }
    return y + productNumberUsingRecursion(x-1,y)
}
console.log(productNumberUsingRecursion(20,20)) // 400
console.log(productNumberUsingRecursion(40,20)) // 800
