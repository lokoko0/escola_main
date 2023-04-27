var button = document.getElementById("l_mode");
var imgContainer = document.querySelector(".img-container")

button.addEventListener("click", () => {
  if (document.body.style.color == "black") {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
});
