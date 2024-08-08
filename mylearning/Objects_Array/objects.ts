var student = {
    
    firstName: "Jhon",
    lastName: "Garza",
    score: 90

}

console.log(student.firstName);
console.log(student.score);

for (var item in student) {
   //console.log(item);
   console.log(item + ":  " + student[item])
}

//Destructuring objects

var {firstName, lastName} = student; ///use exactly the names of the properties
console.log(firstName + " " + lastName);