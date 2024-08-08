interface Exterior {
    color:string;
    numofDoors:number;
}

interface Interior {
    seats:number;
    auto:boolean;
}

interface Car extends Exterior, Interior {
    make:string;
    model:string;
    year:number
}

var carro: Car={
    make:"Honda",
    model:"Civic",
    year: 2020,
    color:"Red",
    numofDoors:5,
    seats:4,
    auto:true
}