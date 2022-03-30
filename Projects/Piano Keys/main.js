// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(event) {
    event.target.style.backgroundColor = 'red';
}

// Write a named function with event handler properties
function keyReturn(event) {
    event.target.style.backgroundColor = '';
}

// Write a loop that runs the array elements through the function
function eventAssignment(note) {
    note.addEventListener('mousedown', keyPlay);
    note.addEventListener('mouseup', keyReturn);
}
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function () {
    nextOne.hidden = true;
    nextTwo.hidden = false;
    document.getElementById('letter-note-five').innerText = 'D';
    document.getElementById('letter-note-six').innerText = 'C';
})

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function () {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    document.getElementById('word-five').innerText = 'DEAR';
    document.getElementById('word-six').innerText = 'FRI-';
    document.getElementById('letter-note-three').innerText = 'G';
    document.getElementById('letter-note-four').innerText = 'E';
    document.getElementById('letter-note-five').innerText = 'C';
    document.getElementById('letter-note-six').innerText = 'B';
    lastLyric.style.display = 'inline-block';
})

// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function () {
    nextThree.hidden = true;
    startOver.hidden = false;
    document.getElementById('word-one').innerText = 'HAP-';
    document.getElementById('word-two').innerText = 'PY';
    document.getElementById('word-three').innerText = 'BIRTH';
    document.getElementById('word-four').innerText = 'DAY';
    document.getElementById('word-five').innerText = 'TO';
    document.getElementById('word-six').innerText = 'YOU!';
    document.getElementById('letter-note-one').innerText = 'F';
    document.getElementById('letter-note-two').innerText = 'F';
    document.getElementById('letter-note-three').innerText = 'E';
    document.getElementById('letter-note-four').innerText = 'C';
    document.getElementById('letter-note-five').innerText = 'D';
    document.getElementById('letter-note-six').innerText = 'C';
    lastLyric.style.display = 'none';
})

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}