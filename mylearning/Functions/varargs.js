//variable args
var product = function (x, y) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    //var product = function(...nums){
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(4, 5, 6, 7));
