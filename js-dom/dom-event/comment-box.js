document.getElementById('comment-btn')
    .addEventListener('click', function () {
        const commentBox = document.getElementById('comment-box');
        const commentValue = commentBox.value;
        console.log(commentValue);
        if (commentValue.length == 0) {
            return
        }
        const commentBoxContainer = document.getElementById('comment-box-container')
        const newComment = document.createElement('p')

        commentBoxContainer.appendChild(newComment)
        newComment.classList.add('comment')
        newComment.innerText = commentValue;

        commentBox.value = '';


    })