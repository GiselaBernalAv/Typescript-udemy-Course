var s1 = "<a href=''/>";
var userName = "Giselita";
var s2 = "My  \\ name is ".concat(userName); //backwards slash
console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n')); //show the last, si hubiera 2 n muestra la ultima que encuentre
//union type
var sn;
sn = "gisela";
sn = 10; //it compiles perfectly this
var n1 = 20;
var n2 = 3.14;
var s1 = "bla bla bla bla";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
    weekDays[weekDays["Sunday"] = 7] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(n1);
console.log(n2);
console.log(s1);
console.log(weekDays[0], weekDays);
