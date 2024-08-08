interface Product {
    id: number;
    name: string;
    description: string;
    price?: number;
    //ading a function
    display():void;
}

var product1:Product = {
    id:123,
    name:"Iphone13",
    description:"Iphone13 mamalon",
    price:1000,
    //implementing the function
    display():void{
        console.log(this.id+" "+ this.name);
    }
}