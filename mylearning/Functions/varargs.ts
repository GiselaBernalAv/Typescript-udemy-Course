//variable args

var product= function(x:number, y:number, ...nums:number[]) { //number to optional define the type
//var product = function(...nums){
    var result =1;
    for (var i=0; i<nums.length; i++ ) {
        console.log(nums[i]);
        result*=nums[i];
    }
    return result;
}

console.log(product(4,5,6,7));