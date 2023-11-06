// NEWS
const postsContainer = document.getElementById("posts-container");
const removePost = document.getElementByClassName("remove-post");

removePost &&
  removePost.addEventListener("click", (e) => {
    console.log(e);
  });

let postContents =
  (localStorage.getItem("posts") &&
    JSON.parse(localStorage.getItem("posts"))) ||
  [];

if (window.location.pathname.includes("admin")) {
  postContents = postContents.map((c) => ({ ...c, imgUrl: "." + c.imgUrl }));
}

postContents.forEach((content) => {
  const newPost = `
  <div class="card" style="width: 18rem">
    <img src="${content.imgUrl}" class="card-img-top" alt="..." />
    <div class="remove-post">X</div>
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

// LOGIN
localStorage.setItem("isAdminLogged", false);

const handleAdminLogin = (e) => {
  e.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (!(login === "@dmin" && password === "q@znews")) {
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";

    alert("Неправильные данные");
    return;
  }

  localStorage.setItem("isAdminLogged", true);
  window.location.pathname = "/admin/news.html";
};

document
  .getElementById("loginForm")
  .addEventListener("submit", handleAdminLogin);
