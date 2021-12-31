import axios from 'axios'

class NumberService {
    static async getComputerNumbers() {
        try {
            const result = await axios.get('http://localhost:3000/api/computer');
            return result.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    static compareNumbers(computerNumbers, userNumbers) {

        //each of these are arrays full of strings 
        //need to compare all values in order to know how many of the correct numbers were chosen 
        //need to know if they were also in the same index location
        const computerObj = {};
        const userObj = {};
        const finalArr = [];

        //iterate through the computer numbers and save within an object with value set to number of occurences
        for (let i = 0; i < computerNumbers.length; i++) {
            const currNum = computerNumbers[i];
            
            if(!computerObj[currNum]) computerObj[currNum] = 0;
            computerObj[currNum]++
        }

        //iterate through the user numbers and save within an object with value set to number of occurences
        //this is necessary in case the computer has a number such as 3611 and the user guesses 1030, which would return 1, 1, 0, 0 instead of 1, 0, 0, 0 without this check
        for (let i = 0; i < userNumbers.length; i++) {
            const currNum = userNumbers[i];

            if(!userObj[currNum]) userObj[currNum] = 0;
            userObj[currNum]++;
        }
        //iterate through usernumbers looking only for the direct matches first to not double count values
        for (let i = 0; i < userNumbers.length; i++) {
           const currNum = userNumbers[i];
           let score = 0;
            //compare current num to see if it exists within the object with value more than 0
            if (computerObj[currNum] > 0 && currNum === computerNumbers[i] && userObj[currNum] > 0) {
                //compare current number to see if it exists within the computer array
                //if it exists within both that should be worth 2 points push to final array
                score = 2;
                finalArr.push(score)
                computerObj[currNum]--;
                userObj[currNum]--;
            }
        }
        //iterate through the array again for numbers that are present but not direct matches without double counting numbers
        for (let i = 0; i < userNumbers.length; i++) {
            const currNum = userNumbers[i];
            let score = 0;
             //compare current num to see if it exists within the object with value more than 0
             if (computerObj[currNum] > 0 && userObj[currNum] > 0) {
                 //compare current number to see if it exists within the computer array
                 //if its only within the object that is worth one point push to final array
                 score++;
                 finalArr.push(score)
                 computerObj[currNum]--;
                 userObj[currNum]--;
             } 
             //there was a bug where computerObj[currNum] would be <= 0 and the array was also less than length 4
             //which would push a 0 to the final array erroneously. Had to add in the misses outside of the for loop to combat this
         }
         //fill out the final array with 0's that don't match
         while (finalArr.length < 4) {
             finalArr.push(0)
         }
        //return final array in a random order
        return this.shuffleArray(finalArr);
    }

    static shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
}

export default NumberService;