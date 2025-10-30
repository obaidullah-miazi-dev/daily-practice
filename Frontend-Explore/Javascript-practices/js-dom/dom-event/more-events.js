// document.getElementById('mouse-enter')
// .addEventListener('mouseenter',function(){
//     console.log('mouse event worked')
// })


// document.getElementById('mouse-event')
// .addEventListener('mousemove',function(){
//     console.log('mouse event worked')
// })


// document.getElementById('mouse-event')
// .addEventListener('mouseup',function(){
//     console.log('mouse event worked')
// })



document.getElementById('input-text').addEventListener
('keyup',function(event){
    const text = event.target.value;
    const btn = document.getElementById('button');
    const title = document.getElementById('title');

    if(text === 'delete'){
        btn.removeAttribute('disabled')
        
    }

    else{
        btn.setAttribute('disabled',true)
    }
    
    
}
)