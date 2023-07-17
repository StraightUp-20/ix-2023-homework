// #1: Write a function that prints even numbers up to a given parameter ie: printEven(50)

function printEven(list) {
    let arr = []
    for (let i = 0; i < list; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    console.log("Our even numbers are: " + arr)
}

printEven(20)

// Addon of #1 but for odd numbers

function printOdd(list) {
    let arr = [];
    for (let i = 0; i < list; i++) {
        if (i %2 != 0) {
            arr.push(i)
        }
    } 
    console.log("Our odd number are: " + arr)
}

printOdd(20)

// #2: Write a function that prints the fibonacci sequence to a given length

function fibonacci(length) {

    let sequence = [0,1]

    switch (sequence) {
        case 0:
            console.log(null);
            break;
        case 1: 
            console.log(sequence[0]);
            break;
        default:
            console.log(sequence[0]);
            console.log(sequence[1]);
            let index = 2;
            let sum = 0;
            while (index < length) {
            sum = sequence[index - 1] + sequence[index -2]; 
            sequence.push(sum);
            index++;
            console.log(sum);
            }        
    }
}
fibonacci(1)

// another example of #2

function printFibonacci(until) {
    let num1 = 0;
    let num2 = 1;
    let arr = [0,1]
    for (let i = 0; i < until; i++) {
        let next = num1 + num2;
        num1 = num2;
        num2 = next;
        arr.push(next);
    }
    console.log("Fibonnacci: " + arr);
}

printFibonacci(10)

// // #3: Write a function that prints the average of an array 

function calculateAverage(arr1) {
    if (arr1.length == 0) {
        console.log("Not a valid array");
    }
    let sum = 0;
   for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i]
   }
   let average = sum / arr1.length;
   console.log(average);

}
calculateAverage([2, 3])


// // #4: Write a function that prints the maximum number of an array

    function maximum(arr) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        console.log(max)
    }

maximum([1,3,8])

// Another way for 
function printMax(arr) {
    console.log("Max number in array is: " + Math.max(...arr));
}
printMax([2, 4, 8])


 // #5: Write a function that prints the minimum number of an array

function min(arr) {
    let mini = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (mini > arr[index]){
            mini = arr[index]
        }
    }
    console.log(mini)
}

console.log(min([23, 3, -23]))

// Another way for #5
function printMin(arr) {
    console.log("minimum number in array is: " + Math.min(...arr));
}
printMin([2, 4, 8])

// # 6

function numberofVowels(word) {
    let arr = Array.from(word);
    let arr2 = arr.filter((x) => "aeiou".includes(x))
    console.log(`Number of Vowels in ${word} is `+ arr2.length);
}

numberofVowels("Leonardo")

// #7

function addTwoNumbers(num1, num2) {
    let total = num1 + num2
    console.log("Addition of two nunbers is: " + total)
}

addTwoNumbers(2,4)

// # 8 

function MultiplyTwoNumbers(num1, num2) {
    let total = num1 * num2
    console.log("Multiplication of two nunbers is: " + total)
}

MultiplyTwoNumbers(2,4)

// # 9 

function returnPostalCode(city) {
    switch(city) {
        case "Johanesburg":
            console.log("Postal code: " + 1501);
            break;
        case "Cape Town":
            console.log("Postal code: " + 3201);
            break;
        default:
            console.log("No city matches");
            break;
    }
}
returnPostalCode("Johanesburg")

// #10

function sortAlphabetically(arr) {
    let arr2 = arr.sort[(a,b) => a.localCompare(b)];
    console.log("Alphabetised List:" + arr2);
}

sortAlphabetically[("cam","Leonardo", "Miguel")]

// #11

function sortNumerically(arr, order) {
    if(order === "ASC") {
        let arr2 = arr.sort((a,b) => a - b);
    console.log("Ascending List:" + arr2);
    } else {
        let arr2 = arr.sort((a,b) => b - a);
        console.log("Descending List:" + arr2);
    }
}

sortNumerically([3, 4,3,2, 3, ,], "ASC");
sortNumerically([3, 4,3,2, 3, ,], "DESC");

// #12 

function reverseNumber(number) {
    let stringNumber = number.toString();
    let reversed = stringNumber.split(" ").reverse().join(" ");
    console.log("Reversed Number: " + reversed);
}
reverseNumber(1234)

// #13 

function capitilizeSentence(sentence) {
    let arr = sentence.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    let completeSentence = " ";
    for (let i = 0; i < arr.length; i++) { 
        completeSentence += " " + arr[i];
    }
console.log("Capitilized sentence: " + completeSentence);
}
// let name = Hello jpg
//name.split(" ")

capitilizeSentence("Hello i am a sentence");



// #14 Write a function that capitilizes each word in a string

function capitalize(str) {
    let words = str.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
  
    let newString = words.join(" ");
    for (let i = 0; i < words.length; i++) {
        return newString;
    }
  }
    console.log(capitalize("hello cod"))

  // # 15

  function returnOccurence(word, letter) {
    let total = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            total = +1
        }
    }
    console.log(`Total occurences of letter: " + ${letter} is ${total}`);
}

returnOccurence("because", "e");
  
// # 16

function filterWord(arr, word) {
    let filteredArr = arr.filter((x) => x !== word);
    console.log("Filtered word array: " + filteredArr);
}
filterWord(["cam", "alex", "miguel"], "cam")

// # 17

function filterByNumber(arr, number) {
    let filterArr = arr.filter((x) => x !== number);
    console.log("Filtered number array: " + filterArr);
}
filterByNumber([1, 2, 3, 3, 2, 1], 3)

// # 18

let objArr = [
    {
    id: 0,
    name: "Leonardo",
    goals: 10
    },
    {
    id: 1,
    name: "Alex",
    goals: 15
    },
    {
    id: 2,
    name: "Izza",
    goals: 45
        },
];

function filterById(arr, id) {
    let filteredArr = arr.filter((x) => x.id != id);
    console.log("Filtered array:  ");
    console.log(filteredArr);
}
filterById(objArr, 1)

function findById(arr, id) {
    let filteredArr = arr.filter((x) => x.id === id);
    console.log("Filtered array:  ");
    console.log(filteredArr);
}
filterById(objArr, 2)

// # 19

function todaysDate() {
    let now = new Date();
    day = now.getDay(); // let day = new.getUTCDate()
    month = now.getMonth();
    year = now.getFullYear();
    console.log("Todays date: " + day + "/" + [month + 1] + "/" + year)
}
todaysDate();

// # 20

function filterByLargerThenTen(arr, val) {
    let filteredArr = arr.filter((x) => x.goals > val);
    console.log("Filtered array:  ");
    console.log(filteredArr);
}

filterByLargerThenTen(objArr, 10);

//  Learned to understand this code using W3Schools, ChatGPT, and Cam(Head Teacher)
// A bit behind so i'll be practicing my js on the hw