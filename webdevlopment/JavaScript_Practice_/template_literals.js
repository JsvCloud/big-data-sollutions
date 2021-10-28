// traditional way i.e conacatenation

function tableP(n)
{
   for(let i = 1; i<= 10;i++)
   {
       console.log( n + " * " + i + " = "+n*1);
   }
}
tableP(12);


// new way is template literals
   
function tableN(n){
    for(let i = 1;i<=10;i++)
    {
        console.log('${n} * ${i} = ${n*i}');
    }
}
tableN(12);