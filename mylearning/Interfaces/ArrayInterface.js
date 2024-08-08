var studentNames = ["Jhon", "Boh", "Doug"];
var studentScores = {};
studentScores["Jhon"] = 100;
studentScores["Bob"] = 90;
for (var item in studentScores) {
    console.log(item + " : " + studentScores[item]);
}
