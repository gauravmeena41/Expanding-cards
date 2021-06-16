const panelView = document.querySelectorAll(".panel");

panelView.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeClasses();
    panel.classList.add("active");
  });
});

function removeClasses() {
  panelView.forEach((panel) => {
    panel.classList.remove("active");
  });
}
