document.getElementById('update-title')
.addEventListener('click',function(){
    const pageTitle = document.getElementById('head-title')
    pageTitle.innerText = 'Updated Page Heading';
})



document.getElementById('btn')
.addEventListener('click', function(){
    const inputText = document.getElementById('input-text');
    const name = inputText.value;
    const userName = document.getElementById('user-name');
    userName.innerText = name;
})