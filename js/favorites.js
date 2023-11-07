document.addEventListener("DOMContentLoaded", function () {
    const favoritePostsContainer = document.getElementById('favorite-posts-container');

    // Retrieve the list of favorite post IDs from localStorage
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || [];

    if (favoriteIds.length === 0) {
        favoritePostsContainer.innerHTML = '<p>Таңдалған жаңалықтар жоқ.</p>';
    } else {
        // Filter the postContents array to include only the favorite posts
        const favoritePosts = postContents.filter(post => favoriteIds.includes(post.id));

        if (favoritePosts.length === 0) {
            favoritePostsContainer.innerHTML = '<p>Таңдалған жаңалықтар жоқ.</p>';
        } else {
            // Iterate through the list of favorite posts and display them
            favoritePosts.forEach(post => {
                const favoritePostElement = document.createElement('div');
                favoritePostElement.innerHTML = `
                    <div class="post">
                        <div class="post-img">
                            <img src="${post.imgUrl}" alt="" />
                        </div>
                        <div class="p-1 shadow mb-5 bg-white rounded">
                            <div class="post-title">${post.title}</div>
                            <div class="post-info">${post.info}</div>
                        </div>
                    </div>`;
                favoritePostsContainer.appendChild(favoritePostElement);
            });
        }
    }
});
