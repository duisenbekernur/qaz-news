let comments = JSON.parse(localStorage.getItem("comments")) || [];
const id = window.location.search.split("=")[1];

document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  var media = document.getElementById("media");
  var button = document.getElementById("publish");
  var usernamae = document.getElementById("username");
  var comment = document.getElementById("comment");

  comments
    .filter((c) => c.postId === id)
    .forEach((c) => {
      var media_body = document.createElement("div");
      media_body.classList.add("media-body");

      var usernameH5 = document.createElement("h5");
      usernameH5.classList.add("mt-0");
      usernameH5.textContent = c.username;

      var comment_date = document.createElement("p");
      comment_date.classList.add("text-muted");
      comment_date.textContent = c.date;

      var comment_itself = document.createElement("span");
      comment_itself.textContent = c.comment;

      var hr = document.createElement("hr");

      media_body.append(usernameH5, comment_date, comment_itself, hr);
      media.append(media_body);
    });

  button.addEventListener("click", function (event) {
    event.preventDefault();

    var media_body = document.createElement("div");
    media_body.classList.add("media-body");

    var usernameH5 = document.createElement("h5");
    usernameH5.classList.add("mt-0");
    usernameH5.textContent = usernamae.value;

    var comment_date = document.createElement("p");
    comment_date.classList.add("text-muted");
    comment_date.textContent = getCurrentDateTime();

    var comment_itself = document.createElement("span");
    comment_itself.textContent = comment.value;

    var hr = document.createElement("hr");

    media_body.append(usernameH5, comment_date, comment_itself, hr);

    comments.push({
      postId: id,
      comment: comment_itself.textContent,
      username: usernameH5.textContent,
      date: comment_date.textContent,
    });

    localStorage.setItem("comments", JSON.stringify(comments));

    media.append(media_body);
  });
});

function getCurrentDateTime() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `Date: ${month} ${day}, ${year}`;
  return formattedDate;
}
