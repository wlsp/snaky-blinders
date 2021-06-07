
const randomColor = () => Math.floor(Math.random() * 355);
let quote = document.createElement('h1');
let quoteText = document.createTextNode('By order of the funking Snaky Blinders *sssss* *sssss*  *sssss*')
quote.appendChild(quoteText);
snakeField.appendChild(quote);

for (let i = 0; i < 100; i++) {
    let item = document.createElement('div');
    item.className = 'item';
    snakeField.appendChild(item);
    
}

document.querySelector('section').addEventListener('mouseover', (event) => {
    // console.log('funks?!')
    event.target.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    event.target.style.transition = "all .3s";
    setTimeout(function () {
        event.target.style.background = 'lightblue';
    }, 500)
});



