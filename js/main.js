const postsContainer = document.getElementById("posts-container");
const popularNews = document.getElementById("popular-news");

const filters = JSON.parse(localStorage.getItem("filters"));

const postContents = JSON.parse(localStorage.getItem("posts")) || [];
// localStorage.setItem("posts", JSON.stringify(postContents));

const countries = {
  all: "Барлығы",
  kazakhstan: "Қазақстан",
  russia: "Ресей",
  usa: "АҚШ",
  ukrain: "Украина",
  Pakestine: "Палестина",
};
const categories = {
  all: "Барлық жаңалықтар",
  politics: "Политика",
  sports: "Спорт",
  entertainment: "Білім",
  c: "Өнертабыстар",
};

console.log(
  new Date(postContents[0].date).toLocaleDateString() ===
    new Date(filters.selectedDate).toLocaleDateString,
);
postContents
  .filter((post) => {
    return (
      (new Date(post.date).toLocaleDateString() ===
        new Date(filters.selectedDate).toLocaleDateString() ||
        !filters.selectedDate) &&
      (filters.selectedCountry === post.country ||
        !filters.selectedCountry ||
        filters.selectedCountry === "all") &&
      (filters.selectedCategory === post.category ||
        !filters.selectedCategory ||
        filters.selectedCategory === "all")
    );
  })
  .forEach((content) => {
    const favoriteIds = JSON.parse(localStorage.getItem("favoriteIds")) || [];

    let isFavorite = favoriteIds.includes(content.id);

    // Create the image element with an initial source and size
    const favoriteImage = document.createElement("img");
    favoriteImage.src = isFavorite ? "/img/fav.png" : "/img/unfav.png";
    favoriteImage.alt = isFavorite ? "Favorite" : "Not Favorite";
    favoriteImage.width = 25;
    favoriteImage.height = 25;

    const buttonText = isFavorite ? "Таңдалымнан жою" : "Таңдалымға қосу";

    const newPost = `<div id="post-${content.id}" class="post">
          <div class="post-img">
            <img src="${content.imgUrl}" alt="" />
          </div>
          <div class="p-1 shadow mb-5 bg-white rounded h-75">
            <div class="post-title"><a class="text-decoration-none text-black" href="${
              content.postUrl + "?id=" + content.id
            }">
            ${content.title}
            </a>
            </div>
            <div class="post-info">
            ${content.info}
            </div>
            <strong>
            ${countries[content.country]}
            </strong>
            <i>
            ${categories[content.category]}
            </i>
            <div class="post-info__date">
            ${new Date(content.date).toLocaleDateString()}
            </div>
            <button id="add-to-favorites-${
              content.id
            }" class="add-to-favorites">
                ${favoriteImage.outerHTML}
                <span>${buttonText}</span>
            </button>
          </div>
        </div>`;

    const postElement = document.createElement("div");
    postElement.innerHTML = newPost;

    // Add an event listener to the "Add to Favorites" button
    const addToFavoritesButton = postElement.querySelector(
      `#add-to-favorites-${content.id}`,
    );
    addToFavoritesButton.addEventListener("click", () => {
      if (isFavorite) {
        // Remove from favorites
        const index = favoriteIds.indexOf(content.id);
        if (index !== -1) {
          favoriteIds.splice(index, 1);
          localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
          isFavorite = false;
          favoriteImage.src = "/img/unfav.png";
          favoriteImage.alt = "Not Favorite";
          addToFavoritesButton.querySelector("span").textContent =
            "Таңдалымнан жою"; // Update button text
        }
      } else {
        // Add to favorites
        favoriteIds.push(content.id);
        localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
        isFavorite = true;
        favoriteImage.src = "/img/fav.png";
        favoriteImage.alt = "Favorite";
        addToFavoritesButton.querySelector("span").textContent =
          "Таңдалымға қосу"; // Update button text
      }
    });

    postsContainer.innerHTML = postsContainer.innerHTML + newPost;
    // popularNews.innerHTML = popularNews.innerHTML + newPost;
  });

postContents.forEach((content) => {
  document
    .getElementById(`add-to-favorites-${content.id}`)
    .addEventListener("click", () => {
      console.log("here");
      const favoriteIds = JSON.parse(localStorage.getItem("favoriteIds")) || [];
      if (favoriteIds.includes(content.id)) {
        const i = favoriteIds.findIndex((l) => l === content.id);
        console.log(i);
        favoriteIds.splice(i, 1);
      } else {
        favoriteIds.push(content.id);
      }
      localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));

      window.location.reload();
    });
});

// const greet = () => {
//     const username = prompt('Привет! Как можно вам обращаться?', 'Джеки Чан');

//     alert(`${username}, добро пожаловать в наш новостной сайт! Здесь вы найдете все последние новости.`)
// }

// setTimeout(() => {
//     greet()
// }, 500)
