/**
 * This function will return the sum of digit using recursion
 * @param {number} n value of number
 * @returns {number} sum of digits
 */
function sumOfDigitUsingRecursion(n){
    if(n<10){
        return n;
    }
    return  n%10 + sumOfDigitUsingRecursion(parseInt(n/10))
}
console.log(sumOfDigitUsingRecursion(1235)) // 11
console.log(sumOfDigitUsingRecursion(1111)) // 4