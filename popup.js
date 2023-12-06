//Add an Event Listener for the Brainteaser Button
document.getElementById("brainteaserButton").addEventListener("click", displayRandomBrainTeaser);

//Function: DisplayRandomBrainTeaser
//Purpose: Generates and Displays a Brainteaser
function displayRandomBrainTeaser() 
{
    console.log("Button clicked. Displaying brain teaser...");
    
    var questions = [
      {
        question: "What has keys but can't open locks?",
        answer: "piano"
      },
      {
        question: "What belongs to you but other people use it more than you?",
        answer: "myname"
      },
      {
        question: "The person who makes it, sells it. The person who buys it never uses it. The person who uses it never knows they've got it. What is it?",
        answer: "coffin"
      }
    ];
    
    // Select a Random Question
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    var promptText = "It's time for a brainteaser! " + randomQuestion["question"]

    do
    {
      //Prompt the User
      var userAnswer = prompt(promptText, "Answer Here");
       // Check if the user pressed "Cancel"
            if (userAnswer === null) {
              // Handle cancelation
                  alert("You canceled the brainteaser. Try again later!");
            return; // Exit the function
    } 
      userAnswer = userAnswer.toLowerCase();
      
      //Display a Message if the Answer is Incorrect
      if (userAnswer != randomQuestion["answer"].toLowerCase()) 
      {
        promptText = "Incorrect, try again! " + randomQuestion["question"]
      }

    }while(userAnswer != randomQuestion["answer"].toLowerCase());
    
    alert("Correct! Good Job!");
}
