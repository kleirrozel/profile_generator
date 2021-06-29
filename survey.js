const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable:  `, (answerName) => {
  rl.question(`What's an activity you like doing?  `, (answerActivity) => {
    rl.question(`What do you listen to while doing that?  `, (answerMusic) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)?  `, (answerMeal) => {
        rl.question(`What's your favourite thing to eat for that meal?  `, (answerFood) => {
          rl.question(`Which sport is your absolute favourite?  `, (answerSport) => {
            rl.question(`What is your superpower?  `, (answerSuperpower) => {
              console.log(`My name is ${answerName}. I love ${answerActivity}. My favourite music to listen to while ${answerActivity} is ${answerMusic}. My favourite food is ${answerFood} and I usually have it during ${answerMeal}. Sometimes I play, ${answerSport} with my friends. Oh! And don't tell this to anyone, but I can ${answerSuperpower}.`);
              rl.close();
            })
          })    
        })     
      })    
    })
  })
});