function one (){
    two()
    console.log(1)
}
function two (){
    three()
    console.log(2)
}
function three (){
    setTimeout(() => {
        console.log('inside timeout three')
    }, 0);
    four()
    console.log(3)
}
function four (){
    setTimeout(() => {
        console.log('inside timeout four')
    }, 0);
    five()
    console.log(4)
}
function five (){
    console.log(5)
}

one()

