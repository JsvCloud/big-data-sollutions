//var has global scope
//let and const has block scope
// const is one who is once declare never be changed.
console.log("*************var*************")
function bio()
{
    var fname = "mohit";
    console.log(fname)
        if(true)
        {
        var lname = "vishwakarma";
        console.log(lname);
        }
        console.log(fname+lname)
}
bio();
//console.log(fname+lname)    /// errror fname is defined in function only
console.log("*************var* end************")

console.log("***************LET*******************");

function bio1()
{
    let fname = "mohit";
    console.log(fname)
        if(true)
        {
        let lname = "vishwakarma";
        console.log(lname);
        }
        //console.log(fname+lname)    // give error lname isnot defined
}
bio1();

console.log("***************LET*******************");



const PI =  3.14;
PI =  5;    // give error