import axios from "axios"

const USER_API_BASE_URL = "http://localhost:8080/api/users"

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL,{
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
          })
    }
}

export default new UserService()