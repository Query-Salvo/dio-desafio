let lines = gets().split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[1]);

if (l % 2 === 0)
  if (c % 2 === 0) print(1);
  else print(0);
else if (c%2===1) print(  0  );
 else print(  1   );      //complete o código nos espaços em branco