var button = document.getElementById("l_mode");

button.addEventListener("click", () => {
  if (document.body.style.color == "black") {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
});
