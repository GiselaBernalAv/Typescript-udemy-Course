var Employee = {
    id: 1,
    ename: "Garza",
    salary: 1000
};
for (var item in Employee) {
    console.log(item + " : " + Employee[item]);
}
var id = Employee.id, ename = Employee.ename, salary = Employee.salary;
console.log(id, ename, salary);


