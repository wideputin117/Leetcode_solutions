// fizbuzz using switch case
function fizzBuzz(arr) {
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] % 3 === 0 && arr[i] % 5 === 0:
                console.log("FizzBuzz");
                break;
            case arr[i] % 3 === 0:
                console.log("Fizz");
                break;
            case arr[i] % 5 === 0:
                console.log("Buzz");
                break;
            default:
                console.log(arr[i]);
        }
    }
}

fizzBuzz([2, 3, 1, 6, 8, 9, 5, 3, 1, 7, 15]);