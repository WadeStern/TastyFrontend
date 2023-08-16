import axios from "axios";

const backendPort = process.env.REACT_APP_BACKEND_PORT;
const backendUrl = process.env.REACT_APP_BACKEND_URL;
//const backendUrl = "backend.staging.wadestern.com";

let server_url = `http://${backendUrl}:${backendPort}/`;
//let server_url = "http://be-entrypoint.default.svc.cluster.local:7200/"
//let server_url = "http://172.17.0.1:7200/"
//let server_url ="http://localhost:30001"

class restAPI {
    checkEnv() {
        const endpoint = ""
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint)
    }
    getToken(username,password) {
        const endpoint = "auth/login"
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password});
        let customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        return axios.post(restEndPoint,json,customConfig)
    }
    addUser(username,password,email,firstName){
        const endpoint = "addUser";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password,email:email,firstName:firstName});
        return axios.put(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getAllRecipes(){
        const endpoint = "recipes";
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }
    getNumRecipes(totalRecipes){
        const endpoint = "recipes/num/"+totalRecipes;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipesSearchTitle(searchParam){
        const endpoint = "recipes/searchtitle/"+searchParam;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipeByID(id){
        const endpoint = "recipes/"+id;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipesSearchTags(searchParam){
        const endpoint = "recipes/searchtags/"+searchParam;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getCustomRecipies(username){
        const endpoint = "recipes/reccomended/"+username;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getLikedRecipes(userId){
        const endpoint = "recipes/liked/"+userId;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    putUserData(surveyData){
        const endpoint = "userSurveyData";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify(surveyData);

        return axios.put(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    putLikedRecipie(userId, recipieId){
        const endpoint = "like_recipie";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({userId:userId, recipieId:recipieId});
        return axios.put(restEndPoint,json,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    putDislikedRecipie(userId, recipieId){
        const endpoint = "dislike_recipie";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({userId:userId, recipieId:recipieId});

        return axios.put(restEndPoint,json,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    checkpython(){
        const endpoint = "python";
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.data);
    }

}

export default new restAPI();