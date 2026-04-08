function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let resultDiv = document.getElementById("result");

    if (num === "") {
        resultDiv.innerHTML = " enter a number.";
        return;
    }

    if (num % 2 === 0) {
        resultDiv.innerHTML = " Even number.";
    } else {
        resultDiv.innerHTML =  "  Odd number.";
    }
}