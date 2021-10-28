var  a = 0 ,b=1;
var n = 20;
console.log(a);
console.log(b);
for(var i = 2;i<=n;i++)
{
   var r = a+b;
   console.log(r+ " ");
   a = b;
   b = r;
}