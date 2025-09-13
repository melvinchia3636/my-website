const allButton = document.querySelectorAll("button");
allButton.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.innerHTML = "Clicked!";
  })
);
