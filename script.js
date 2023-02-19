/* ----- Preloader ----- */

var preloader = document.getElementById('loading');

function preloaderFunction() {
    preloader.style.display = 'none';
}

/* ----- Navbar Menu ----- */

$(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
});

/* ----- Typing Animation ----- */

var typed = new Typed(".typing", {
    strings:["","A C++ Coder","Web Developer","Open Source Enthusiast","into Machine Learning"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/* ----- Custom Cursor ----- */

{
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e"
    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;
    
    });

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

    animateCircles();
}

/* ----- Smooth Scrolling ----- */

$(document).ready(function(){
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 860, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
    });
});
