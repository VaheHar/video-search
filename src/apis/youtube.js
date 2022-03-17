import axios from "axios";

//The key should be kept in back-end.There is no way to store it privately on front side.
const KEY = process.env.API_KEY;

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
