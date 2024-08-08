//function hello1(name:string):string {
//    return "Hello " + name;
//}
//converting hello1 function in anonymous function
var hello1 = function (name) {
    return "Hello " + name;
};
//once done this, we can pass  this function as callback function for the eventhandler
//or assign it to one variable
function add(num1, num2) {
    return num1 + num2;
}
//function display(id:number,name:string,role?:string) {
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    // if (role != undefined)
    console.log("id" + id + ", Name" + name + " , role: " + role);
    // else
    // console.log("id: " + id + ", Name" +name + " , role: NA");
}
//console.log(hello1("Gisela"));
console.log(hello1("Gisela"));
console.log(add(20, 24));
display(1, "Gisela");
//aqui estoy pasando una funcion como parametro
function calc(fun) {
    console.log(fun(10, 20));
}
//instead of passing a function as a parameter we are going to return
//a function back, asi quedaría
function calcc() {
    //console.log(fun(10,20));
    function substract(num1, num2) {
        return num1 - num2;
    }
    return substract; //se retorna la misma funcion
}
calc(add);
var sub = calcc();
console.log(sub(20, 5)); //this is how to return a function
console.log(calcc()(20, 5));
