var tl = new TimelineMax(),
    coin = document.querySelector(".coin"),
    dash = document.querySelectorAll(".dash"),
    circle = document.querySelector(".circle"),
    letters = document.querySelector(".letters");

const logoAni = () => {
    tl.from(coin, 1, {
        rotation: "180",
        ease: "Bounce.easeOut"
    });
    tl.to(dash, 1, {
        opacity: 0
    });
    tl.to(letters, 1, {
        scale: 1.5,
        delay: -1,
    });

}

