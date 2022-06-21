
const changeTheme = () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light" || !theme) {
    document.body.classList.remove("dark");
    themeBtn.classList.remove("rotate-180");
  } else if (theme === "dark") {
    document.body.classList.add("dark");
    themeBtn.classList.add("rotate-180");
  }
};

document.addEventListener("DOMContentLoaded", () => changeTheme());

themeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light" || !theme) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  changeTheme();
});

historyBtn.addEventListener("click", () => {
  historyContainer.classList.toggle("-translate-x-full");
});

window.addEventListener("click", (e) => {
  if (!historyContainer.contains(e.target) && !historyBtn.contains(e.target)) {
    historyContainer.classList.add("-translate-x-full");
  }
});
