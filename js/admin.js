// LOGIN
localStorage.setItem("isAdminLogged", false);

const handleAdminLogin = (e) => {
  e.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  console.log(login, password);

  if (!(login === "@dmin" && password === "q@znews")) {
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";

    alert("Неправильные данные");
    return;
  }

  localStorage.setItem("isAdminLogged", true);
  window.location.pathname = "/admin/news.html";
};

document.getElementById("loginForm") &&
  document
    .getElementById("loginForm")
    .addEventListener("submit", handleAdminLogin);

// NEWS
const postsContainer = document.getElementById("posts-container");

let postContents =
  (localStorage.getItem("posts") &&
    JSON.parse(localStorage.getItem("posts"))) ||
  [];

if (window.location.pathname.includes("admin")) {
  postContents = postContents.map((c) => ({ ...c, imgUrl: "." + c.imgUrl }));
}

function displayPosts() {
  let posts = (
    (localStorage.getItem("posts") &&
      JSON.parse(localStorage.getItem("posts"))) ||
    []
  ).map((c) => ({ ...c, imgUrl: "." + c.imgUrl }));
  postsContainer.innerHTML = "";

  posts.forEach((content) => {
    const newPost = `
  <div class="card" style="width: 18rem">
    <img src="${content.imgUrl}" class="card-img-top" alt="..." />
    <div id="remove-post-${content.id}" class="remove-post">X</div>
    <div class="card-body">
      <h5 class="card-title">${content.title}</h5>
      <p class="card-text">
      ${content.info}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    if (postsContainer)
      postsContainer.innerHTML = postsContainer.innerHTML + newPost;
  });
}

displayPosts();

postContents.forEach((c) => {
  document
    .getElementById(`remove-post-${c.id}`)
    .addEventListener("click", () => {
      let posts = JSON.parse(localStorage.getItem("posts"));
      posts = posts.filter((p) => p.id !== c.id);

      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.reload();
      // displayPosts();
    });
});

// ADD NEWS
document.getElementById("openModal").addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  document.getElementById("closeModal").addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.getElementById("imageInput").addEventListener("change", function () {
    const imagePreview = document.getElementById("imagePreview");
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.name = "./img/" + file.name;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("itemForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const image = document.getElementById("imagePreview").name;

    // You can now submit this data to your server or perform other actions.
    // For this example, we'll just log the data.
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);

    let posts = JSON.parse(localStorage.getItem("posts"));
    posts.push({
      id: posts[posts.length - 1].id + 1,
      title,
      info: description,
      imgUrl: image,
    });
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.reload();

    // Close the modal
    modal.style.display = "none";
  });
});
