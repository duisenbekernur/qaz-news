

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

window.addEventListener("load", function () {
  deleteAllCookies();
});

document.addEventListener("DOMContentLoaded", function () {
  const cookieNotifier = document.getElementById("cookie-notifier");
  const acceptCookieButton = document.getElementById("accept-cookie");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieNotifier.style.display = "block";
  }

  acceptCookieButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieNotifier.style.display = "none";
  });
});