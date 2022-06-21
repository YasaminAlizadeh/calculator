
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
