import axios from "axios";

export const Server = axios.create({
	responseType: "json",
});
