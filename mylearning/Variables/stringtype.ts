var s1:string = "<a href=''/>";
var userName:string="Giselita";
var s2:string = `My  \\ name is ${userName}`; //backwards slash
console.log(s2);

console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n')); //show the last, si hubiera 2 n muestra la ultima que encuentre

//union type
var sn: string | number;
sn = "gisela";
sn=10; //it compiles perfectly this

var n1:number=20;
var n2:number=3.14;

var s1:string="bla bla bla bla";

enum weekDays{
    Monday=1,
    Tuesday=2,
    Wednesday=3,
    Thursday=4,
    Friday=5,
    Saturday=6,
    Sunday=7
}

console.log(n1);
console.log(n2);
console.log(s1);
console.log(weekDays[0],weekDays);