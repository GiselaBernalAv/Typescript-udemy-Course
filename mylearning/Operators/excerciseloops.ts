var usernumber = "";
usernumber = prompt("Enter a number");

var x=0;
var y:number= parseInt(usernumber);
if (parseInt(usernumber) !== 0){
    while (x <= y)
    {
        if (x%5 !==0)
        {
            console.log(x);
        }
        x++;
    }
}
