const btn = document.getElementById("btn-el")
const inputFieldEl = document.getElementById("input-field")
const p1Field = document.getElementById("p1")

btn.addEventListener("click", function() {
    let input = inputFieldEl.value
    p1Field.innerHTML =  `Hello, ${input}, your response has been recorded`
})
console.log(btn)










// Won't add this yet - reserved for later in course

// const myForm = document.getElementById("my-form")


// myForm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let inputField = document.getElementById("input-field")
//     if (inputField.value == "") { 
//         alert("Ensure you input a value in all fields!")
//         } else {
//             alert("This form has been successfully submitted!")
    
//         inputField.value = ""
//       }
//     });
    

