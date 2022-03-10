import axios from "axios";

//The key should be kept in back-end.There is no way to store it privately on front side.
const KEY = "AIzaSyCnBNWkGKVe41BvyVtEO9kv12z-vxp2zx0";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
