let backButton = document.getElementById("backButton");

const L1 = {
    title: "Peyton, ",
    body: "First off, Congratulations on graduating!!! This is supposed to be a graduation present, but I might just be using that as an excuse to write you a nice letter. But shhhh don’t tell. I am so proud of what you have accomplished over your high school career! Although we only really began getting to know each other towards the end of it, I have been completely blown away by your intelligence and mind. I love that you love to learn and it’s been so fun going down random rabbit holes learning together. Your desire to learn and curiosity is something that is going to get you far in life. Maybe it is because our minds work so differently, but I genuinely do believe that you are smarter than me, no matter how much you protest. But more importantly Peyton, I admire your character. You are so strong in your values and beliefs, and that is rare trait to find. Peyton, you also have a huge heart and are one of the most compassionate people I’ve ever met. I really hope that you can see that it is not a “flaw” or “issue” to be emotional. It is a gift God has given you and you can use it to help people because you truly feel for them. I really look up to you in your compassion, and I have been trying to learn from you. When brainstorming what creative things to do with this letter, my mind went to the Fig Tree Poem. I don’t really know why, but I know it is your favorite and it feels very fitting when thinking about graduation. Peyton, I know that poem speaks to you because you can relate to it. I know that you are afraid of choosing the “wrong” path and regretting it. I think I’ve told you this, but I will tell you again, I don’t believe there is a wrong path to take. But I’ve really thought through why I believe this and here’s my expert thoughts on this poem as a math guy. I think the poem is incomplete. The character never decides and stands frozen in fear, losing all the potential futures in the process. But what if she picked one? Is it just over after that? Does she just get that one fig and lose everything else? I don’t think so. I think what the character fails to see is that each fig leads to another fruit tree, where another decision awaits. And who is to say the some of the figs she feared losing don’t make a reappearance on the next fruit tree? They could? Life doesn’t consist of one choice. It’s a journey that takes you past so many fruit trees. I had a weird urge to draw the other day, so I decided to draw a picture to help represent this idea. I’m no expert artist but it didn’t turn out too bad so I’m giving it to you so you can put an image with my idea. So, I hope when you are faced with a big decision, maybe you will think back to this or visualize my drawing, so you don’t end up like the character in the poem. But Peyton, when I see you, I see someone who is going to fill her pool full of fruit throughout her life. Someone who is going to embrace the whimsy and adventure of life. I know that sometimes the future is uncertain. I know each choice might feel scary in the moment, but you know the One in control. Peyton you are a daughter of God. You are not defined by your mistakes. You can play absolutely atrocious in golf, fail every test you take, lose a court case, or make any number of possible mistakes. But guess what. God doesn’t care; He still loves you! But along with this, despite what the world tells you, you are not defined by your successes either. No matter what you accomplish in your life (and I know it’ll be a lot) God will not love you more than he does at the instant you are reading this. Peyton, you are loved beyond comprehension by the creator of the universe. He literally has no more love to give you when you succeed because he’s already given you everything. You are valuable, not because of anything you could ever say or do, but solely because God made you in his image. As I was writing this, I wanted to include something about how much I care for you. But the more I thought about it, the more I realized that God’s love for you completely blows mine out of the water and makes mine look like a speck of dust next to the sun. So, Peyton, I don’t know what the future holds. But for however long I am in your life, whether it be until tomorrow or for the rest of your life, I promise to always point you back to Him and never let you forget the love He has for you. I am so grateful for you, and I can’t wait to see what adventure God takes you on next! Love,TC"
}
const L2 = {
    title: "My Sweet TC, ",
    body: "There are many things I want to say to you , but I have a limited triangular space. So I will try to make this all fit. I know I have told you that when my feelings get big, I write letters to those people. needless to say, you have quite a few written about you. All good things, don't worry. The summary of those letters (maybe you will read them someday...) can basically be chalked up to the reality that no one has ever treated me with such kindness and patience and gentleness as you have. As a person who has really struggled with loving myself, I never though I was deserving of any of the things you freely give to me. You made me realize that I am worth much more than I used to think. You pick me up when I am down, you have fantastic advice to give when I need it, and most importantly, you constantly bring me back home to God. I am so incredibly blessed that I don't have to look far at all to see God's love for me - it shines through you. Thank you for that. Thank you also for sharing your full self, including your vulnrabilities, with me. You may say sorry for dumping that on you, but I want you to know it is a privelege for me to witness your humanes and your growth and to be a safe space for you through all of it the way you are for me. Every second I spend with you is like a prayer being answered (even if it's just arguing over who should pick where to eat). I will never forget the huge smile on my face after the first date we went on; in fact, I have video evidence of myself from before and after... maybe I'll show you those someday as well. Before I run out of space, I also wanted to tell you how incredibly proud I am and excited for you. I know your life will be wonderful because you are wonderfull and it will be filled with love because you are filled with love. Never stop loving. It is your biggest strength. 1 Corithians 13. Your Peyton K"
}
const L3 = {
    title: "",
    body: ""
}
const letters = {
    letter1: L1,
    letter2: L2,
    letter3: L3
}

