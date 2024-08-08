
function register1(subject:string, score:number):string {
    if (score > 0) {
        if (score < 70)
            return subject + " Grade is " + score.toString() + " C";
        else if (score >70 && score <90)
            return subject + " Grade is " + score.toString() + " B";
        else if (score >90)
            return subject + " Grade is " + score.toString() + " A";
        else
            return subject + " Grade invalid";
    }
    
}

function add1(fun:any):void {
    console.log(fun("Physics",95));
}

add1(register1);


