let backButton = document.getElementById("backButton");
let exit = document.getElementById("exit");
let noteViewer = document.getElementById("noteViewer");
let memorydate = document.getElementById("date");
let memoryTitel = document.getElementById("memoryTitle");
let memory = document.getElementById("memory");

let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");
let dot5 = document.getElementById("dot5");
let dot6 = document.getElementById("dot6");
let dot7 = document.getElementById("dot7");

const memories = [
    {
        title: "You Messaged Me On GroupMe",
        date: "Feburary 6, 2026",
        text: "This was the start of it all. You messaged me on GroupMe to ask about the book I talked about during CSU. I have since learned that it was actually Kaylee that sent the message becasue you were too scared. I have also since learned that your reason for reaching out was not really for the book. I don't know why you saw everyone and decided I was the one you wanted but I am so so grateful you reached out. "
    },
    {
        title: "Our First Conversation And Started Texting",
        date: "February 14, 2026",
        text: "After a week of leaving you on delivered, I finally saw your GroupMe message. I will probably keep apologizing until the day I die but I am so sorry, I didnt have my notifications on. I replied to your message and we started talking for the first time. Being completely honest, I thought God had just spoke to you through something I had said about the book, so I didn't catch on that you liked me right away... But you kept the conversation going and seemed like you wanted to talk to me so I gave you my number so we could keep talking. At this point I thought (And still do) that you were out of my league so I was trying not to get my hopes up."
    },
    {
        title: "First Hangout At The Library",
        date: "March 2, 2026",
        text: "We had been talking for a couple of weeks, when we decided to go to the library so I could help you study calc. This was the first time we hungout in person. I'm pretty sure I was helpful to you but you might have been lying to me lol. I think during this time Cooper Miller came up to me while I was helping you and asked me if I knew about a website that had an integral for the day to solve. I wasn't able to solve any of them :( But later I also found out through Ethan that you belived it was your idea to go to the library and that I had to make the next move. I'm pretty sure it was my idea but Oh well it all worked out."
    },
    {
        title: "Second Hangout At The Library",
        date: "March 18, 2026",
        text: "This streches back farther than I can clearly remember lol and it wasn't a first so I don't remember how this came about. But we went to the library again together. I remember sitting upstairs around the corner by the door whose alarm would always go off but you never believed me. And then Nick Lee and some other people sat at our table and he drew those odd cats on the back of my paper. I think we also called that night and I made that absolutely amazing cheat sheet for you. "
    },
    {
        title: "Deciding To Go To Prom",
        date: "April 11, 2026",
        text: "We had been texting for a while at this point and I knew the next step in our relationship was asking you to Prom. At the time it was a decision I had really wrestled with because it was a big step that I felt had weight and I was still a little scared of commiting. After lots of discernment and talking to people I finally asked you to Prom. It was a huge step in our relationship and you seemed happy about it. You then made a groupchat with our Prom group and I found it funny that you believed for so long that Ethan was my closest friend."
    },
    {
        title: "First Date!",
        date: "April 14, 2026",
        text: "This was our official first date! (I'm sorry I forgot the order). But we went and got ice cream at Alexanders. Then we decided to walk around and we walked to Forest Park. We saw Nick Lee again and also Liam Torres because they were at the skatepark. This was also the day you ranted about how you could win every argument if you could backflip. We then walked back to our cars and I read your mind for the first time (Strawberry Dole Whip). Just kidding, I still don't know how to do that, context clues are just my superpower. But then I drove home and literally hit my dads truck in the driveway and I texted you and we got a good laugh out of it. "
    },
    {
        title: "Officially Dating!",
        date: "May 2, 2026",
        text: "This was the day I asked you to be my girlfriend. It was our second date and we went and watched Project Hail Mary. It was a really good movie and we still have to try to watch it again sometime. We then went to chick-fil-a afterwards and ate and just talked for a while. We got kicked out of that chick-fil-a and we just sat in the parking lot and talked for a while. I love our deep conversations. I then drove you home and asked if you wanted to be my girlfriend and you said yes!!! "
    },
    {
        title:"Testimony Walk",
        date: "May 7, 2026",
        text: "We decided that we wanted to hear eachother's testimonies. So we went to Potters Bridge and walked and talked (Which kinda became our signiture). But we both shared our testimonies and it was a honestly amazing. It was amazing to hear your story and I think it helped me truly understand you better. I think it was also good confirmation (for me at least) that we share the same core values and that was very reassuring. "
    },
    {
        title: "Prom",
        date: "May 10, 2026",
        text: "Prom was so much fun! I brought you flowers when I picked you up and you looked absolutely stunning. We went to the park with Ethan and Rowen and took pictures. Then we went to that fancy Italian restaurant and shared a pizza. At the actual dance that was the most fun I have ever had at a school dance. I loved just getting to be with you even though I didn't dance very much. Watching you have fun with all your friends made me very happy. Afterwards you fell asleep in my car while we went and got bought ice cream from Meijer in our fancy clothes. We then played some games with Ethan and Rowen at your house before they left. I then got the courage to put my arm around you for the first time while we were watching SpiderMan into the Spider Verse. What a great night! "
    },
    {
        title: "Peony Festival",
        date: "May 17, 2026",
        text: "You had talked about how you loved Peonies and that they were your favorite flower. So when you said there was a whole festival for them (Which I did not know about before you saying that) I thought I at least should offer to go with you. It was actually a lot of fun! We walked around and you told me about the different types and I honesty don't remeber a thing but that is alright I'll always listen. We then decided to get ice cream at Alexanders afterwards and we just hung out and talked. I do kinda wish I would have bought you some flowers that day but oh well you live and you learn."
    },
    {
        title: "First Kiss",
        date: "June 1, 2026",
        text: "I won't even lie I don't really remeber what happened before we went down in your basement. I'm sure we probably walked or had dinner with your family or maybe both. But in your basement we started off playing some bumper ball. I lost every game except I eventually won one and decided to quit while I was ahead. We sat on the couch and decided to watch the goat movie. Honestly a very good movie, I really enjoyed it. Then you were asking me to rate it and my brain was short circuiting because I do sometimes lose my train of thought when making eye contact with you. But I also really wanted to kiss you but I was so nervous. So I ended up building up the courage to ask you and you said yes but you were also super nervous. It honestly was one of the most awkward times of my life but it is so funny to think back on and see how far our relationship has progressed."
    },
    {
        title: "Graduation",
        date: "June 2, 2026",
        text: "Graduation was a long day. We spent so much time in the place for absolutely no reason. However, I actually didn't mind it much because I did get to hangout with you for a lot of it. We got to see all our friends but then when our social batteries ran out (or mine at least) we were able to just sit and chill for a while. It was a good day and a big day in our lives."
    },
    {
        title: "Your Grad Party",
        date: "June 7, 2026",
        text: "I can't believe I was actually able to make it to your grad party like 3 days after I got my wisdom teeth out. I think that is just a testament to what willpower will do for you. It was really good for me to get out of the house and seeing you just made it all the better. We only stopped by for a little bit but taking a picture with you and talking to you was definitely worth it."
    },
    {
        title: "My Grad Party ",
        date: "June 20, 2026",
        text: "My grad party went a lot better than I thought and I actually didn't mind talking to people that much. I was really happy that you were able to stop by for a bit. I think I showed you my coin pusher and also the baby photos of me with black hair. I know you still don't believe me and think I'm color blind which is plausible, but I promise I had black hair. Your family was also there and your dad thought my coin pusher was really cool. I enjoyed showing him it and it makes me happy that he has brought it up more than once since then. "
    },
    {
        title: "4th Of July",
        date: "July 4, 2026",
        text: "We ended up doing a lot on the 4th of July. We started by going to the parade. We went with Addy Turos and Isaiah. Billy, Cooper (prom?), and Adrian also met us there. It was honestly a little hot and not too exciting but we did get that ball that you mess with when we are sitting on the couch downstairs. We then went to Wings etc which was fine but the evil waiter crushed the vibe :( Afterwards we went back to your house and I played an immaculate game of wii golf (not) and you laughed very hard at me. We played some bumper ball too and everyone kinda chilled. Then we went to Ellie Seagos house where we walked to the bridge in the misty weather to watch a little bit of fireworks. We mainly just stood and talked on the bridge though, which I found quite peacefull. Eventually we went to WaWa (my first time ever) and everyone went home. That was a fun night!"
    },
    {
        title: "Just a (normal) hangout",
        date: "July 7, 2026",
        text: "This was a day where I came over and hung out but after leaving I went home and wrote a letter. You have told me that you write letters when your feelings get big and my feelings were really big that day. I will not be showing you the whole letter (maybe someday...) but I will give you what I felt like was the main theme. What had happened during the hangout wasn't anything new or out of the ordinary. We had dinner, walked to OLG, and then sat on the swings and talked. You complained about your college schedule and shared fears for college. Then we picked up my dad because he had dropped off his car at the mechanics and was going to walk home. Afterwards we got icecream and the ride back we could not stop laughing. You said I am a lot funnier than you originally thought I would be and I made a comment about me not looking very funny. Then we ended the night with watching the second half of the Adam project. And I was able to keep you in my arms for 20 minutes past when you told me to leave. Even though this wasn't anything crazy I think it is one of my favorite moments with you. It showed me that you somehow make the mudane into magical moments.  "
    },
    {
        title: "The Infamous Coloring Page Incident ",
        date: "July 9, 2026",
        text: "This might be one of the funniest interactions between us. I have found it funny from the very beginning but you had to come around to it. From my perspective I was extremely bored one afternoon just sitting on my couch. You send me a picture you colored at work. I think to myself (Hmm thats really good). Then I zoom in because I am like did she even color outside the lines at all. Then I see the first one and I think wow I got her. So I decided to count becuase what else does one do when their girlfriend sends them a drawing. So I did... Probably a big mistake and you did not seem happy. But I am glad you think it is funny now and it makes me laugh everytime I think about it."
    },
    {
        title: "My Genius Shining Through",
        date: "July 9, 2026",
        text: "I think you give me a lot more credit for my intelligence than I do. So when I think I have a good idea, then you know it is good. This was the day I had the idea to make you a website as my summer project. So I have been working for over a month on this and it has actually been so fun to learn, and make, and just let my creativity run wild. I hope you can see how much love I put into this and I hope you love every detail! (Also I find it ironic becuase I just realized today that I came up with this idea a couple hours after circling your drawings mistakes lol)  "
    },
    {
        title: "Funny Picture Of Me Taken",
        date: "July 23, 2026",
        text: "This is the time where you took a picture of me in my car and I look distraught. (Unfourtunately I can't add the picture for kinda privacy reasons but ask about it more if you are curious) We had taken a walk around potters bridge. I also believe this is the day that I got made fun of for my ability to see colors in the field (The PURPLE dead flowers lol) But after the walk you wanted to go get ice cream. But you never said this and apparently I looked fed up because I just wanted you to tell me straight up (which is a completely valid request I must add). So you took this picture of me and I must look funny to you because you always laugh when looking at it. But I'm glad you find it funny. I think we did go get ice cream and then you took my current (as of 8/11/2026) profile picture on your phone."
    },
    {
        title: "First Time Golfing Together",
        date: "August 1, 2026",
        text: "I had a blast golfing with you. I trained for a long time the night before and also the day of. We went in less than ideal weather conditions. It was thunderstorming and lightly raining but picking up. The first hole I was so scared of embarrassing myself in front of you. But I shot a BOGEY! I was so happy. I then went on to dunk my golf balls in two ponds on the next two holes but that is alright. We were really rushed but there was this whimsical joy to the sitaution too. Kinda the chaotic fun that you experience in rare situations. But we ended up playing 5 holes. I walked away feeling like tiger woods in his prime and you felt like you played bad even though you still beat me. Its funny how that works sometimes. But afterwards we went to Rio Grande with your parents. We then went and just hungout for a while. I love just being with you and I will never get tired of that."
    },
    {
        title: "Double Date with Ethan and Rowen",
        date: "August 3, 2026",
        text: "One of the most awkward times we had. Ethan and Rowen are kinda just akward in general but also our humor doesn't mesh all that well. But we had a really akward dinner and ate hommade pizza. We then went in the basement and played some wii sports. We had some funny times during that and you started dying laughing at me playing wii golf again. (Why am I so bad...) But after they left we were able to laugh a bit about how awkward it was. But then we just sat together for a while reflecting about how soon you had to leave. It was a little sad but I am grateful for every moment I get to spend with you."
    },
    {
        title: "Mass and Golf Practive ",
        date: "August 5, 2026",
        text: "This was one of the first times we have hung out in the morning. I got over to your house early and we walked to church. We sat through daily Mass and it was very interesting. I do really like going to Mass and the reverence there is something I admire and is very thought provoking for me. But after that we walked home and went to the golf course. We chipped, putted, and then hit on the range. It was honestly a lot of fun. It was hot and there was SO many bees but it felt productive and I enjoyed seeing what you do all the time. (I am still very glad you stood in front of me at the range because oh boy was I terrible. It kinda made me smile and chuckle a little watching you hit and criticize yourself for a very good (but not perfect) shot. I do the same thing and it gave me a new perspective. I wonder if that is how you view me when I am upset at myself for not being perfect.) "
    },
];

