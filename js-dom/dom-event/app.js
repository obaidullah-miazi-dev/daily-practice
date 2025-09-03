function makeGreen(){
    document.body.style.backgroundColor='green';
}

const makeYellow = document.getElementById('yellow');
makeYellow.onclick= function makeYellow(){
    document.body.style.backgroundColor= 'yellow';
}

const btnMakePink = document.getElementById('pink');

btnMakePink.onclick= makePink;
function makePink(){
    document.body.style.backgroundColor='pink';
}




// add event listener method and its recomended

document.getElementById('golden').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod'
})

document.getElementById('soft-green').addEventListener('mouseover', function(){
    document.body.style.backgroundColor = '#b4c26d';
})