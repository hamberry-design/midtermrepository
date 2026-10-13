// document.getElementById("order").addEventListener('click', function(e) {
//
//     //retreives the name via.value and const stores the text
//     const name = document.getElementById("name").value;
//
//     const result =
//         (Number(document.getElementById("drinkType").value) *
//             Number(document.getElementById("input3").value));
//
//
//
//     // document.getElementById("result").innerHTML = "Thanks" name "Your total is" result
//
//     document.getElementById("result").innerHTML = 'Thanks ' + name + ' your total is $' + result +".";
// });

// name and age 3 and under you are free,





document.getElementById("getticket").addEventListener('click', (e) => {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    console.log(age);



    if (age <= 3 && age >= 1 ) {
        result.textContent = name + ", Your ticket is free";} else if
    (age >= 65) {
        result.textContent = name + ", Your ticket is $12";} else if
    (age >= 4 && age <= 12) {
        result.textContent = name + ", Your ticket is $10";} else if
    (age >= 13 && age <= 64) {
        result.textContent = name + ", Your ticket is $20";} else if
    (name === "" || age === "") {
        result.textContent = "Please enter a name and a valid age";
    }
})



