let arr = [3, 1, 5, 2, 0];

function isEvenOdd(array) {
    let odd = 0, even = 0, zero = 0;
    array.forEach(function(item){
        if (typeof item == 'number') {
            if (item == 0) {
                zero++;
            }else if (item % 2 == 0) {
                even++;
            }else {
                odd++;
            }
        }
    });
    console.log(`Четных - ${even}`);
    console.log(`Нечетных - ${odd}`);
    console.log(`Нулей - ${zero}`);
}

isEvenOdd(arr);




