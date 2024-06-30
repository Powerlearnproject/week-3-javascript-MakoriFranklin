var greeting = "Hello, World!"; 
var age = 25;
var isStudent = true;



function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    console.log("Add:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    console.log("Subtract:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    console.log("Multiply:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        console.log("Divide: Cannot divide by zero");
        document.getElementById('result').textContent = "Result: Cannot divide by zero";
    } else {
        var result = num1 / num2;
        console.log("Divide:", result);
        document.getElementById('result').textContent = "Result: " + result;
    }
}




var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};


var config = {
    type: 'line',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);
