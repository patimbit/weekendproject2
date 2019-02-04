let readlineSync = require('readline-sync');
console.log( "- Welcome to Sherlock Holmes and the Egyptian Pharaon!" );
console.log( "- Before we start we need some information to build your profile" );
var userName = readlineSync.question('May I have your name? ');
console.log('- Hi ' + userName + '!');

console.log( "- What character would you like to be?" );
var option = readlineSync.question( "Options: | Holmes | Watson | Mycroft |" );

switch(option) {
  case "Holmes":
    console.log( "My name is Sherlock Holmes. It is my business to know what other people do not know.\n");
    console.log( "- Let's get this started!\n" );
    break;
  case "Watson":
    console.log( "Elementary, my dear Watson\n");
    console.log( "- Let's get this started!\n");
    break;
  case "Mycroft":
    console.log( "It is no easy thing for a great mind to contemplate a still greater one.\n" );
    console.log( "- Let's get this started!\n");
    break;
    default:
    console.log( "- Please choose one of the three characters\n" );
  }

console.log("- I am going to give you a quick intro of what has been happening.The last two months in the old Valley of Kings in Egypt, some interesting things have been happening. \n A month ago we found some of the most important items the Pharaon owned were missing. And two weeks ago we found in one of the walls a message that said 'Haven't found me yet?' We brought different people with some stories. \n Choose one of them and try to get as much information as you can from their _____! Good luck! \n")
var option = readlineSync.question( "Options: | Security Guard | Tourist | Guide | \n" );

switch(option) {
  case "Security Guard":
    console.log( "I was in the middle of the night checking the area when i realized some strange changes in the tob of the Pharaon. I ran around but couldnt find anybody...\n ");
    break;
  case "Tourist":
    console.log( "It was so weird, everybody was acting strange when we came to see the tomb. I heard some rumors that there has been some attacks.\n" );
    break;
  case "Guide":
    console.log( "I have been working giving tours in the Valley for the last 10 years, it is very well protected but I dont know what happened during the last two months that the security has been acting weird\n");
    break;
    default:
    console.log( "Please choose one of the three\n" );
}
console.log("- Okay after talking to our witness I hope you gainged some interesting information. \n Let me tell you something I found out. The attacks happened during the night only when one of our witnesses was there.\n The security guard is the only one allowed to protect the tomb. He was the first person who saw the belongings were missing and the message in the wall. \n Lets try and explore a little more to see what he has to say. Lets choose the correct question to get the info we want \n")
    console.log( "- Choose the first question you would like to ask the guard?\n")
    var option = readlineSync.question( "Options: | Where were you during the attacks? | Where you with any other person when you saw the belongings were missing and the paintings in the wall? |\n " );
    switch(option) {
      case "Where were you during the attacks?":
        console.log( "As I said before both times I was working protecting the tomb from intruders, I really dont know what happened.\n You know some nights becuase I work for the whole night I have small 10 minute naps.\n"  );
        break;
          case "Where you with any other person when you saw the belongings were missing and the paintings in the wall?":
            console.log( "I was by myself, why? Do you think I am lying , or worst you think I did this...\n"  );
            console.log( "Check the cameras and see!\n" );
            break;
            default:
            console.log( "- Please choose one of the two\n" );
          }
    console.log("- I hope after this we are closer of catching whoever did this. We have 3 items in our hands but we only have time to explore one, choose carefully the one you want to explore.\n")
    var option = readlineSync.question( "Options: | Cameras | Microphones | Police Pictures |\n " );
    switch(option) {
      case "Cameras":
      console.log( "What we can see in the cameras is the Security Guard lets a woman into the tomb every night. We cant see anything suspicious from her. But why would he let her in?\n ");
      break;
      case "Microphones":
      console.log( "We can hear a woman and the security discussing about the different attacks that have been happening. Every night of each attack we hear the woman having a conversation with the guard but then 5 minutes later we loose all connection.\n " );
      break;
      case "Police Pictures":
      console.log( " The attacker did an excellent job hidding any hints, however the attacker didnt realize about the shoe print leftt next to the message. The shoe size is a 9 1/2 and we assume the height of this person is around 5'09.\n ");
      break;
      default:
      console.log( "- Please choose one of the three\n" );
}
  console.log("- Wow we got a lot of information now! \n The police department just called us we need to give at least a profile of the intruder. Choose the profile we should give to the police\n" );
  var option = readlineSync.question( "Options: | Woman found in the tomb | Security Guard | Unknown thief|\n " );
  switch(option) {
    case "Woman found in the tomb":
    console.log( "Hmm... interesting, is she working alone? \n  ");
    break;
    case "Security Guard":
    console.log( "Right, I know with his actions he looks a little guilty\n" );
    break;
    case "Unknown thief":
    console.log( "It could be... do we think it's a man, a woman? Working in a team?\n ");
    break;
    default:
    console.log( "- Please choose one of the three characters\n" );
}
console.log("- Oh no..there has been another attack. What the police department found were some pictures of you investigating in the tomb! \n Our attacker was there when we were investigating! We have to rethink the whole plan. Lets study who was in the room while we were in the investigation...\n");
console.log("- The Police Department, The Witnesses, Two Historians to give us background of the tomb and The Tour Guide. Who could it be from here.\n" )
console.log(" - We look around and study each person, the security guard and the tourist are acting kind of weird...\n  They have been having a conversation for the last hour... Lets look into that. Choose one of them to see their history and all the Police Knows about them \n ");
  var option = readlineSync.question( "Options: | Tourist Woman | Security Guard |\n " );
  switch(option) {
    case "Tourist Woman":
    console.log( "The Police has no information about her. She said she is originally form Russia and her name is Svletna. She said she got to Egypt only three days ago.Thats all we know.\n " );
    break;
    case "Security Guard":
    console.log( "Harold is originally from Cleveland, Ohio. HE moved to Egypt 5 years ago with his wife who is originally from Russia. They have 2 kids and he has no previous records.\n" );
    break;
    default:
    console.log( "- Please choose one of the two\n" );
}
console.log("- Okay I think we are close, I just got some information from my contacts in the interpol. \n They said our tourist and the guards wife were friends in Russia. Do we think they could be alies? \n ")
console.log("- The Police is pushing us for an answer. But wait I just got a call from the station, they just gave us our tourist file from the Russian governement.\n  Her real name is Irene Adler and she has always been a suspect but never convicted. Is she our attacker?\n ");
console.log (" To be continued...");
