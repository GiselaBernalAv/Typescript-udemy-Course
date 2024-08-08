var x = 10;
var y = 20;
var z = 30;

if (x>y && x>z){
    console.log(" x is greater than y " );
} else if(y>x && y>z){
    console.log(" y is greater" );
} else if(z>x && z>y){
    console.log(" z is greater " );
}else {
    console.log("numbers are equal");
}

switch(x) {
    case 10:
        console.log("x es 10");
        break;
    case 20:
    console.log("x es 20");
    break;
    case 30:
        console.log("x es 30");
        break;
    case 40:
    case 50:
        console.log("x es >39");
        break;
    default:
        console.log("Default");
}


