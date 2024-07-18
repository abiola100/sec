<script>
  document.addEventListener('DOMContentLoaded', function() {
    const addCommentButton = document.getElementById('add-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    addCommentButton.addEventListener('click', function() {
      const commentText = commentInput.value.trim();
      if (commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        commentsList.appendChild(commentElement);
        commentInput.value = '';
      }
    });
  });
</script>
