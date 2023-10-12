import "./App.css";
import Clock from "./components/clock";
import Search from "./components/search";
function App() {
	return (
		<>
			<div className="bg"></div>
			<div className="d-flex gap-4 container mainText  ">
				<Clock></Clock>
				<Search></Search>
				<h1 className="display  text-light">İyi Günler,X</h1>
			</div>
		</>
	);
}

export default App;
