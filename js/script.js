const bars_btn = document.querySelector("#humberger-btn");
const mobile_menu = document.querySelector("#menu");
const mobile_menu_link = document.querySelectorAll(".menu-link");

const circle_btn = document.querySelector(".circle-btn");
const circle_btn_icon = document.querySelector(".circle-btn i");

const dark_mod_btn_container = document.querySelector(".dark-mod-btn");
const root = document.querySelector(":root");

const green_icon = document.querySelector(".green-icon");
const github_icon = document.querySelector(".github-icon");

const btn_icon = document.querySelector(".btn-icon");

const footerUpworkIcon = document.getElementById('footer-upwork-icon');

// Handle Side Bar
bars_btn.addEventListener("click", () => {
  mobile_menu.classList.toggle("openMenu");
});

for (let i = 0; i < mobile_menu_link.length; i++) {
  mobile_menu_link[i].addEventListener("click", (e) => {
    mobile_menu.classList.toggle("openMenu");
  });
}

const handleDarkModeToggle = () => {
  if (circle_btn.classList.contains("switch")) {
    circle_btn.classList.remove("switch");
    dark_mod_btn_container.style.background = "white";
    dark_mod_btn_container.style.borderColor = "#000";
    root.style.setProperty("--background-color", "#fff");
    root.style.setProperty("--card-background", "#fff");
    root.style.setProperty("--text-color", "#666666");
    root.style.setProperty("--primary-color", "#42446E");
    root.style.setProperty("--even-section-color", "#fafafa")
    bars_btn.style.color = "#000";
    btn_icon.src = "./assets/sun.svg";
    footerUpworkIcon.src = "./assets/upwork-black.svg";
  } else {
    circle_btn.classList.add("switch");
    dark_mod_btn_container.style.background = "black";
    dark_mod_btn_container.style.borderColor = "#fff";
    root.style.setProperty("--background-color", "#191919");
    root.style.setProperty("--card-background", "#363636");
    root.style.setProperty("--text-color", "#fff");
    root.style.setProperty("--primary-color", "#fff");
    root.style.setProperty("--even-section-color", "#201f1fb7")
    bars_btn.style.color = "#CCCCCC";
    btn_icon.src = "./assets/moon.svg";
    footerUpworkIcon.src = "./assets/upwork-white.svg";
  }
};

//Handle Dark Mod
dark_mod_btn_container.addEventListener("click", handleDarkModeToggle);

window.onload = () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';

  setTimeout(() => {
    loader.style.display = 'none'
  }, 1200);

};




