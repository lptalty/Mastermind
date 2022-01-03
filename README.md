# Mastermind

# Downloading Mastermind
This is Mastermind and can be played against a computer. In order to install Mastermind, clone this repo onto your local machine and open it within your IDE. Within the terminal run the command ```npm run build``` to download the necessary dependencies. Once everything is downloaded within your package.json webpack is configured to run both ```npm run start``` and ```npm run build``` to start both the client and server. The client should be running on localhost: 8080.

# Playing Mastermind
Once the game is running on your computer, hit the 'New Game' button in the middle of the page. This triggers an API call to generate the computers choice; however, if there is an error with the API call, that will be rendered on the screen instead of the game. Currently, the game is set up in a demo mode, which shows the user the choice of the computer. This can be commented out within Mastermind/client/containers/mainContainer.jsx on line 51. 

The user's goal is to try and guess the number that the computer chose within 10 attempts. The user is able to make their guess using the dropdown buttons above the blue 'Submit' button. Once the user is satisfied with their guess, they are able to click on the submit button. 

On the screen will appear the users previous guess as well as the hint from the computer. A '0' indicates that one number of the users guesses is not contained within the actual answer. A '1' indicates that one number of the users guesses is contained within the actual answer but it is in the wrong index location. A '2' indicates one number of the users guesses is corrent and within the right index location. Note that the computers response is random and does not indicate which number at which location is correct or not. 

At the end of the game, if the user runs out of guesses 'YOU LOSE' will appear at the top of the screen; otherwise, if the user determines the correct solution 'YOU WIN' will appear. 
