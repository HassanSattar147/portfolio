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
  // return;
  const loader = document.getElementById('loader');
  const body = document.querySelector('body');

  loader.style.opacity = '0';
  body.style.overflow = 'unset';



  setTimeout(() => {
    loader.style.display = 'none'
  }, 1200);

};

const getProjectCard = (imgName, projectName, techStack, branchName) => {
  return `<div class="card">
  <div class="card-header">
    <div
      class="card-image"
      style="
        background-image: url(./assets/projects/${imgName}.jpg);
      "
    ></div>
    <div class="card-body">
      <div class="card-title">${projectName}</div>
      <div class="card-desc">
        <p class="tech">
          <span>Tech stack:</span> ${techStack}
        </p>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <a
      href="https://hassansattar147.github.io/${branchName}/"
      target="_blank"
      class="link"
    >
      <img
        src="./assets/akar-icons_link-chain.svg"
        alt=""
      />Preview Project
    </a>
  </div>
</div>`
}

const projectsConfigs = [
  { imgName: 'pet-animal', projectName: 'Pet Home Shelter', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'pet-animal' },
  { imgName: 'fba-multitool', projectName: 'FBA Multitool', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'fba-multitool' },
  { imgName: 'figma-land', projectName: 'Figma Land', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'figma-land' },
  { imgName: 'tourism', projectName: 'Tourism', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'tourism' },
  { imgName: 'ension-capital', projectName: 'Envision Capital', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'envision-capital' },
  { imgName: 'travel-busses', projectName: 'The Box', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'the-box' },
  { imgName: 'flex-force', projectName: 'Flex Force', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'flex-force' },
  { imgName: 'light-theme', projectName: 'Two Themes Landing Page', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'themes-landing-page' },
  { imgName: 'izzy-health', projectName: 'Izzy Health', techStack: 'HTML, CSS, Sass, JavaScript', branchName: 'izzy-health' },
]

const renderProjects = () => {
  const projectsContainer = document.getElementById('projectsContainer');
  const allCards = projectsConfigs.map(({ imgName, projectName, techStack, branchName }) => getProjectCard(imgName, projectName, techStack, branchName)).join('\n');
  projectsContainer.innerHTML = allCards;
}

renderProjects();
