/* ----- Parallax Effect ----- */

{
    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        // Apply parallax for each section
        document.querySelectorAll(".parallax-section").forEach((section) => {
            const speed = section.getAttribute("data-speed") || 0.5;
            const offset = scrollPosition * speed;
            section.style.backgroundPosition = `center ${offset}px`;
        });
    });
}

/* ----- Home Page Background ----- */
{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let canvasRect = canvas.getBoundingClientRect();
    canvas.width = canvasRect.width;
    canvas.height = canvasRect.height;

    const colors = ['#FF5733', '#FFBD33', '#33FF57', '#33C5FF', '#7A33FF', '#FF33E9', '#FFE233'];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 2 - 1;
            this.size = Math.random() * 3 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -1;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color; // Particle color
            ctx.fill();
        }
    }

    // Create particles
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
    }

    animate();

    window.addEventListener('resize', function () {
        canvasRect = canvas.getBoundingClientRect();
        canvas.width = canvasRect.width;
        canvas.height = canvasRect.height;
    });
}

/* ----- Custom Cursor Vanilla JS ----- */
{
    const coords = {
        x: 0,
        y: 0
    };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
        "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
        "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
        "#950f5f", "#830060", "#7c0060", "#680060", "#60005f"
    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    function updateCoordinates(x, y) {
        coords.x = x;
        coords.y = y;
    }

    window.addEventListener("mousemove", function (e) {
        updateCoordinates(e.clientX, e.clientY);
    });

    window.addEventListener("touchmove", function (e) {
        const touch = e.touches[0];
        updateCoordinates(touch.clientX, touch.clientY);
    });

    // Function to hide the cursor when the mouse leaves the window
    function hideCursor() {
        const body = document.querySelector('body');
        body.addEventListener('mouseleave', function () {
            circles.forEach(function (circle) {
                circle.style.opacity = 0;
            });
        });
        body.addEventListener('mouseenter', function () {
            circles.forEach(function (circle) {
                circle.style.opacity = 1;
            });
        });
    }

    hideCursor();

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        requestAnimationFrame(animateCircles);
    }

    // Function to clear the circles when the page is loaded
    function clearCircles() {
        circles.forEach(function (circle) {
            circle.style.opacity = 0;
        });
    }

    window.addEventListener("load", clearCircles);
    animateCircles();
}

/* ----- Smooth Scrolling Vanilla JS ----- */
{
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    const hash = this.hash;

                    // Using window.scrollTo with behavior: 'smooth' to add smooth page scroll
                    const targetElement = document.querySelector(hash);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.history.pushState(null, null, hash);
                    }
                }
            });
        });
    });
}

/* ----- Load the sections from the JSON ----- */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize WOW.js
    new WOW().init();

    // Load skills
    fetch('assets/jsons/skills.json')
        .then(response => response.json())
        .then(skills => {
            const skillBoxes = document.getElementById('skill-boxes');
            skills.forEach(skill => {
                const box = document.createElement('div');
                box.classList.add('box', 'wow', 'animate__animated', 'animate__zoomInDown');
                box.setAttribute('data-wow-offset', '100');
                box.innerHTML = `
                    <img src="${skill.image}" width="96" height="96" alt="${skill.title}"></img>
                    <div class="topic">${skill.title}</div>
                `;
                skillBoxes.appendChild(box);
            });
        })
        .catch(error => console.error('Error loading skills:', error));

    // Load experiences
    fetch('assets/jsons/experiences.json')
        .then(response => response.json())
        .then(experiences => {
            const experienceBoxes = document.getElementById('experience-boxes');
            experiences.forEach(experience => {
                const box = document.createElement('div');
                box.classList.add('box');
                box.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/>
                    </svg>
                    <span class="duration">${experience.duration}</span>
                    <h3 class="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="190">${experience.role} @ ${experience.company}</h3>
                    <ul>
                        ${experience.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                experienceBoxes.appendChild(box);
            });
        })
        .catch(error => console.error('Error loading experiences:', error));

    // Load projects
    fetch('assets/jsons/projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectContent = document.getElementById('project-content');
            projects.forEach(project => {
                const box = document.createElement('div');
                box.classList.add('box', 'wow', 'animate__animated', 'animate__zoomIn');
                box.setAttribute('data-wow-offset', '250');
                box.innerHTML = `
                    <div class="tooltip">
                        <a href="${project.sourceCode}" target="_blank">
                            <img src="assets/images/projects/github.png" width="100" height="100" alt="GitHub Source Code">
                        </a>
                        <span class="tooltiptext">Source Code</span>
                    </div>
                    <div class="tooltip">
                        ${project.liveProject ? `<a href="${project.liveProject}" target="_blank"><img src="assets/images/projects/link.png" width="100" height="100" alt="Live Project"></a><span class="tooltiptext">Live Project</span>` : `<img src="assets/images/projects/link.png" width="100" height="100" alt="No Demo"><span class="tooltiptext">No Demo</span>`}
                    </div>
                    <img class="snapshot" src="${project.image}" loading="lazy" alt="${project.title} Image">
                    <div class="topic">${project.title}</div>
                    <p>${project.description}</p>
                    ${project.techs.map(tech => `<span class="techs">${tech}</span>`).join('')}
                `;
                projectContent.appendChild(box);
            });
        })
        .catch(error => console.error('Error loading projects:', error));

    // Load certificates
    fetch('assets/jsons/certificates.json')
        .then(response => response.json())
        .then(certificates => {
            const certificateBoxes = document.getElementById('certificate-boxes');
            certificates.forEach(certificate => {
                const box = document.createElement('div');
                box.classList.add('box');
                box.innerHTML = `
                    <div class="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="250">
                        <img src="${certificate.image}" loading="lazy" width="600" height="600">
                    </div>
                    <div class="topic">${certificate.title}</div>
                    <div class="topic1">(${certificate.date})</div>
                `;
                certificateBoxes.appendChild(box);
            });
        })
        .catch(error => console.error('Error loading certificates:', error));
});

