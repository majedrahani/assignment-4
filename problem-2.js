// Problem 2: Finding even or odd

// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

// Input: ‘Phero’
// Output: odd

// Input: ‘Batch7’
// Output: even

// Input: ‘chatgpt’
// Output: odd

// problem-2
function evenOdd (string){

    if(typeof string != 'string' || string.length == 0){
        return "Please provide valid input"
    }

    if( string.length % 2 === 0){
        return 'even'
    }
    return 'odd'


}
const input = 'chatgpt';
const output = evenOdd ( input);
console.log( output)

// description,
// First of all normally i have created a function. than i have used tow if condition. first condition for find out invalid output; and second conditon for select even, odd. and there i have used a simple logic. 