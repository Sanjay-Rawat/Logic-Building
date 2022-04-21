//https://leetcode.com/problems/pascals-triangle/submissions/
var generate = function(numRows) {
    const output =[[1],[1,1]]
    let count=1
    
    while(count<numRows-1){
        const abc =[1,...getArray(output[count]),1]
        output.push([...abc])
        console.log(output[output.length-1])
        count++;
    }
    return output
    
function getArray(arr){
    temp=[]
    for(let i=0;i<arr.length-1;i++){
        temp.push(arr[i] + arr[i+1])
    }
    return temp
}
    
};

console.log(generate(5))