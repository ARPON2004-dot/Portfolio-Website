


// ===== Mobile Menu =====

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-links a");
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

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
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
const submitBtn = contactForm.querySelector("button");

submitBtn.disabled = true;
submitBtn.innerHTML = "Sending...";
        emailjs.sendForm(
            "service_b6dpjsb",
            "template_klafq09",
            this
        )
       .then(() => {

    // Auto Reply Email
    emailjs.send(
        "service_b6dpjsb",
        "template_5vkem09",
        {
            name: contactForm.name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value
        }
    );

    submitBtn.innerHTML = "✓ Message Sent";

    contactForm.reset();

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";
    }, 2500);

})
        .catch((error) => {

    console.log(error);

    submitBtn.disabled = false;
    submitBtn.innerHTML = "❌ Failed";

    setTimeout(() => {
        submitBtn.innerHTML = "Send Message";
    }, 2500);

});

    });

}
const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.width = entry.target.dataset.width;

        }

    });

}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ===== Cursor Glow =====
const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.classList.add("hide");
    }

});
if (document.getElementById("typing-text")) {

    new Typed("#typing-text", {
        strings: [
            "Computer Science Student",
            "Frontend Web Developer",
            "C++ Programmer",
            "Problem Solver"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

}