/* ----- Preloader ----- */
{
    window.addEventListener('load', function () {
        var preloader = document.getElementById('loading');
        preloader.style.display = 'none';
    });
}

/* ----- Navbar Menu ----- */
{
    document.querySelectorAll(".menu-btn").forEach(function (menuBtn) {
        menuBtn.addEventListener("click", function () {
            // Toggle the 'active' class on the menu
            const menu = document.querySelector(".navbar .menu");
            if (menu) {
                menu.classList.toggle("active");
            }

            // Toggle the 'active' class on the icon inside the menu button
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("active");
            }
        });
    });
}

/* ----- Navbar Menu Active Element ----- */
{
    document.addEventListener("DOMContentLoaded", function () {
        const menuItems = document.querySelectorAll(".menu-btn");
        const sections = document.querySelectorAll("section");

        window.addEventListener("scroll", function () {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY >= sectionTop - sectionHeight / 7) {
                    current = section.getAttribute("id");
                }
            });

            menuItems.forEach(item => {
                item.classList.remove("active");
                const href = item.getAttribute("href");
                if (href && href.slice(1) === current) {
                    item.classList.add("active");
                }
            });
        });
    });
}

/* ----- Typing Animation ----- */
{
    var typed = new Typed(".typing", {
        strings: ["", "A DevOps Engineer", "Open Source Enthusiast", "A Frontend Developer", "into Software Engineering"],
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true
    });
}

/* ----- Scroll To Top ----- */
let calcScrollValue = () => {
    let scrollProg = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProg.style.display = "grid";
    } else {
        scrollProg.style.display = "none";
    }
    scrollProg.style.background = `conic-gradient(var(--hover) ${scrollValue}%, var(--secondary) ${scrollValue}%)`;
};

window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('progress');
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

document.getElementById('progress').addEventListener("click", () => {
    document.documentElement.scrollIntoView({
        behavior: "smooth"
    });
});

// Update title and favicon based on page visibility
document.addEventListener('visibilitychange', function () {
    const favicon = document.getElementById("favicon");

    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Rakesh Roshan";
        favicon.setAttribute("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To My Portfolio";
        favicon.setAttribute("href", "assets/images/favhand.png");
    }
});

// Set the current year dynamically
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/* ----- Disable Developer Mode ----- */
document.addEventListener("keydown", function (e) {
    const blockedKeys = [{
            keyCode: 123
        }, // F12
        {
            ctrlKey: true,
            shiftKey: true,
            keyCode: 'I'.charCodeAt(0)
        }, // Ctrl+Shift+I
        {
            ctrlKey: true,
            shiftKey: true,
            keyCode: 'C'.charCodeAt(0)
        }, // Ctrl+Shift+C
        {
            ctrlKey: true,
            shiftKey: true,
            keyCode: 'J'.charCodeAt(0)
        }, // Ctrl+Shift+J
        {
            ctrlKey: true,
            keyCode: 'U'.charCodeAt(0)
        }, // Ctrl+U
    ];

    for (const key of blockedKeys) {
        if (
            Object.keys(key).every((prop) => e[prop] === key[prop])
        ) {
            e.preventDefault();
            return false;
        }
    }
});