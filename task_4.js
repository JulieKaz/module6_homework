let a = 0;
let b = 9;

function countIt(a, b) {
  const intervalId = setInterval(function(){
    console.log(a++);
    if (a > b) clearInterval(intervalId);
  }, 1000);
}

countIt(a, b);