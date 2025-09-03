const items =document.getElementsByClassName('item');

// for (const item of items){
//     item.addEventListener('click', function(event){
//         console.log(event.target.parentNode.removeChild(event.target))
//     })
// }

document.getElementById('list-items')
.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('add-item')
.addEventListener('click',function(){
    const ol =document.getElementById('list-items');
    const li = document.createElement('li');
    li.classList.add('item')
    li.innerText = 'added new item'

    ol.appendChild(li);
})