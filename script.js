const topicButtons = document.querySelectorAll(".topic");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    topicButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
  });
});
