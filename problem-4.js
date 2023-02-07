// Problem 4: Finding Bad data


// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

// Sample Input & Output:-

// Input: [ 1,2,5 ]
// Output: 0

// Input: [ 2, -5, -7, -13 ]
// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]
// Output: 5

// problem-4
let numbers = [ -4, -9, -5, -33, -55 ];

function findingBadData( array ) {

let count = 0;
    for( let i = 0; i < array.length; i++){
        const element = array[i];

        if(typeof array === 'string' || array.length == 0){
            return "Please provide valid input"
        }

        if(element <= -1){
            count = count +1;
        }
        
    }
    return count;

}

// const totalBadData = findingBadData(numbers);
// console.log ( totalBadData)


// description,
// First of all i have declared an array. than created a function. there took a peramiter. and under the perametar of the function i put tha array. than i took a for loop. using the loop i get index of array. and than i took tow if condition. first condition for find out invalid numbet. and second condition for find and count nagativ data.