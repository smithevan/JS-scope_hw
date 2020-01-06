// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

//ONE: "The Murderer is Miss Scarlet".  The murderer attribute of the scenario
//object is accessed and returned from the declaration function, assigned to
//a variable, and then logged.

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//TWO "The Murderer is Mrs Peacock".  The murderer begins as Plum, then gets
//changed to peacock, and called after the change.

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//THREE "First Verdict: Mrs Peacock, Second Verdict: Professor Plum".  The first
//verdict relies on the block scope of the murderer variable, which is Peacock.
//The second one though, doesn't use the declareMurdere function, and so
//refers to the original 'let', which is Plum.

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//FOUR "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//Suspect Three is Mrs. Peacock"

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//FIVE "The weapon is the Revolver" The weapon begins as Candle Stick then  is
//changed to revolver using the changeWeapon function, then called using the
//declareWeapon function

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//SIX "The Murderer is Mr. White" because plot twist is within the function
//and so when changeMurderer is called, it changes it to Green, then back to
//White again.

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//SEVEN "The Murderer is Mr Green".  This is because it begins as Professor Plum
//then  gets changed to Green with the changeMurderer function, then plotTwist
//is called but the Colonel Mustard variable is a new variable scoped only within
//the function, and so is not returned.  unexpectedOutcome is then called, but
//this variable is not the same variable and so isn't changed.  So it remains
//Green because he is the last globally defined variable, all others are block.

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//EIGHT "The weapon is candle stick".  The weapon begins as Lead Pipe, then the
//changeScenario function is called.  This reassigns the attributes of murderer
//and room, then runs the plotTwist function, feeding in 'Dining Room'.  Because
//the room has been changed, it now fulfills the conditions of the if statement,
//which changes Colonel Mustard successfully.  This then calls unexpectedOutcome,
//feeding in Colonel Mustard as an argument.  This fulfills the second if statemnet
//which then changes the weapon to 'candle stick'. 
