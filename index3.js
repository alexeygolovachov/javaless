var x=0;
var x1=0;/*peremennye vuvoda*/
var x2=0;
var D;

var a=+prompt("a");
var b=+prompt("b");
var c=+prompt("c");
console.log(a);
console.log(b);
console.log(c);

D=b*b-4*a*c;
console.log("D",D);
// Solution1
// console.log(D**0.5);
// x=(D>0)? (x1=((-b-D**0.5)/2*a), x2=(-b+D**0.5)/2*a): x=-b/2*a;
if (D>0) {
    x1=(-b-D**0.5)/(2*a);
    x2=(-b+D**0.5)/(2*a);
    console.log("x1,x2",x1,x2);
    
    }
    else if (D==0) {
        x=-b/(2*a);
        console.log("x",x);
    } 
    else if (D<0) {console.log("there is no rational results")}

// Solution2
var result12 = (D>=0) ? console.log("x1,x2", x1=(-b-D**0.5)/(2*a),x2=(-b+D**0.5)/(2*a)):console.log("there is no rational results");

