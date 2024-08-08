var vaccines:string[]=["Astrazeneca","Pfizer", "Moderna", "Cancino", "j&j"];
vaccines.push("Covaxin");

console.log(vaccines.join(" / "));


for (var z=0; z<vaccines.length;z++ ) {
    console.log(vaccines[z]);
}

var[d,e,f] = vaccines;
console.log(d);
console.log(e);
console.log(f);

vaccines.pop();
console.log(vaccines.join(" / "));