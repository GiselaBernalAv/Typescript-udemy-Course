interface StudentName {
    [index:number]:string;
}

var studentNames:StudentName = ["Jhon", "Boh", "Doug"];

interface StudentScores{
    [index:string]:number;
}

var studentScores : StudentScores={};

studentScores["Jhon"] = 100;
studentScores["Bob"] = 90;

for (var item in studentScores) {
    console.log(item + " : " + studentScores[item]);
}