// #1: Write a function that prints even numbers up to a given parameter ie: printEven(50)

function printEven(list) {
    let arr = []
    for (let i = 0; i < list; i++) {
        if (i % 2 == 0) {
            arr.push[i]
        }
    }
}

printEven(20)


// #2: Write a function that prints the fibonacci sequence to a given length

// function fibonacci(length) {

//     let sequence = [0,1]

//     switch (sequence) {
//         case 0:
//             console.log(null);
//             break;
//         case 1: 
//             console.log(sequence[0]);
//             break;
//         default:
//             console.log(sequence[0]);
//             console.log(sequence[1]);
//             let index = 2;
//             let sum = 0;
//             while (index < length) {
//             sum = sequence[index - 1] + sequence[index -2]; 
//             sequence.push(sum);
//             index++;
//             console.log(sum);
//             }        
//     }
// }
// fibonacci(1)

// // #3: Write a function that prints the average of an array 

// function calculateAverage(arr1) {
//     if (arr1.length == 0) {
//         console.log("Not a valid array");
//     }
//     let sum = 0;
//    for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i]
//    }
//    let average = sum / arr1.length;
//    console.log(average);

// }
// calculateAverage([1,2,3,4])

// // #4: Write a function that prints the minimum number of an array

// function min(arr) {
//     let mini = arr[0]
//     for (let index = 1; index < arr.length; index++) {
//         if (mini > arr[index]){
//             mini = arr[index]
//         }
//     }
//     console.log(mini)
// }

// console.log(min([23, 3, -23]))

// // #14 Write a function that capitilizes each word in a string

// function capitalize(str) {
//     let words = str.split(" ");
  
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
//     }
  
//     let newString = words.join(" ");
//     for (let i = 0; i < words.length; i++) 
//     return newString;
//   }
  
//   console.log(capitalize("hello cod")) // Output: "Hello Colorado"
  
