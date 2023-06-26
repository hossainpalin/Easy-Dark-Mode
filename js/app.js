const input = document.getElementById("input");

// Theme switcher for datk and light
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    transition();
    document.documentElement.setAttribute("theme", "dark");
  } else {
    transition();
    document.documentElement.setAttribute("theme", "light");
  }
});

// Animation for dark and light mode overlay
const transition = () => {
  document.documentElement.classList.add("transition");

  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
