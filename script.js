// ======================================
// Ambil Elemen
// ======================================

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const letterBtn = document.getElementById("letterBtn");
const letterContent = document.getElementById("letterContent");

const music = document.getElementById("music");
const particles = document.getElementById("particles");

const birthdayText = document.getElementById("birthdayText");

// ======================================
// Pesan Ulang Tahun
// ======================================

const message = `Selamat ulang tahun yaa! 🎉

Semoga di umur yang baru ini kamu selalu diberi kesehatan,
kebahagiaan, dan rezeki yang melimpah.

Semoga semua impianmu tercapai satu per satu.

Terima kasih sudah menjadi teman yang baik.

Tetap jadi pribadi yang ceria dan jangan pernah kehilangan senyum manismu. 💖`;

// ======================================
// Efek Ketik
// ======================================

function typeWriter(text, element, speed = 35){

    let index = 0;

    element.innerHTML = "";

    function typing(){

        if(index >= text.length) return;

        const char = text.charAt(index);

        if(char === "\n"){

            element.innerHTML += "<br>";

        }else{

            element.innerHTML += char;

        }

        index++;

        setTimeout(typing, speed);

    }

    typing();

}

// ======================================
// Buka Hadiah
// ======================================

openBtn.addEventListener("click",()=>{

    opening.style.display="none";

    mainContent.style.display="block";

    setTimeout(()=>{

        typeWriter(message,birthdayText);

    },500);

    if(music){

        music.volume=0.4;

        music.play().catch(()=>{});

    }

    startHearts();

});

// ======================================
// Surat
// ======================================

letterBtn.addEventListener("click",()=>{

    if(letterContent.style.display==="block"){

        letterContent.style.display="none";

        letterBtn.innerHTML="💌 Buka Surat";

    }else{

        letterContent.style.display="block";

        letterBtn.innerHTML="📩 Tutup Surat";

        letterContent.scrollIntoView({

            behavior:"smooth"

        });

    }

});

// ======================================
// Floating Hearts
// ======================================

let heartInterval;

function startHearts(){

    if(heartInterval) return;

    heartInterval=setInterval(createHeart,350);

}

function createHeart(){

    const heart=document.createElement("span");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animation="heartFloat 6s linear forwards";

    heart.style.pointerEvents="none";

    particles.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

// ======================================
// Tambah Keyframes
// ======================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartFloat{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ======================================
// Hover Gallery
// ======================================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});