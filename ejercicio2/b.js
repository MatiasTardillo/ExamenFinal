const changeColorButton = document.getElementById('change-color-button');
const colorValueElement = document.getElementById('color-value');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorValueElement.textContent = newColor;
}

changeColorButton.addEventListener('click', changeBackgroundColor);
