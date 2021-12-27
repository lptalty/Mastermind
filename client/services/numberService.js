import axios from 'axios'

class NumberService {
    static async getComputerNumbers(url) {
        try {
            console.log('entered into Number Service, trying to get the number')
            const result = await axios.get(url);
            return result.data;
        } catch (error) {
            console.log('There was an error getting computer numbers from services/numberService: ', error);
            return error;
        }
    }
}

export default NumberService;