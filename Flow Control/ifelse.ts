var x:number = 10;
var y:number = 20;
var z:number = 30;

if(x>y && x>z){
    console.log("X is greater");
}else if(y>x && y>z){
    console.log("Y is greater");
}else if(z>x && z>y){
    console.log("Z is greater");
}else{
    console.log("Numbers are equal");
}