let letterViewer = document.getElementById("letterViewer");
let closeLetter = document.getElementById("closeLetter");
let letterTitle = document.getElementById("letterTitle");
let letterBody = document.getElementById("letterBody");
let overlay = document.getElementById("overlay");
let envelopes = document.querySelectorAll(".envelope");
let currentEnvelope = null;

letterViewer.classList.add("hidden");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const size = Math.random() * 20 + 12; 

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.width = size + "px";
    petal.style.width = size * 1.3 + "px";
    petal.style.opacity = 0.4 + Math.random() * 0.6;
    petal.style.rotate = Math.random() * 360 + "deg";
    petal.style.animationDuration = 
        (8 + Math.random() * 6) + "s";

    petal.style.animationDelay = 
        -(Math.random() * 15) + "s";

    document.body.appendChild(petal);
}

for(let i = 0; i < 20; i++) {
    createPetal();
}

backButton.onclick = function() {
    window.location.href = "home.html";
};
function openLetter(letter){
   letterTitle.textContent = letter.title;
   letterBody.textContent = letter.body;
   overlay.style.opacity = .15;
   letterViewer.classList.remove("hidden");
   setTimeout(function () {
    letterViewer.classList.add("visible");
   }, 50);
}


envelopes.forEach(function (envelope) {

    envelope.onclick = function() {
        currentEnvelope = envelope;
        const paper = currentEnvelope.querySelector(".paper");
        const rect = envelope.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight /2;
        const envelopeCenterX = rect.left + rect.width / 2;
        const envelopeCenterY = rect.top + rect.height / 2;
        const moveX = centerX - envelopeCenterX;
        const moveY = centerY - envelopeCenterY;

        envelope.style.setProperty("--moveX", moveX + "px");
        envelope.style.setProperty("--moveY", moveY + "px");

        envelope.classList.add("center");
        envelope.classList.add("selected");

        setTimeout (function () {
            envelope.classList.add("open");
        }, 1500);
        setTimeout(function () {
                envelope.classList.add("slide");
        }, 2500);
        setTimeout (function () {
            paper.classList.add("above");
        }, 2600);
        setTimeout (function () {
            envelope.classList.add("fullscreen");
            envelope.classList.add("fullyAbove");
        }, 4500);

        
        

        
        let id = envelope.id;
        setTimeout(function () {
            openLetter(letters[id]);
        }, 5500);
    }

    closeLetter.onclick = function() {
        const paper = currentEnvelope.querySelector(".paper");
        overlay.style.opacity = 0;
        letterViewer.classList.remove("visible");
        setTimeout( function() {
            letterViewer.classList.add("hidden");
            currentEnvelope.classList.remove("fullscreen");
        }, 3000);
        setTimeout(function () {
            currentEnvelope.classList.remove("slide");
             currentEnvelope.classList.remove("fullyAbove");
        }, 4000);
        setTimeout (function () {
            paper.classList.remove("above");
        }, 5000);
         setTimeout(function () {
            currentEnvelope.classList.remove("open");
        }, 5000);
        setTimeout(function () {
            currentEnvelope.classList.remove("selected");
        }, 7000);
        setTimeout( function () {
            currentEnvelope.classList.remove("center");
        }, 5500);

        
        
    }
});
