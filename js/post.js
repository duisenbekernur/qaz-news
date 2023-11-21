const postId = window.location.search.split("=")[1];

const post = JSON.parse(localStorage.getItem("posts")).find(
  (p) => p.id === +postId
);
console.log(post);

document.getElementById("post-content-title").innerText = post.title;
document.getElementById("post-content-img").src = post.imgUrl;
document.getElementById("post-content-info").innerText = post.info;
document.getElementById("post-content-date").innerText =
  new Date(post.date).toLocaleDateString() +
  "  " +
  new Date(post.date).toLocaleTimeString();