backButton.onclick = function() {
    window.location.href = "home.html";
};

exit.onclick = function() {
    closeMemory();
}

function openMemory(index) {
    memorydate.textContent = memories[index].date;
    memoryTitel.textContent = memories[index].title;
    memory.textContent = memories[index].text;
    noteViewer.classList.add("visible");
}

function closeMemory() {
    noteViewer.classList.remove("visible");
}

dot1.onclick = function() {
    openMemory(0);
}

dot2.onclick = function() {
    openMemory(1);
}

dot3.onclick = function() {
    openMemory(2);
}

dot4.onclick = function() {
    openMemory(3);
}

dot5.onclick = function() {
    openMemory(4);
}

dot6.onclick = function() {
    openMemory(5);
}

dot7.onclick = function() {
    openMemory(6);
}

dot8.onclick = function() {
    openMemory(7)
}

dot9.onclick = function() {
    openMemory(8);
}

dot10.onclick = function() {
    openMemory(9);
}

dot11.onclick = function() {
    openMemory(10);
}

dot12.onclick = function() {
    openMemory(11);
}

dot13.onclick = function() {
    openMemory(12);
}

dot14.onclick = function() {
    openMemory(13);
}

dot15.onclick = function() {
    openMemory(14);
}

dot16.onclick = function() {
    openMemory(15)
}

dot17.onclick = function() {
    openMemory(16);
}

dot18.onclick = function() {
    openMemory(17);
}

dot19.onclick = function() {
    openMemory(18);
}

dot20.onclick = function() {
    openMemory(19);
}

dot21.onclick = function() {
    openMemory(20)
}

dot22.onclick = function() {
    openMemory(21)
}


