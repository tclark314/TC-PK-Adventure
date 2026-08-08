let passwordButton = document.getElementById("beginButton");
let passwordBox = document.getElementById("passwordInput");
let nightScene = document.getElementById("nightScene");




const pathOne = [
    {x: 105, y: 890, foot: "left", angle: -25},
    {x: 137, y: 855, foot: "right", angle: 0},
    {x: 126, y: 802, foot: "left", angle: -30},
    {x: 161, y: 779, foot: "right", angle: 0},
    {x: 158, y: 725, foot: "left", angle: -30},
    {x: 186, y: 693, foot: "right", angle: 0},
    {x: 176, y: 643, foot: "left", angle: -35},
    {x: 214, y: 607, foot: "right", angle: 15},
    {x: 201, y: 562, foot: "left", angle: -55},
    {x: 262, y: 543, foot: "right", angle: 40},
    {x: 268, y: 506, foot: "left", angle: -75},
    {x: 347, y: 528, foot: "right", angle: 90},
    {x: 362, y: 495, foot: "left", angle: -120},
    {x: 431, y: 557, foot: "right", angle: 120},
    {x: 449, y: 527, foot: "left", angle: -145},
    {x: 491, y: 600, foot: "right", angle: 115},
    {x: 527, y: 592, foot: "left", angle: 220},
    {x: 558, y: 647, foot: "right", angle: 100},
    {x: 605, y: 631, foot: "left", angle: 250},
    {x: 638, y: 664, foot: "right", angle: 70},
    {x: 688, y: 627, foot: "left", angle: -80},
    {x: 731, y: 643, foot: "right", angle: 60},
    {x: 758, y: 598, foot: "left", angle: -75},
    {x: 811, y: 604, foot: "right", angle: 25},
    {x: 806, y: 546, foot: "left", angle: -40},
    {x: 846, y: 538, foot: "right", angle: 0},
    {x: 817, y: 471, foot: "left", angle: 0},
    {x: 853, y: 453, foot: "right", angle: 0},
    {x: 821, y: 394, foot: "left", angle: 0},
    {x: 849, y: 394, foot: "right", angle: 0},
];
const pathTwo = [
    {x: 1809, y: 675, foot: "left", angle: 50},
    {x: 1787, y: 633, foot: "right", angle: -75},
    {x: 1734, y: 639, foot: "left", angle: 60},
    {x: 1715, y: 607, foot: "right", angle: -80},
    {x: 1662, y: 618, foot: "left", angle: 55},
    {x: 1651, y: 589, foot: "right", angle: -90},
    {x: 1589, y: 609, foot: "left", angle: 80},
    {x: 1573, y: 584, foot: "right", angle: -95},
    {x: 1519, y: 630, foot: "left", angle: -265},
    {x: 1489, y: 606, foot: "right", angle: -110},
    {x: 1448, y: 666, foot: "left", angle: 115},
    {x: 1426, y: 642, foot: "right", angle: -140},
    {x: 1396, y: 704, foot: "left", angle: 110},
    {x: 1366, y: 682, foot: "right", angle: -135},
    {x: 1329, y: 729, foot: "left", angle: 90},
    {x: 1294, y: 697, foot: "right", angle: -95},
    {x: 1259, y: 727, foot: "left", angle: 70},
    {x: 1230, y: 679, foot: "right", angle: -75},
    {x: 1193, y: 704, foot: "left", angle: 45},
    {x: 1170, y: 643, foot: "right", angle: -70},
    {x: 1130, y: 664, foot: "left", angle: 45},
    {x: 1110, y: 609, foot: "right", angle: -60},
    {x: 1072, y: 620, foot: "left", angle: 35},
    {x: 1062, y: 565, foot: "right", angle: -50},
    {x: 1018, y: 567, foot: "left", angle: 30},
    {x: 1013, y: 513, foot: "right", angle: -50},
    {x: 964, y: 512, foot: "left", angle: 25},
    {x: 968, y: 455, foot: "right", angle: -45},
    {x: 931, y: 454, foot: "left", angle: 5},
    {x: 949, y: 393, foot: "right", angle: 0},
    {x: 921, y: 392, foot: "left", angle: 0},
];

startPath(pathOne);

setTimeout(function () {
    startPath(pathTwo);
}, 2100);

function placeFootstep(step, isLast) {
    const footprint = document.createElement("img");
    footprint.src = "Images/footprint.svg";
    footprint.step = step;
    if (isLast) {
        footprint.classList.add("lastStep");
    }
    footprint.classList.add("footprint");

    if (step.foot === "left") {
        footprint.classList.add("leftFoot");
        footprint.style.rotate = -1 * step.angle + "deg";
    }
    else {
        footprint.style.rotate = step.angle + "deg";
    }

    footprint.style.left = step.x + "px";
    footprint.style.top = step.y +"px";

    document.body.appendChild(footprint);
    if(!isLast){
        setTimeout(function () {
            footprint.remove();
        }, 2500);
    }
    setTimeout (function () {
        footprint.classList.remove("lastStep");
     }, 3000);
}

function startPath(path) {
    let currentStep = 0;
    const walk = setInterval(function () {
        const isLast = currentStep >= path.length - 2;
        placeFootstep(path[currentStep], isLast);

        currentStep++;

        if(currentStep >= path.length){
            clearInterval(walk);
        }
    }, 450);
}

passwordButton.onclick = function() {
    let password = passwordBox.value;
    if (password === "whimsical" || password === "Whimsical") {
        document.getElementById("mainStar").classList.add("zoom");
        setTimeout(function () {
            document.getElementById("whiteTransition").classList.add("fade");
        }, 1200);

        setTimeout(function() {
            window.location.href = "home.html";
        }, 2500);
        
    }
};

setTimeout (function () {
    nightScene.classList.add("visible");
}, 23000);

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
    nightScene.appendChild(star);
}

