const body = document.body;
// Functions
const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}
const changeBackgroundColor = () => {
    const color = getRandomColor();
    body.style.backgroundColor = `#${color}`
}

// DOM
body.addEventListener('click', (e) => {
    changeBackgroundColor();
});