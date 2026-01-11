//    DINAMICKA NAVIGACIJA

let navContent = ["Home", "About", "Services", "Projects", "Contact", "Author"];
let navHref = [
  "index.html",
  "#about",
  "#services",
  "#projects",
  "contact.html",
  "author.html",
];

let navigation = '<ul class="navbar-nav ms-auto">';

for (let i = 0; i < navContent.length; i++) {
  navigation += `
<li>
<a href="${navHref[i]}" class="nav-item nav-link">${navContent[i]}</a>
</li>
`;
}
navigation += "</ul>";

document.getElementById("navbarCollapse").innerHTML = navigation;

//   DINAMICKI ROBOTI
let robotArr = [
  "Crafted Furniture",
  "Sustainable Material",
  "Innovative Architects",
  "Budget Friendly",
];

let robot = "";

for (let i = 0; i < robotArr.length; i++) {
  robot += `
    <div class="col-md-6 col-lg-3">
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0 btn-square border border-2 border-white me-3">
                <i class="fa fa-robot text-primary"></i>
            </div>
            <h5 class="lh-base mb-0">${robotArr[i]}</h5>
        </div>
    </div>
    `;
}

document.getElementById("roboti").innerHTML = robot;

//  DINAMICKI SOCIAL MEDIA

let socialMediaArr = ["facebook-f", "twitter", "instagram", "linkedin-in"];

let socialMedia = "";

for (let i = 0; i < socialMediaArr.length; i++) {
  socialMedia += `
    <a class="btn btn-outline-primary btn-square border-2 me-2" href="#!">
        <i class="fab fa-${socialMediaArr[i]}"></i>
    </a>
    `;
}

document.getElementById("historySocialMedia").innerHTML = socialMedia;

//DINAMICKI FEATURES

let featuresIkonica = [
  "calendar-alt",
  "tasks",
  "pencil-ruler",
  "user",
  "hand-holding-usd",
  "check",
];
let featuresH4 = [
  "25+ Years Experience",
  "Best Interior Design",
  "Innovative Architects",
  "Customer Satisfaction",
  "Budget Friendly",
  "Sustainable Material",
];

let featuresText = [
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
  `Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor eirmod magna dolore erat amet`,
];
let featuresDelay = ["0.1s", "0.3s", "0.5s", "0.1s", "0.3s", "0.5s"];

let featuresContent = "";

for (let i = 0; i < featuresH4.length; i++) {
  featuresContent += `
    <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="${featuresDelay[i]}">
            <i class="fa fa-${featuresIkonica[i]} fa-5x text-primary mb-4"></i>
            <h4>${featuresH4[i]}</h4>
            <p class="mb-0">
              ${featuresText[i]}
            </p>
          </div>
    `;
}

document.getElementById("features").innerHTML = featuresContent;

//DINAMICKI PROJECT PHOTOES

let projectPhotoesNumber = ["72", "67", "53", "33", "87", "69"];
let projectRooms = [
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Living Room",
  "Furniture",
  "Rennovation",
];

let projectPhotoesContent = "";
for (let i = 0; i < projectRooms.length; i++) {
  projectPhotoesContent += `
    <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.${i + 2}s">
        <div class="project-item position-relative overflow-hidden">
            <img class="img-fluid w-100" src="img/project-${
              i + 1
            }.jpg" alt="Project photo ${i + 1}" />
                <a class="project-overlay text-decoration-none" href="#!">
                    <h4 class="text-white">${projectRooms[i]}</h4>
                    <small class="text-white">${
                      projectPhotoesNumber[i]
                    } Projects</small>
                </a>
        </div>
    </div>
    `;
}

document.getElementById("projectsPhotoes").innerHTML = projectPhotoesContent;

//DINAMICKI SERVICES PHOTOES
let servicesPhotoesH3 = [
  "Interior Design",
  "Implement",
  "Renovation",
  "Commercial",
];

let servicesPhotoesBoja = ["primary", "light", "light", "primary"];

let servicesPhotoesText = [
  `Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.`,
  `Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.`,
  `Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.`,
  `Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.`,
];

let servicesPhotoesContent = "";
for (let i = 0, j = 2; i < servicesPhotoesH3.length; i++, j + 2) {
  servicesPhotoesContent += `
    <div class="col-md-6 wow fadeIn" data-wow-delay="0.${j}s">
                <div
                  class="service-item h-100 d-flex flex-column justify-content-center bg-${
                    servicesPhotoesBoja[i]
                  }"
                >
                  <a href="#!" class="service-img position-relative mb-4">
                    <img
                      class="img-fluid w-100"
                      src="img/service-${i + 1}.jpg"
                      alt=""
                    />
                    <h3>${servicesPhotoesH3[i]}</h3>
                  </a>
                  <p class="mb-0">
                    ${servicesPhotoesText[i]}
                  </p>
                </div>
              </div>
    `;
}

document.getElementById("servicesPhotoes").innerHTML = servicesPhotoesContent;

//DINAMICKE TEAM PHOTOES
let teamPhotoesName = [
  "Boris Johnson",
  "Donald Pakura",
  "Bradley Gordon",
  "Alexander Bell",
];
let teamPhotoesContent = "";
for (let i = 0, j = 1; i < teamPhotoesName.length; i++, j + 2) {
  teamPhotoesContent += `
    <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.${j}s">
        <div class="team-item position-relative overflow-hidden">
            <img class="img-fluid w-100" src="img/team-${
              i + 1
            }.jpg" alt="Team photo ${i + 1}" />
            <div class="team-overlay">
                <small class="mb-2">Architect</small>
                <h4 class="lh-base text-light">${teamPhotoesName[i]}</h4>
                <div class="d-flex justify-content-center">
                  <a
                    class="btn btn-outline-primary btn-sm-square border-2 me-2"
                    href="#!"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn btn-outline-primary btn-sm-square border-2 me-2"
                    href="#!"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="btn btn-outline-primary btn-sm-square border-2 me-2"
                    href="#!"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    class="btn btn-outline-primary btn-sm-square border-2 me-2"
                    href="#!"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
            </div>
        </div>
    </div>
`;
}
document.getElementById("teamPhotoes").innerHTML = teamPhotoesContent;

//DINAMICKI POPULAR LINK

let popularLinkText = [
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms & Condition",
  "Career",
];

let popularLinkContent = "<h5 class='text-white mb-4'>Popular Links</h5>";
for (let i = 0; i < popularLinkText.length; i++) {
  popularLinkContent += `
    <a class="btn btn-link" href="#!">${popularLinkText[i]}</a>
    `;
}

document.getElementById("popularLink").innerHTML = popularLinkContent;

//DINAMICKI SERVICES FOOTER

let servicesFooterText = [
  "Interior Design",
  "Project Planning",
  "Renovation",
  "Implement",
  "Landscape Design",
];
let servicesFooter = "<h5 class='text-white mb-4'>Our Services</h5>";

for (let i = 0; i < servicesFooterText.length; i++) {
  servicesFooter += `
        <a class="btn btn-link" href="#!">${servicesFooterText[i]}</a>
    `;
}

document.getElementById("servicesFooter").innerHTML = servicesFooter;
