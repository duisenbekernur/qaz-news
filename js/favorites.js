document.addEventListener("DOMContentLoaded", function () {
    const favoritePostsContainer = document.getElementById('favorite-posts-container');

    // Retrieve the list of favorite posts from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritePostsContainer.innerHTML = '<p>No favorite posts yet.</p>';
    } else {
        // Iterate through the list of favorite post titles and display them
        favorites.forEach(title => {
            // Here, you can fetch the full content of the post based on the title
            // You can modify the structure and styling as needed
            const favoritePostElement = document.createElement('div');
            favoritePostElement.textContent = title;
            favoritePostsContainer.appendChild(favoritePostElement);
        });
    }
});
