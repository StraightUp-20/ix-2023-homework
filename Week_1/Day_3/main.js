// #1: Write a function that prints even numbers up to a given parameter ie: printEven(50)

// function printEven() {
//     for (let i = 0; i < 51; i += 2) {
//         console.log(i);
//      }
// }
// printEven() // ✔️

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

// #3: Write a function that prints the average of an array 

function calculateAverage(arr1) {
    if (arr1.length == 0) {
        return 0;
    }
    let sum = 0;
   for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
   }
   let average = sum / arr1.length;
   console.log(average);
   return;

}

calculateAverage([1,2,3,4])

// #4: Write a function that prints the minimum number of an array

function min() {
    min = arr[0]
    for (i = 0; i < arr.length; i++) {
        
    }

}

console.log(min)


