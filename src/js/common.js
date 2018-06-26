import axios from "axios";

const login = () => {
	return axios({
		method : 'get',
		url : '/json/login.json',
	})
	.then((response) => response.data.data.data)
	.catch(function(error){
		console.log(error)
	})
}

export {login}