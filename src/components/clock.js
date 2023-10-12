import moment from "moment/moment";
import React, { useState } from "react";

function Clock() {
	const [time, setTime] = useState(moment().format("HH:mm"));
	const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
	return (
		<div className="text-center">
			<h1 className="display  text-light ">{time}</h1>
			<h3 className="display text-light">{date}</h3>
		</div>
	);
}

export default Clock;
