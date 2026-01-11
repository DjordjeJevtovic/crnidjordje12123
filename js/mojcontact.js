//    DINAMICKA NAVIGACIJA

let navContent = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
  "Author",
  "Download",
];
let navHref = [
  "index.html",
  "index.html#about",
  "index.html#services",
  "index.html#projects",
  "#",
  "author.html",
  "iStudio - Web programiranje 1.zip",
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

//////////////////// VALIDACIJA FORME ////////////////////////
const form = document.getElementById("contactForm");

const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameCheck = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,12}$/;

const emailValue = document.getElementById("email");
const nameValue = document.getElementById("name");
const lastNameValue = document.getElementById("lastName");
const messageValue = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let provera = true;

  if (nameValue.value.trim() === "") {
    inputError(nameValue, "The name field must be filled in");
    provera = false;
  } else if (!validName(nameValue.value.trim())) {
    inputError(
      nameValue,
      "Name has to start with an uppercase letter and has to have at least 2 letters"
    );
    provera = false;
  } else {
    inputSuccess(nameValue);
  }

  if (lastNameValue.value.trim() === "") {
    inputError(lastNameValue, "The last name field must be filled in.");
    provera = false;
  } else if (!validName(lastNameValue.value.trim())) {
    inputError(
      lastNameValue,
      "Last name has to start with an uppercase letter and has to have at least 2 letters"
    );
    provera = false;
  } else {
    inputSuccess(lastNameValue);
  }

  if (messageValue.value.trim() === "") {
    inputError(messageValue, "The message field must be filled in.");
    provera = false;
  } else {
    inputSuccess(messageValue);
  }

  if (emailValue.value === "") {
    inputError(emailValue, "The email field must be filled in.");
    provera = false;
  } else if (!validEmail(emailValue.value)) {
    inputError(emailValue, "Please enter a valid email address.");
    provera = false;
  } else {
    inputSuccess(emailValue);
  }

  function inputError(input, message) {
    const grupa = input.parentElement;
    const span = grupa.nextElementSibling;
    const p = document.createElement("p");

    span.classList.add("error");
    span.classList.remove("success");

    grupa.classList.add("errorBorder");
    grupa.classList.remove("successBorder");

    span.innerHTML = "";
    p.textContent = message;
    span.appendChild(p);
    span.style.display = "block";
  }

  function inputSuccess(input) {
    const grupa = input.parentElement;
    const span = grupa.nextElementSibling;

    span.classList.add("success");
    span.classList.remove("error");

    grupa.classList.add("successBorder");
    grupa.classList.remove("errorBorder");

    span.innerHTML = "";
    span.style.display = "none";
  }

  function validEmail(email) {
    return emailCheck.test(email);
  }

  function validName(name) {
    return nameCheck.test(name);
  }

  if (provera) {
    const successMessage = document.createElement("p");
    successMessage.textContent = "Message sent successfully";
    successMessage.style.color = "green";
    form.appendChild(successMessage);

    form.reset();

    setTimeout(() => successMessage.remove, 5000);
  }
});
