function calculateMarks() {
    let numSubjects = parseInt(document.getElementById("subjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let total = 0;
    
    // Loop to ask marks for each subject
    for (let i = 1; i <= numSubjects; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i)) || 0;
        total += marks;
    }

    let average = total / numSubjects;

    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 40) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML = `
        <strong>Total Marks:</strong> ${total} <br>
        <strong>Average:</strong> ${average.toFixed(2)} <br>
        <strong>Grade:</strong> ${grade}
    `;
}
