let employees = [
  { name: "Alice", salary: 60000, department: "IT" },
  { name: "Bob", salary: 45000, department: "HR" },
  { name: "Charlie", salary: 70000, department: "Finance" },
  { name: "David", salary: 52000, department: "IT" }
];

function displayEmployees() {
  let output = "<h3>All Employees</h3>";
  employees.forEach(emp => {
    output += `<p>${emp.name} - ₹${emp.salary} - ${emp.department}</p>`;
  });
  document.getElementById("output").innerHTML = output;
}

function filterEmployees() {
  let filtered = employees.filter(emp => emp.salary > 50000);
  let output = "<h3>Employees with Salary > 50,000</h3>";
  filtered.forEach(emp => {
    output += `<p>${emp.name} - ₹${emp.salary} - ${emp.department}</p>`;
  });
  document.getElementById("output").innerHTML = output;
}

function showStatistics() {
  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  let avg = total / employees.length;
  let output = "<h3>Salary Statistics</h3>";
  output += `<p>Total Salary: ₹${total}</p>`;
  output += `<p>Average Salary: ₹${avg}</p>`;
  document.getElementById("output").innerHTML = output;
}

function countDepartment(dept) {
  let count = employees.filter(emp => emp.department === dept).length;
  let output = `<h3>Employees in ${dept} Department</h3>`;
  output += `<p>Count: ${count}</p>`;
  document.getElementById("output").innerHTML = output;
}
