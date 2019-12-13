// array of joke data
var jokeData =
[
 
  {
    id: 1,
    type: "car",
    setup: "What kind of car do frogs prefer?",
    punchline: "A beetle!"
  },
  {
    id: 2,
    type: "car",
    setup: "What kind of car does a sheep like to drive?",
    punchline: "A Lamb-orghini!"
  },
  {
    id: 3,
    type: "car",
    setup: "What does Dora the Explorer drive to a birthday party?",
    punchline: "A Ford Fiesta!"
  },
  {
    id: 4,
    type: "car",
    setup: "What do you call a Spanish man who lost his car?",
    punchline: "Carlos!"
  },
  {
    id: 5,
    type: "car",
    setup: "What did the frog do when his car broke down?",
    punchline: "He jump started it!"
  },
  {
    id: 6,
    type: "car",
    setup: "What does Woody say when he walks into a German car dealership?",
    punchline: "Audi!"
  },
  {
    id: 7,
    type: "car",
    setup: "What happened when the frog’s car broke down?",
    punchline: "He had it toad!"
  },
  {
    id: 8,
    type: "car",
    setup: "What kind of car does a Jedi drive?",
    punchline: "A Toy-Yoda"
  },
  {
    id: 9,
    type: "car",
    setup: "What’s the fastest fast food?",
    punchline: "Lamb-Burger-Inis"
  },
  {
    id: 10,
    type: "car",
    setup: "What do you call a used car man? A Car-deal-ologist",
    punchline: "A Car-deal-ologist"
  },
  {
    id: 11,
    type: "animal",
    setup: "What fish only swims at night?",
    punchline: "Starfish"
  },
  {
    id: 12,
    type: "animal",
    setup: "Why is a fish easy to weigh?",
    punchline: "Because it has its own scales!"
  },
  {
    id: 13,
    type: "animal",
    setup: "What did the buffalo say to his son when he went away on a trip?",
    punchline: "Bison"
  },
  {
    id: 14,
    type: "animal",
    setup: "How do bees get to school?",
    punchline: "By school buzz"
  },
  {
    id: 15,
    type: "animal",
    setup: "There were 10 cats in a boat, and one jumped out. How many were left?",
    punchline: "None, because they’re copy cats"
  },
  {
    id: 16,
    type: "animal",
    setup: "Why couldn't the leopard play hide and seek?",
    punchline: "Because he's always spotted"
  },
  {
    id: 17,
    type: "animal",
    setup: "How do you count cows?",
    punchline: "A cowculator"
  },
  {
    id: 18,
    type: "animal",
    setup: "What do you call an alligator wearing a vest? ",
    punchline: "An investigator!"
  },
  {
    id: 19,
    type: "animal",
    setup: "What type of market should you NEVER take your dog?",
    punchline: "A flea market"
  },
  {
    id: 20,
    type: "animal",
    setup: "Which dog breed is guaranteed to laugh at all of your jokes?",
    punchline: "A Chi-Ha-Ha"
  },
  {
    id: 21,
    type: "memes",
    setup: "you can't be broke",
    punchline: " if you dont check your bank account."
  },
  {
    id: 22,
    type: "memes",
    setup: "if snoopy is a dog",
    punchline: "then whos snoop dogg?"
  },
  {
    id: 23,
    type: "memes",
    setup: "what if sleeping",
    punchline: " is just the time it takes tomorrow to load."
  },
  {
    id: 24,
    type: "memes",
    setup: "english is a great language",
    punchline: "i love that take-out means food, dating, and murder"
  },
  {
    id: 25,
    type: "memes",
    setup: "problems that aren't yours?",
    punchline: "aint nobody got time for that."
  },
  {
    id: 26,
    type: "memes",
    setup: "leftovers in the fridge?",
    punchline: "it's a trap!"
  },
  {
    id: 27,
    type: "memes",
    setup: "eat a snickers",
    punchline: "you're not you when youre hungry."
  },
  {
    id: 28,
    type: "memes",
    setup: "dont ask me where i see myself next year",
    punchline: "i dont have 20/20 vision"
  },
  {
    id: 29,
    type: "memes",
    setup: "age is a relative term",
    punchline: "all my relatives keep asking how old i am."
  },
  {
    id: 30,
    type: "memes",
    setup: "one does not simply",
    punchline: "make it through school without thinking 'i have no idea what im doing'"
  },
  {
    id: 31,
    type: "cartoon",
    setup: "you know what they say:",
    punchline: " a little childhood trauma builds character"
  },
  {
    id: 32,
    type: "cartoon",
    setup: "sucking at something",
    punchline: " is the first step to being sort of good at something."
  },
  {
    id: 33,
    type: "cartoon",
    setup: "no one flicks me in the butt",
    punchline: " without my consent."
  },
  {
    id: 34,
    type: "cartoon",
    setup: "is mayonnaise",
    punchline: "an instrument?"
  },
  {
    id: 35,
    type: "cartoon",
    setup: "i never apologize",
    punchline: "im sorry thats just the way i am."
  },
  {
    id: 36,
    type: "cartoon",
    setup: "i am hungry",
    punchline: "therefore i am."
  },
  {
    id: 37,
    type: "cartoon",
    setup: "I’m not messy.",
    punchline: " I’m organizationally challenged!"
  },
  {
    id: 38,
    type: "cartoon",
    setup: "Some people have anxiety attacks, some people have gas attacks",
    punchline: " …I have nap attacks."
  },
  {
    id: 39,
    type: "cartoon",
    setup: "A little ego",
    punchline: " goes nowhere."
  },
  {
    id: 40,
    type: "cartoon",
    setup: "hahaha",
    punchline: "its a giraffe."
  },
  {
    id: 41,
    type: "sports",
    setup: "Whats the difference between the Memphis grizzlies and a dollar bill?",
    punchline: "You can still get 4 quarters out of a dollar bill."
  },
  {
    id: 42,
    type: "sports",
    setup: "What do the Los Angeles Police department and the new England patriots have in common?",
    punchline: "Neither one can stop a bronco."
  },
  {
    id: 43,
    type: "sports",
    setup: "What is Tom Brady’s favorite letter?",
    punchline: "SSSSSSSSSSSSSSSSSSSSSSSS! (sound of air leaking from a ball)"
  },
  {
    id: 44,
    type: "sports",
    setup: "Yo momma so dumb",
    punchline: "she thought Dunkin' Donuts was a basketball team."
  },
  {
    id: 45,
    type: "sports",
    setup: "Why are the Predators like grizzly bears?",
    punchline: "Every fall they go into hibernation."
  },
  {
    id: 46,
    type: "sports",
    setup: "What does BEARS stand for?",
    punchline: "Been Enduring A Rebuilding Season."
  },
  {
    id: 47,
    type: "sports",
    setup: " How do you keep the Chicago Bears out of your yard?",
    punchline: " Put up goal posts."
  },
  {
    id: 48,
    type: "sports",
    setup: "Did you hear about the joke the quarter-back told his receivers?",
    punchline: " It went over their heads."
  },
  {
    id: 49,
    type: "sports",
    setup: "What's worse than Tiger Woods driving your Cadillac Escalade?",
    punchline: "Dick Cheney riding shotgun!"
  },
  {
    id: 50,
    type: "sports",
    setup: "Why do Blackhawks fans drink from a saucer?",
    punchline: "Because the cup's always in Detroit!"
  },
  {
    id: 51,
    type: "movies",
    setup: "Knock knock. Who's there? Shelby. Shelby who?",
    punchline: "Shelby comin' round the mountain when she comes!"
  },
  {
    id: 52,
    type: "movies",
    setup: "What do you call a blind dinosaur?",
    punchline: " Do-you-think-he-saurus."
  },
  {
    id: 53,
    type: "movies",
    setup: "What do you call a blind dinosaur's dog?",
    punchline: "Do-you-think-he-saurus Rex."
  },
  {
    id: 54,
    type: "movies",
    setup: "Three tomatoes are walkin' down the street. Papa Tomato, Mama Tomato and Baby Tomato. Baby Tomato starts lagging behind, and Papa Tomato gets really angry.",
    punchline: "He goes back and squishes him and says: Ketchup."
  },
  {
    id: 55,
    type: "movies",
    setup: "What is the difference between the Cub Scouts and the military?",
    punchline: "Bzzzzzt! Cub Scouts don't have heavy artillery!"
  },
  {
    id: 56,
    type: "movies",
    setup: "What does a baby computer call its father? I don't know, What?",
    punchline: "Data."
  },
  {
    id: 57,
    type: "movies",
    setup: " Knock knock. Whose there? Tuna fish. Tuna fish who?",
    punchline: "You can tune a piano, but you can't tun-a fish!"
  },
  {
    id: 58,
    type: "movies",
    setup: "Look up idiot in the dictionary. You know what you'll find?  A picture of me?",
    punchline: "No! The definition of idiot. Which you *beep* are!"
  },
  {
    id: 59,
    type: "movies",
    setup: "Okay. What do you call a three-humped camel? I don't... know.",
    punchline: "Pregnant."
  },
  {
    id: 60,
    type: "movies",
    setup: "When you use a bird to write with",
    punchline: "it's called tweeting."
  }
]
//----------------------------------------------------------------


// array to push jokes to after gotten by type
var jokesArray= [];


function getJoke(choice){
 
  
for (var i= 0; i < jokeData.length; i++){

  if (jokeData[i].type==choice){

      jokesArray.push(jokeData[i]);

     jokeObject = jokesArray[jokeNumber];

        
     if (jokeObject === null) {
    jokeObject={};
}

      

  }
  
  
}


//gets the random joke
     var jokeNumber=    (Math.floor(Math.random() * 10));

     console.log(jokesArray[jokeNumber]);
      jokesArray[jokeNumber];

localStorage.setItem("jokeObject", JSON.stringify(jokesArray[jokeNumber]));
        window.location.href = "music.html";
    

}
