import React from "react";

function shortcut({ domain }) {
	const url = "https://www.google.com/s2/favicons?domain=" + domain + "&sz=32";
	function goToSite() {
		window.location.href = "https://" + domain;
	}
	return (
		<div
			onClick={goToSite}
			className="  border shortcutDiv mb-2	 mx-3 rounded border-2 p-2 bg-light"
		>
			<img src={url} alt="" className="rounded-circle" width="35px" />
		</div>
	);
}

export default shortcut;
