let a = 1;
let b = 10;

function sum(a){
  return function(b){
    return a + b;
  };
}

let result = sum(a);

console.log(result(b));