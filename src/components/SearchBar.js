import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(searchTerm);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input onChange={(e) => setSearchTerm(e.target.value)} type="text" value={searchTerm} />
				</div>
			</form>
		</div>
	);
}

export default SearchBar;