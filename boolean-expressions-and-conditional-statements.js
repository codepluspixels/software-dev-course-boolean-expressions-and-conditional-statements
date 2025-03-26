/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;

console.log("You wake up in a dark forest. There are two paths ahead of you: one leading to the mountains and one to a village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains.");
    
    const caveChoice = readline.question("You find a cave. Do you 'enter' or 'keep walking'? ");
    
    if (caveChoice === "enter" && hasSword) {
      console.log("You enter the cave and find a hidden treasure.");
    } else if (caveChoice === "enter" && !hasSword) {
      console.log("A wild animal chases you out of the cave!");
    } else {
      console.log("You keep walking and reach the other side of the mountain.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  console.log("You find your way to the village.");
  
  const villageChoice = readline.question("Do you go to the 'market' or the 'inn'? ");
  
  if (villageChoice === "market" && hasMap) {
    console.log("A shopkeeper shows you a secret path.");
  } else if (villageChoice === "inn") {
    console.log("You hear a story about a hidden treasure.");
  } else {
    console.log("You look around but find nothing special.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/