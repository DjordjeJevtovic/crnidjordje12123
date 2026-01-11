//    DINAMICKA NAVIGACIJA

let navContent = ["Home", "About", "Services", "Projects", "Contact", "Author"];
let navHref = [
  "index.html",
  "index.html#about",
  "index.html#services",
  "index.html#projects",
  "contact.html",
  "#",
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

