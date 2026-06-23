let fontSize = 16;
let isVisible = true;

function changeHeading() {
  let input = document.getElementById("inputText").value;
  if (input !== "") {
    document.getElementById("heading").innerText = input;
  }
}

function changeBackground() {
  let colors = ["#ff9a9e", "#a18cd1", "#fbc2eb", "#84fab0"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

function increaseFont() {
  fontSize += 2;
  document.getElementById("paragraph").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
  let para = document.getElementById("paragraph");
  isVisible = !isVisible;
  para.style.display = isVisible ? "block" : "none";
}

function resetAll() {
  document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
  document.getElementById("inputText").value = "";
  document.body.style.background = "linear-gradient(135deg, #f0f1f6ff, #e9e5eeff)";
  document.getElementById("paragraph").style.fontSize = "14px";
  document.getElementById("paragraph").style.display = "block";
  fontSize = 14;
  isVisible = true;
}