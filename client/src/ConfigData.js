import axios from "axios";

export const GLOBAL_URL="http://localhost:5000"

export async function createNewRecipe(data) {
    return axios.post(`${GLOBAL_URL}/recipe/create`,data, {
        headers : {
            "access-token": localStorage.getItem("token"),
        },
    });
}

// egt all todo
export async function getAllRecipe({ search }) {
    return axios.get(`${GLOBAL_URL}/recipe/getAllRecipe`, {
        headers : {
            "access-token": localStorage.getItem("token"),
        },
    });
}

//get all data from db
export async function getTotalRecipe() {
    return axios.get(`${GLOBAL_URL}/recipe/getTotalRecipe`);
}

//get all comments
export async function getTotalComments() {
    return axios.get(`${GLOBAL_URL}/comment/getAllComments`);
}
//comment/create
export async function createComments(data) {
    return axios.post(`${GLOBAL_URL}/comment/create`, data);
}

//logout

export const HandleLogOut = () => {
    localStorage.removeItem('token')
    return;
};


// auth
export async function userSignUp(data){
    return axios.post(`${GLOBAL_URL}/users/register`, data)
}

export async function userSignIn(data){
    return axios.post(`${GLOBAL_URL}/users/login`, data)
}