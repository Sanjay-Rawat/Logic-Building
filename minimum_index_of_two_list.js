const l1=["Shogun","Tapioca Express","Burger King","KFC"]
const l2=["KFC","Shogun","Burger King"]
//https://leetcode.com/problems/minimum-index-sum-of-two-lists/submissions/
var handler = function(list1, list2) {
    const temp ={}
    list1.forEach((ele,index)=>{
        const ind = list2.indexOf(ele);
        if(ind!=-1){
            if(temp[ind+index]){
                temp[ind+index].push(ele)
            }else {
                temp[ind+index]=[ele]
            }
        }
    })
 
   return temp[Object.keys(temp)[0]]
};

const result =handler(l1,l2)
console.log(result)