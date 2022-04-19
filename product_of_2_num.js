/**
 * This will return the product of 2 number using recursion
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} product of first and second number
 */
function productNumberUsingRecursion(x, y) {
    if (Math.abs(x) == 1 || x==0 || y==0) {
        return Math.abs(y);
    }
    return (Math.abs(y) + productNumberUsingRecursion(Math.abs(x) - 1, Math.abs(y))) 
    * (x < 0 ? -1 : 1) // if(x is nagetive , result will multiply with -1)
    * (y < 0 ? -1 : 1) // if(y is nagetive , result will multiply with -1)
}
console.log(productNumberUsingRecursion(111, 9)) //999
console.log(productNumberUsingRecursion(111, -9)) //-999
console.log(productNumberUsingRecursion(-111, 9)) //-999
console.log(productNumberUsingRecursion(-111, -9)) //999
console.log(productNumberUsingRecursion(9, 0)) //0
console.log(productNumberUsingRecursion(0, 9)) //0
console.log(productNumberUsingRecursion(0, 0)) //0
console.log(productNumberUsingRecursion(-1, -4)) //0
