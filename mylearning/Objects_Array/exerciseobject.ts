var Employee = {
    
    id: 1,
    ename: "Garza",
    salary: 1000

}

for (var item in Employee){
    console.log(item + " : " + Employee[item]);
}

var {id,ename,salary} = Employee;
console.log(id, ename, salary);
