import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultTerm);
	}, [defaultTerm])

	const search = async (searchTerm) => {
		const response = await youtube.get(
			'/search',
			{ params: { q: searchTerm } }
		);
		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;