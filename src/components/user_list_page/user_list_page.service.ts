import axios from "axios";

class UserListService {
    static async search_users(query: string) {
        let response: any = await axios.get(`https://api.github.com/search/users?q=${query}`)
        return response;
    }
}

export default UserListService