// Function to generate a random hex color
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the background color and hex value
function changeBackgroundColor() {
    let randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor; // Change background color
    document.getElementById('hexValue').textContent = randomColor; // Display hex value
}

// Add event listener to the button
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
