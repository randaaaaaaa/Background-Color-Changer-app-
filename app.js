//Select 7 colors
let colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'black' ];


//change the background of canvas when button is clicked
let button = document.getElementById('button');

//select a random number between 0 - 6
button.addEventListener('click', function(){
    let index = Math.floor(Math.random()* colors.length);
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${colors[index]}`
})

//grab the canvas

