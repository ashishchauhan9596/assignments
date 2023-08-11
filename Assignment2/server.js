// DOM
const countSpan = document.getElementById('count');

// Function
// Both function will work. You have to comment one function at one time.
// let count = 0;
// const updateCounter = () => {
//     count = count + 1;
//     countSpan.innerText = count;
// }
const updateCounter = () => {
    let number = parseInt(countSpan.innerText);
    countSpan.innerText = number + 1;
}

