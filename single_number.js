//https://leetcode.com/problems/single-number/submissions/
var singleNumber = function(nums) {
    let temp ={}
    nums.forEach(ele=>{
        if(temp[ele]){
            delete temp[ele]
        }else{
            temp[ele]=1
        }
    })
   return Object.keys(temp)[0];
};

const result =singleNumber([2,2,1])
console.log(result);