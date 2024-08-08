class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo:number;

//constructor
    constructor(firstName:string, lastName:string, 
                frequentFlyerNo:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " " +
         this.frequentFlyerNo);
    }
}
var passenger = new Passenger("Jose", "Solana", 10);

var passenger2 = new Passenger("Juan", "Bernal", 1);

passenger.display();
passenger2.display();

//no le veo nada de magia a esto pero.. ay va
for(let item in passenger) {
    //if (item !== "display"){ otra manera es como sigue;
    if (passenger[item] instanceof Function)
        continue;
    else
        console.log(item + " " + passenger[item]);
    }



