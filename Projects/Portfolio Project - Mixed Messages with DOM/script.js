// variables that will store the randomized components of the messages
let archetype = '';
let archetypeCharacteristic = '';
let archetypeAdvice = '';

// get outputs from the DOM
let firstOut = document.getElementById('archetype');
let secondOut = document.getElementById('characteristic');
let thirdOut = document.getElementById('advice');

// arrays used to store information used in randomization
let archetypes = ['King', 'Warrior', 'Magician', 'Lover'];
let archetypesCharacteristics = [
    ['centered', 'calm', 'blessed', 'confident', 'ordered'],
    ['flexible', 'disciplined', 'loyal', 'courageous', 'decisive'],
    ['aware', 'knowledgable', 'objective', 'reflective', 'clear'],
    ['passionate', 'inspired', 'empathetic', 'creative', 'emotional']
];
let archetypesAdvices = [
    ['live with integrity', 'make decisions', "aknowledge other people's good work", 'plan the day', 'give plentifully'],
    ['make decisions', 'attack a goal', 'start a new project', 'go to the gym', 'do something that scares you'],
    ['study a new topic', 'hone your skills', 'meditate', 'create more, consume less', 'work with your hands'],
    ['call a loved one', 'spend time in nature', 'go on a date', 'pray', 'create something beautiful']
];

// function to randomize the message
function getRandomMessage() {
    //choose archetype
    let archetypeIndex = Math.floor(Math.random() * 4);
    archetype = archetypes[archetypeIndex];

    let characterIndex = 0;
    let adviceIndex = 0;

    switch (archetypeIndex) {
        //king
        case 0:
            characterIndex = Math.floor(Math.random() * archetypesCharacteristics[0].length);
            adviceIndex = Math.floor(Math.random() * archetypesAdvices[0].length);
            archetypeCharacteristic = archetypesCharacteristics[0][characterIndex];
            archetypeAdvice = archetypesAdvices[0][adviceIndex];
            break;
        case 1:
            characterIndex = Math.floor(Math.random() * archetypesCharacteristics[1].length);
            adviceIndex = Math.floor(Math.random() * archetypesAdvices[1].length);
            archetypeCharacteristic = archetypesCharacteristics[1][characterIndex];
            archetypeAdvice = archetypesAdvices[1][adviceIndex];
            break;
        case 2:
            characterIndex = Math.floor(Math.random() * archetypesCharacteristics[2].length);
            adviceIndex = Math.floor(Math.random() * archetypesAdvices[2].length);
            archetypeCharacteristic = archetypesCharacteristics[2][characterIndex];
            archetypeAdvice = archetypesAdvices[2][adviceIndex];
            break;
        case 3:
            characterIndex = Math.floor(Math.random() * archetypesCharacteristics[3].length);
            adviceIndex = Math.floor(Math.random() * archetypesAdvices[3].length);
            archetypeCharacteristic = archetypesCharacteristics[3][characterIndex];
            archetypeAdvice = archetypesAdvices[3][adviceIndex];
            break;
        default:
            console.log('Something went terribly wrong');
    }

    firstOut.innerText = archetype;
    secondOut.innerText = archetypeCharacteristic;
    thirdOut.innerText = archetypeAdvice;
}

getRandomMessage();

//find button and assign it click behaviour
let button = document.querySelector('button');
button.onclick = getRandomMessage;


// log randomized messages
console.log(`You are ruled by the ${archetype} archetype today.`);
console.log(`You are ${archetypeCharacteristic} today.`);
console.log(`Today you should ${archetypeAdvice}.`);