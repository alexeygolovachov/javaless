

// var age=+prompt("vozrast");
// var summa=+prompt("summa");

// if (age) { 
//     if (age>=65) {console.log(summa*0.5);}

// else {console.log(summa);}

// }
// var computeNum = localStorage.getItem("KeycomputerNum");
// computeNum= computeNum ? +computeNum:Math.round(Math.random()*10);
// var UserNum=+prompt("try ?");
// if (UserNum===computeNum) {
//     alert("win");
//     localStorage.removeItem("KeycomputerNum")
// }
// else {
//     alert('losser');
//     localStorage.setItem("KeycomputerNum", computeNum);
// }

var n = +prompt();
var i=1;
var result=1;
for (var i=0; i<=n; i++)
{
    var result=result*(i+1);
    
}
console.log(result);