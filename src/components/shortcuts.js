import React from "react";
import Shortcut from "./shortcut";
function shortcuts() {
	return (
		<div className="container-fluid   ">
			<div className="row   justify-content-center">
				<Shortcut domain={"github.com"}></Shortcut>
				<Shortcut domain={"youtube.com"}></Shortcut>
				<Shortcut domain={"reddit.com"}></Shortcut>
				<Shortcut domain={"twitter.com"}></Shortcut>
			</div>
		</div>
	);
}

export default shortcuts;
