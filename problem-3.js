// Problem 3: Is Less or Greater than seven

// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6
// Output: -1

// Input: -15
// Output: -22

// Input: 15
// Output: 30

// problem-3
function isLGSeven (number){
    
    if(typeof number === 'string' || number.length == 0){
        return "Please provide valid input"
    }

    let element = number-7;
    if( element < 7){
        return element;
    }
    return number *2 ;

}
const input = 15;
const output = isLGSeven( input );
console.log( output );

// description,
// Here also first of all i have created a function. then i use a if condition for find out invalid input. than i do minus 7 from number peramiter. than i took another if condition. and than i return number peramiter multiply by 2;