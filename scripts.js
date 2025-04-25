// modules



// sum

function sumNumbers() {
    let n = parseFloat(document.getElementById("num").value), sumOfDigits = 0;
    while (n >= 1) {
        sumOfDigits += Math.floor(n % 10);
        n = Math.floor(n / 10);
    }
    document.getElementById("sum").innerHTML = sumOfDigits;
}

// random number

function randomNumber() {
    let min = parseFloat(document.getElementById("min").value);
    let max = parseFloat(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("result").value = "Invalid input";
        return;
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("result").value = result;
}

// split a string

function splitstr() {
    const strElement = document.getElementById("str");
    const chunksElement = document.getElementById("chunks");

    const resultStr = strElement.value || strElement.textContent;
    const stringChunks = resultStr.split(" ");
    const strN = stringChunks.join("\n");

    chunksElement.innerHTML = strN;
}

// repeat a string

function repeatstr(str, times) {
    var n = document.getElementById("newLine").checked;
    let result = "";

    for (let i = 0; i < times; i++) {
        result += str; 
        if (n) { 
            result += "\n";  
        }
    }
    document.getElementById("resultStr").innerHTML = result;
}

// dark mode
function darkmode() {
    let notepad = document.getElementById("notepad");
    let dark = document.getElementById("dark")
    notepad.style.backgroundColor = "black"
    notepad.style.color = "white"
    if (!dark.checked) {
        notepad.style.backgroundColor = "white"
        notepad.style.color = "black"
    }
}

// convert storage
function convertStorage() {
    let fromNum = parseFloat(document.getElementById("fromNum").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toNum = document.getElementById("toNum");
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(fromNum)) {
        toNum.value = "Invalid input";
        return;
    }

    const units = {
        B: 1,
        kB: 1024,
        MB: 1024 ** 2,
        GB: 1024 ** 3,
        TB: 1024 ** 4
    };

    let bytes = fromNum * units[fromUnit];
    let result = bytes / units[toUnit];

    toNum.value = result;
}

// count characters

function count() {
    let text = document.getElementById("stringC").value;
    let charNum = document.getElementById("charNum");
    let wordNum = document.getElementById("wordNum");

    let characters = text.length;
    let words = text.trim().split(/\s+/).filter(Boolean).length;

    charNum.value = characters;
    wordNum.value = words;
}

// reverse text

function reverseText() {
    let text = document.getElementById("textReverse").value;
    let finished = document.getElementById("textReversed");
    let result = text.split(" ").reverse().join(" ");
    finished.innerHTML = result;
}

// fake data

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  

  function generateFirstName() {
    const firstNames = [
      "Joe", "Micheal", "John", "Aiden", "Liam", "Noah", "Lewis", "Timmy",
      "Leo", "Lucas", "Mason", "Max", "Sophia", "Emma", "Olivia", "Isla",
      "Ivy", "Zara", "Aria", "Skye", "Freya", "Luna", "Ava", "Holly"
    ];
    const name = random(firstNames);
    document.getElementById("Fname").value = name;
  }

  function generateLastName() {
    const lastNames = [
      "Smith", "Johnson", "Garcia", "Lee", "Patel", "Nguyen", "Martinez", "Kim",
      "Brown", "Lopez", "Singh", "Wang", "Carter", "Hernandez", "Choi", "Silva",
      "Khan", "Baker", "Murphy", "Kumar", "Fischer", "Ivanov", "Zhou", "Nakamura",
      "O'Connor", "Dubois", "Yamamoto", "Fernandez", "Novak", "Haddad", "Ali", "Takashi",
      "Romero", "Petrov", "Okafor", "Bjornson", "Da Silva", "Mendoza", "Abdi", "Kowalski"
    ];
    const name = random(lastNames);
    document.getElementById("Lname").value = name;
  }

  function generateEmail() {
    const domains = [
      "gmail.com", "email.com", "mail.com",
      "toolio.dev", "toolio.co", "toolio.com", "yahoo.com"
    ];
    let first = document.getElementById("Fname").value;
    if (!first) {
      first = "user";
    }
    const number = Math.floor(Math.random() * 100);
    const email = `${first.toLowerCase()}${number}@${random(domains)}`;
    document.getElementById("email").value = email;
  }

  window.onload = () => {
    const buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", generateFirstName);
    buttons[1].addEventListener("click", generateLastName);
    buttons[2].addEventListener("click", generateEmail);
  };

// text-to-image

function generateImage() {
  const text = document.getElementById('userText').value || "Your Text Here (emojis supported)";

  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const downloadLink = document.getElementById('download');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '40px "Segoe UI Emoji", "Noto Color Emoji", "Apple Color Emoji", sans-serif';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';

  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 15);

  const imageURL = canvas.toDataURL('image/png');
  downloadLink.href = imageURL;
}

window.onload = generateImage;

// copy text 

function copyText(text) {
  var copyText = text;

  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);

  alert("Text Copied!");
}

// Drawing Board

const canvas = document.getElementById("whiteboard");
const context = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => {
  drawing = true;
  context.beginPath();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  context.closePath();
});

canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  context.lineCap = "round";

  context.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  context.stroke();
  context.beginPath();
  context.moveTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
}

//clear
const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

//colour picker
const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("input", (e) => {
  context.strokeStyle = e.target.value;
});

// brush size
const brushSizeInput = document.getElementById("brush-size");

brushSizeInput.addEventListener("input", (e) => {
  context.lineWidth = e.target.value;
});