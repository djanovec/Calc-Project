var numberArray = [];
var builderArray = [];
var total;

// Inputs into String
document.querySelectorAll(".number-button").forEach(function (val) {
    val.addEventListener("click", function () {
        console.log(val.value);
        numberArray.push(val.value);
    })
})
// Changes String into Number and Calc
document.querySelectorAll(".action-button").forEach(function (val) {
    val.addEventListener("click", function () {
        var intoBuilder = numberArray.join('');
        intoBuilder = eval(intoBuilder);
        
        console.log(intoBuilder);
        console.log(typeof intoBuilder);
        var total = document.getElementById("results");
        total.innerText = intoBuilder;
    })
})
// Clears All Entries
document.querySelectorAll(".clear-button").forEach(function (val) {
    val.addEventListener("click", function () {
        builderArray = [];
        numberArray = [];
        total = 0;
        document.getElementById("results").innerText = total;
        console.log(total + builderArray + numberArray)
    })
})
// CE (clear Entry) Button Code
document.querySelectorAll(".clear-entry-button").forEach(function (val) {
    val.addEventListener("click", function () {
        numberArray.pop();
        console.log(numberArray)
    })
})
// Displays Entries
document.querySelectorAll("body").forEach(function (val) {
    val.addEventListener("click", function () {
        var working = document.getElementById("working");
        working.innerText = numberArray.join('');
    })
})