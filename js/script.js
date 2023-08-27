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

const getProjectCard = (imgName, projectName, projectDescription, branchName) => {
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
        <p>
          ${projectDescription}
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
  { imgName: 'pet-animal', projectName: 'Pet Home Shelter', projectDescription: 'We have already saved the lives of 10,000 animals. We are not just a rescue, we are a refuge.', branchName: 'pet-animal' },
  { imgName: 'fba-multitool', projectName: 'FBA Multitool', projectDescription: `1000's of Amazon sellers recommended this FBA software for there business. Don't miss out on this must have tool. `, branchName: 'fba-multitool' },
  { imgName: 'figma-land', projectName: 'Figma Land', projectDescription: 'Most calendars are designed for teams. Figma Land is designed for freelancers.', branchName: 'figma-land' },
  { imgName: 'tourism', projectName: 'Tourism', projectDescription: 'We always make our customers happy by providing as many choices as possible. ', branchName: 'tourism' },
  { imgName: 'ension-capital', projectName: 'Envision Capital', projectDescription: 'You have an idea, IncuPie has a plan. We offer everything you need to go from an early-stage idea to a successful exchange listing.', branchName: 'envision-capital' },
  { imgName: 'travel-busses', projectName: 'The Box', projectDescription: 'Along with reliability, we provide facilities such as warehouses, customer relations, inventory management, etc. ', branchName: 'the-box' },
  { imgName: 'flex-force', projectName: 'Flex Force', projectDescription: 'Manifesting your imagination with our on-demand developer workforces. So, time to get it done!', branchName: 'flex-force' },
  { imgName: 'light-theme', projectName: 'Two Themes Landing Page', projectDescription: ' We are an innovative global real estate investment management company unlike any other. ', branchName: 'themes-landing-page' },
  { imgName: 'izzy-health', projectName: 'Izzy Health', projectDescription: 'We help you manage and protect you today and tomorrow. Protecting yourself and family is the key.', branchName: 'izzy-health' },
]

const renderProjects = () => {
  const projectsContainer = document.getElementById('projectsContainer');
  const allCards = projectsConfigs.map(({ imgName, projectName, projectDescription, branchName }) => getProjectCard(imgName, projectName, projectDescription, branchName)).join('\n');
  projectsContainer.innerHTML = allCards;
}

renderProjects();
