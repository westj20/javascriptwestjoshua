document.getElementById("localName").textContent = localStorage.getItem("name");
document.getElementById("sessionEmail").textContent =
  sessionStorage.getItem("email");
const decodedGame = decodeURIComponent(document.cookie)
  .split("; ")
  .find((row) => row.startsWith("game="));
document.getElementById("cookieGame").textContent = decodedGame
  ? decodedGame.split("=")[1]
  : "";
