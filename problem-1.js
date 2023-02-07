// Problem 1: Let’s play a mind game


// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। 
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। Sample Input & Output

// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: -33
// Output: -25.5

// problem -1
function mindGame ( number){

    const multiplicationOfNumber = number * 3;
    const sumOfNumber = multiplicationOfNumber + 10;
    const devidedOfNumber = sumOfNumber / 2;
    const minusOfNumber = devidedOfNumber - 5;

    if(typeof number === 'string' || number.length == 0){
        return "Please provide valid input"
    }
    return minusOfNumber;

}
const input = 33;
const output = mindGame(input);
console.log(output)

// description,
// First of all i have created a function, that called number. and i took a input using number. then normally part by prat i use multiplication, sume, devide and minus. than i have used if condition to find out invalid input.

