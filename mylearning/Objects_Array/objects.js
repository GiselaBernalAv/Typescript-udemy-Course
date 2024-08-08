var student = {
    firstName: "Jhon",
    lastName: "Garza",
    score: 90
};
console.log(student.firstName);
console.log(student.score);
for (var item in student) {
    //console.log(item);
    console.log(item + ":  " + student[item]);
}
//Destructuring objects
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName + " " + lastName);
