let radius = 350;
let angle = 0; 
let lettersPlanet = document.getElementById("lettersPlanet");
let futurePlanet = document.getElementById("futurePlanet");
let timelinePlanet = document.getElementById("timelinePlanet");
let stars = document.getElementById("stars");
let backButton = document.getElementById("backButton");

lettersPlanet.onclick = function() {
    window.location.href = "letter.html";
};


timelinePlanet.onclick = function() {
    window.location.href = "timeline.html";
};

futurePlanet.onclick = function() {
    window.location.href = "future.html"
}


function movePlanet(planet, angle, radius) {
    let angleInRadians = angle * Math.PI / 180;
    let centerX = 400;
    let centerY = 400;
    let x = centerX + radius * Math.cos(angleInRadians);
    let y = centerY + radius * Math.sin(angleInRadians);
    planet.style.left = (x - 40) + "px";
    planet.style.top = (y - 40) + "px";
}

function animatePlanets() {
    movePlanet(lettersPlanet, angle, radius);
    movePlanet(timelinePlanet, angle + 120, radius)
    movePlanet(futurePlanet, angle + 240, radius)
    angle += 0.1;
    requestAnimationFrame(animatePlanets);
}

animatePlanets();


for(let i = 0; i<150; i++){
    let star = document.createElement("div");
    star.className = "star";

    let speed = Math.random() * 4 + 1;

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s"
    star.style.animationDuration = speed + "s";
    star.style.opacity = Math.random();
    let radius = Math.random() * 4 + 1 + "px";
    star.style.width = radius;
    star.style.height = radius;
    stars.appendChild(star);
}

function createShootingStar() {
    let shootingStar = document.createElement("div");
    shootingStar.className = "shootingStar";
    document.getElementById("universe").appendChild(shootingStar);

    let starX = 0; 
    let starY = 0;
    let speedX = Math.random() * 10 + 4;
    let speedY = Math.random() * 10 + 4;
    let angle = Math.atan2(speedY, speedX) * 180/Math.PI;
    shootingStar.style.transform = `rotate(${angle}deg)`;
    animateStars(shootingStar, starX, starY, speedX, speedY);
}



function animateStars(shootingStar, starX, starY, speedX, speedY) {
    starX += speedX;
    starY += speedY;
    shootingStar.style.left = starX + "px";
    shootingStar.style.top = starY + "px";

    if (starX > window.innerWidth || starY > window.innerHeight) {
        shootingStar.remove();
        let randomTime = Math.random() * 20000 + 10000;
        setTimeout(createShootingStar, randomTime);
        return;
    }

    requestAnimationFrame(() => {
        animateStars(shootingStar, starX, starY, speedX, speedY);
    });

}
createShootingStar();

backButton.onclick = function() {
    window.location.href = "index.html";
};