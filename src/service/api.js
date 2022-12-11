import axios from "axios";

class Api {
    async getAllUsers(token) {
        return (await axios.get(`${process.env.REACT_APP_BASE_URL}/admin-panel/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data
    }

    async changeIsBlocked(token, id) {
        return (await axios.put(`${process.env.REACT_APP_BASE_URL}/admin-panel/users`, {id: id},{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
    }

    async getAllProducts(token) {
        return (await axios.get(`${process.env.REACT_APP_BASE_URL}/admin-panel/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data
    }

    async changeIsTranding(token, id) {
        return (await axios.put(`${process.env.REACT_APP_BASE_URL}/admin-panel/products`, {id: id},{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
    }

    async signIn(values) {
        return (await axios.post(`${process.env.REACT_APP_BASE_URL}/admin-panel/sign-in`, {...values})).data;
    }
}

const api = new Api();
export default api;