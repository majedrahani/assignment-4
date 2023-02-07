// Problem 5: Convert your gems into diamond


// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-

// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303

// problem-5
function gemsToDiamond (friend1, friend2, friend3) {
    const friend1diamond = friend1 * 21;
    const friend2diamond = friend2 * 32;
    const friend3diamond = friend3 * 43;

    const totaldiamond = friend1diamond + friend2diamond + friend3diamond;

    if(typeof friend1 === 'string' || typeof friend2 === 'string' || typeof friend3 === 'string'){
        return "Please provide valid input"
    }

    if (totaldiamond >= 1000*2){
        return totaldiamond - 2000;
    } else{
        return totaldiamond;
    }

}
// const friend1Gems = 100;
// const friend2Gems = 5;
// const friend3Gems = 1;
// const output = gemsToDiamond(friend1Gems, friend2Gems, friend3Gems);
// console.log(output);

// description,
// First of all i have created a function , than took three peramiter, there took input gems of three friends. and multiply gems by three fixed number. then find out sum of oll diamond. then i declare tow condition. first condition for invalid input. and second conditon for find out the solution of this problem;