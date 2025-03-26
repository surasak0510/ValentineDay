
var message = '/message.txt'
var letterContent = ''

fetch(message)
    .then(response => response.text())
    .then(data => {
        letterContent = data;
    })
    .catch(error => {
        console.error('Error loading file:', error);
        letterContent = 'error: ' + error.message;
    });


durationWrite = 50


function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    var pdfButton = document.getElementById("showPdfBtn");

    if (!letterContent) {  
        setTimeout(effectWrite, 100);
        return;
    }

    boxLetter.innerHTML = '';  
    pdfButton.style.display = "none";  

    let letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
            if (index === letterContentSplited.length - 1) {
                setTimeout(() => {
                    pdfButton.style.display = "inline-block";  
                }, 500);
            }
        }, durationWrite * index);
    });
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

let audio = document.getElementById("background-music");
let muteBtn = document.getElementById("muteBtn");
let volumeSlider = document.getElementById("volumeSlider");
let volumeTooltip = document.getElementById("volumeTooltip");

// เริ่มต้นให้ Tooltip แสดงค่าปัจจุบัน
volumeTooltip.textContent = `${Math.round(volumeSlider.value * 100)}%`;

// เล่นเพลงเมื่อคลิก
function playMusic() {
    audio.play();
}

function toggleMute() {
    let muteIcon = document.getElementById("muteIcon");
    if (audio.muted) {
        audio.muted = false;
        muteIcon.src = "/public/sound_max_fill.svg";
    } else {
        audio.muted = true;
        muteIcon.src = "/public/sound_mute_fill.svg";
    }
}

// ปรับระดับเสียงและแสดง Tooltip
volumeSlider.addEventListener("input", function () {
    audio.volume = this.value;
    volumeTooltip.textContent = `${Math.round(this.value * 100)}%`;
});


var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")
var left = document.querySelector(".left")

left.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});

document.getElementById("showPdfBtn").addEventListener("click", function () {
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfBook = document.querySelector(".pdf-book");

    pdfContainer.style.display = "block";
    pdfBook.classList.add("open");

    this.style.display = "none";  // ซ่อนปุ่มเมื่อกดแล้ว
});
