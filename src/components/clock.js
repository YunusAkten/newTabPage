import moment from "moment/min/moment-with-locales";
import React, { useEffect, useState } from "react";
function Clock() {
	moment.locale(navigator.language);
	const [time, setTime] = useState(moment().format("HH:mm"));
	const [date, setDate] = useState(moment().format(" dddd DD MMMM"));
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(moment().format("HH:mm"));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<div className="text-center">
			<h1 className="display-1 bold fs  text-light ">{time}</h1>
			<h3 className=" text-light">{date}</h3>
		</div>
	);
}

export default Clock;
