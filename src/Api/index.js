import axios from 'axios';

class Api {
    static async getShips() {
        return await axios.get('http://aurium.cl/swapi/starships.json')
    }
}
export default Api;