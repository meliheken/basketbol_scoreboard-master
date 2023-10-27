let homeScoreOne=document.getElementById("home-score")
let homeScoreTwo=document.getElementById("home-score")
let homeScoreThree=document.getElementById("home-score")
let guestScoreOne=document.getElementById("guest-score")
let guestScoreTwo=document.getElementById("guest-score")
let guestScoreThree=document.getElementById("guest-score")
let date = document.getElementById("times")

let homeScore = 0;
let guestScore = 0;
let tarih

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreOne.textContent = homeScore;

}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreTwo.textContent = homeScore;

}
function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreThree.textContent = homeScore;

}
function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreOne.textContent = guestScore;
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreTwo.textContent = guestScore;
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreThree.textContent = guestScore;
}

function tarihSaat() {

    tarih = new Date().toLocaleString('tr-TR'); // tarih saati al
    date.textContent = tarih
}