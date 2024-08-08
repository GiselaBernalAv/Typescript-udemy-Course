//var hello1= function (name:string):string {
//    return "Hello " + name;
//}
var hello = function (name) {
    return "Hello " + name;
};
var multip = function (num1, num2) {
    return num1 * num2;
};
var myarray = [];
//pushing ten arrow function onto an array by using a loop and then
//we will invoke all those 10 arrow functions using a loop again
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i * i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
console.log(hello("Giselita"));
console.log(multip(8, 5));
