// normal function
function add(a,b)
{
    return a+b;
}
var sum = add(4,8);
console.log(sum);

//new Anonymous Function 
// name == nhii hota hai isme

var sum = function(a,b){
  return a+b;
}

console.log(sum(4,6));
var ans = sum(4,6);
    


// defaoult arguments;

var product = function(a=2,b=10){   // here we give the intial values of a and b ; if somehow we forget to give at the time of calling function then it will take default value
    return a*b;
}
console.log(product(5,4));
console.log(product(5));
console.log(product());
