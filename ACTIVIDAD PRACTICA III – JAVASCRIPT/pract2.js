let arber = prompt("uno");
let greg = prompt("do");
if (arber > 0)
{
    document.writeln(arber + "positivo");
}
else if (arber < 0)
{
    document.writeln(arber + "negativo");
}
if (greg > 0)
{
    document.writeln(greg + "positivo");
}
else if(greg < 0)
{
    document.writeln(greg + "negativo");
}

if(arber>0 && greg>0)
{
  document.writeln("dos de dos positivos");
}
else if(arber >0 && greg<0)
{
    document.writeln("uno de dos positivos");
}

else if(arber<0 && greg<0)
{
  document.writeln("dos de dos negativos");
}