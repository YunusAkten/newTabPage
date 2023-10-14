import React from "react";

function search() {
	function handleSubmit(e) {
		e.preventDefault();
		window.location.href =
			"https://www.google.com/search?q=" + e.target[0].value;
	}
	return (
		<>
			<form action="submit">
				<input
					onSubmit={handleSubmit}
					className="form-control searchBar"
					type="text"
				/>
			</form>
		</>
	);
}

export default search;
