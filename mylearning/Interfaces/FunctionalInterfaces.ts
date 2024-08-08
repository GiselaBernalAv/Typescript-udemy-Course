interface Add {
    (x:number,y:number):void
}
//interface for a function

interface Sub {
    (x:number,y:number):number
}
//define variables that will use the interface

var add:Add;
var sub:Sub;

add=function (x:number,y:number):void {
    console.log(x+y);
}
sub = function (a:number, b:number):number {
    return a-b
}
//hay un cambio, por ejm en la primera funct se puede dejar sin definir el retorno 
//se quita el void y aunque tambien se ponga, abajo tambien se puede dejar asi
add = function(x:number,y:number):number {
    return x+y;
}

sub = function(a:number,b:number):number{ //si le pongo :string me marcara error
    return a-b
}
