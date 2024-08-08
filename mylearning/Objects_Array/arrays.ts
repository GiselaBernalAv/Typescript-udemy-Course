var courses:any=["Angular", "React", "ES6", "JMS"];
courses.push("Spring Security");
courses.push(20);

for (var i=0 ; i< courses.length; i++) {
    //console.log(item);
    console.log(courses[i]);
 }

// De-structuring arrays
var x= courses[0];
var y= courses[1];

var[a,b,c] = courses;
console.log(a);
console.log(b);
console.log(c);

//methods

var levels:number[]=[20,30,40,50,32,1,50,140,200];
console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.slice(3)); //Creates a new another array and only fetches from index 3 onwards
console.log(levels.toString());
levels.splice(2,3,88,90); //Removes index 2, 3 places, and inserts 88 in index 2 and 3.
console.log(levels.toString());
levels.push(11,21,31);
console.log(levels.toString());
levels.pop();
console.log(levels.toString()); //only removes the last index, bueno al reves, elimina
//el ultimo que se metio, PEPS


