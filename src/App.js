import "./App.css";
import Clock from "./components/clock";
import Search from "./components/search";
import Shortcuts from "./components/shortcuts";
function App() {
  return (
    <>
      <div className="bg"></div>
      <section className="d-flex gap-4 container mainSection  ">
        <Clock></Clock>
        <Search></Search>
        {/* name will be added to greeting  */}
        <h3 className="display  text-light">İyi Günler</h3>
        <Shortcuts></Shortcuts>
      </section>
    </>
  );
}

export default App;
