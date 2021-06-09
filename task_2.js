let num = 5;

function isPrime(num) {
  if (num > 1000 || typeof num != "number") {
    return "Данные неверны";
  } else {
    if (num <= 1) {
      return "Число не является простым";
    } else {
      for (let i = 2; i<num; i++) {
        if (num % i == 0) {
            return "Число не является простым";
        }
      }
      return "Это простое число";
    }
  }
}

console.log(isPrime(num));