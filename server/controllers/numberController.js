const axios = require('axios')
const computer = {};

computer.getNums = async function (req, res, next) {
    try {
        console.log('Getting numbers within number controller');

        //requirements: 4 random numbers from 0-7 (Duplicates are allowed)
        const computerNums = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');
        res.locals.numberData = computerNums.data;
        return next();
    } catch (error) {
        console.log('There was an error getting numbers for the computer: ', error);
    }
}

module.exports = computer;