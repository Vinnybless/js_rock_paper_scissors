// DOM MANIPULATION VARIABLES
const cpuChoice = document.getElementById("cpuChoice");
const shitTalk = document.getElementById("shitTalk");
const shitTalkBox = document.getElementById("shitTalkBox");

const cpuScore = document.getElementById("cpuScore");
const playerScore = document.getElementById("playerScore");

const resetButton = document.getElementById("resetButton");

const rockBox = document.getElementById("rockBox");
const rockText = document.getElementById("rockText");
const paperBox = document.getElementById("paperBox");
const paperText = document.getElementById("paperText");
const scissorsBox = document.getElementById("scissorsBox");
const scissorsText = document.getElementById("ScissorsText");

// GENERAL USE
function randIntn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// DOM MANIPULATION
function showCpuChoice(num) {
    let numString = "";

    if (num === 0) {
        numString = "Rock";
    } else if (num === 1) {
        numString = "Paper";
    } else {
        numString = "Scissors";
    }

    cpuChoice.textContent = numString;
    cpuChoice.style.opacity = 1;
}

async function blueGlow(button, cpuDialogueBox) { // cpuChoiceBox glows
    cpuDialogueBox.style.boxShadow = "0px 0px 30px 20px blue";
    button.style.boxShadow = "0px 0px 30px 15px blue";
    await sleep(850);
    button.style.boxShadow = "none";
    cpuDialogueBox.style.boxShadow = "none";
}

async function redGlow(button, cpuDialogueBox) {
    cpuDialogueBox.style.boxShadow = "0px 0px 30px 20px red";
    button.style.boxShadow = "0px 0px 30px 15px red";
    await sleep(850);
    button.style.boxShadow = "none";
    cpuDialogueBox.style.boxShadow = "none";
}

async function blackGlow(button, cpuDialogueBox) {
    cpuDialogueBox.style.boxShadow = "0px 0px 30px 20px black";
    button.style.boxShadow = "0px 0px 30px 15px black";
    await sleep(850);
    button.style.boxShadow = "none";
    cpuDialogueBox.style.boxShadow = "none";
}

async function resetGlow() {
    resetButton.style.boxShadow = "0px 0px 11px 6px black";
    cpuChoice.textContent = "move here";
    cpuChoice.style.opacity = 0;
    cScore = 0
    pScore = 0
    shitTalk.textContent = "Let's go bruh";
    cpuScore.textContent = `CPU:   ${cScore}`;
    playerScore.textContent = `PLAYER:   ${pScore}`;
    await sleep(850);
    resetButton.style.boxShadow = "none"
}

// GAME LOGIC COUNTERS
let pScore = 0;
let cScore = 0;

// GAME LOGIC
function play(playerMove) {
    const flip = randIntn(0, 3);
    showCpuChoice(flip);

    if (flip === playerMove && playerMove === 0) {
        blackGlow(rockBox, shitTalkBox);
        return 0;
    } else if (flip === playerMove && playerMove === 1) {
        blackGlow(paperBox, shitTalkBox);
        return 0;
    } else if (flip === playerMove && playerMove === 2) {
        blackGlow(scissorsBox, shitTalkBox);
        return 0;
    } else if (flip === 0 && playerMove == 1 ) {
        pScore++;
        blueGlow(paperBox, shitTalkBox);
        return true;
    } else if (flip === 0 && playerMove == 2) {
        cScore++;
        redGlow(scissorsBox, shitTalkBox)
        return false;
    } else if (flip === 1 && playerMove == 0) {
        cScore++;
        redGlow(rockBox, shitTalkBox)
        return false;
    } else if (flip === 1 && playerMove == 2) {
        pScore++;
        blueGlow(scissorsBox, shitTalkBox)
        return true;
    } else if (flip === 2 && playerMove == 0) {
        pScore++;
        blueGlow(rockBox, shitTalkBox)
        return true;
    } else if (flip === 2 && playerMove == 1) {
        cScore++;
        redGlow(paperBox, shitTalkBox)
        return false;
    }
}

// CPU DIALOGUE
function talkShit(playerWin) {
    const cpuWinQuotes = [
        "All skill",
        "Damn you suck",
        "Can't beat me",
        "Guess better scrub",
        "Git gud",
    ];
    const cpuLossQuotes = [
        "Lucky bitch",
        "Bullshit",
        "lag, LAG",
        "MY TEAMMATES . . . I suck",
        "This game sucks",
    ];
    const cpuDrawQuotes = [
        "Great minds think alike",
        "Oh shit, we got a match",
        "Draw huh? AGAIN",
        "Alright, time to try",
        "GET SHRE- Oh it's a draw",
    ];
    if (playerWin === 0) {
        return cpuDrawQuotes[randIntn(0, cpuDrawQuotes.length)];
    }
    if (playerWin === true) {
        return cpuLossQuotes[randIntn(0, cpuLossQuotes.length)];
    }
    return cpuWinQuotes[randIntn(0, cpuWinQuotes.length)];
}

// EVENT LISTENERS
rockBox.addEventListener("click", function() {
    shitTalk.textContent = talkShit(play(0));
    cpuScore.textContent = `CPU:   ${cScore}`;
    playerScore.textContent = `PLAYER:   ${pScore}`;
});
paperBox.addEventListener("click", function() {
    shitTalk.textContent = talkShit(play(1));
    cpuScore.textContent = `CPU:   ${cScore}`;
    playerScore.textContent = `PLAYER:   ${pScore}`;
});
scissorsBox.addEventListener("click", function() {
    shitTalk.textContent = talkShit(play(2));
    cpuScore.textContent = `CPU:   ${cScore}`;
    playerScore.textContent = `PLAYER:   ${pScore}`;
});
resetButton.addEventListener("click", function() {
    resetGlow();
});
