function createInputs() {
    let subjects = document.getElementById("subjects").value;
    let marksBox = document.getElementById("marksBox");

    marksBox.innerHTML = "";

    for (let i = 1; i <= subjects; i++) {
        marksBox.innerHTML += `
            <input type="number" id="mark${i}" placeholder="Enter marks for Subject ${i}">
            <br>
        `;
    }
}

function calculateMarks() {
    let subjects = document.getElementById("subjects").value;
    let total = 0;
    let fail = false;

    for (let i = 1; i <= subjects; i++) {
        let marks = Number(document.getElementById(`mark${i}`).value);

        total += marks;

        if (marks < 33) {
            fail = true;
        }
    }

    let average = total / subjects;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 45) {
        grade = "C";
    } else if (average >= 33) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result = fail ? "Fail ❌" : "Pass ✅";

    document.getElementById("result").innerHTML = `
        <strong>Total Marks:</strong> ${total}<br>
        <strong>Average:</strong> ${average.toFixed(2)}<br>
        <strong>Grade:</strong> ${grade}<br>
        <strong>Result:</strong> ${result}
    `;
}