import axios from "axios";
import Cookies from "js-cookie";

export const doLogin = async (credentials) => {
	try {
		const response = await axios.post(
			"https://twitter-clone-backend-production-c9cc.up.railway.app/auth/login/",
			credentials,
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const doRegister = async (credentials) => {
	try {
		const response = await axios.post(
			"https://twitter-clone-backend-production-c9cc.up.railway.app/auth/register/",
			credentials,
		);
		console.log(response.status);
		Cookies.set("AccessToken", "loggedin");
		window.location.reload();
		return response;
	} catch (error) {
		throw error;
	}
};

export const doLogout = async () => {
	Cookies.set("AccessToken", "loggedout");
	Cookies.set("userEmail", "");
	window.location.reload();
}