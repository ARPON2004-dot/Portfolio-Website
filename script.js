// ===== Typing Effect =====

const words = [
    "C++ Developer",
    "Web Developer",
    "CSE Student",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    document.getElementById("typing-text").textContent =
        currentWord.substring(0, charIndex);

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(type, speed);
}

type();


// ===== Mobile Menu =====

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    navMenu.classList.toggle("active");
};


// ===== Scroll Reveal =====

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));


// ===== Active Navbar =====

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
// ===== Scroll Progress Bar =====

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

if(progressBar){
    progressBar.style.width = progress + "%";
}

});
// ===== Close Menu After Click =====

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
// ===== EmailJS =====

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_b6dpjsb",
            "template_klafq09",
            this
        )
        .then(() => {

            alert("Message Sent Successfully!");
            contactForm.reset();

        })
        .catch((error) => {

            console.log(error);
            alert(error.text);

        });

    });

}