import "./App.css";
import Clock from "./components/clock";
import Search from "./components/search";
import Shortcuts from "./components/shortcuts";
import Settings from "./components/settings";
import { useState } from "react";
import alluringEvening from "./images/an-alluring-evening.jpg";
import settingsIcon from "./images/gear-fill.svg";
function App() {
  const [wallpaper, setWallpaper] = useState(localStorage["fileBase64"]);

  const [blur, setBlur] = useState(localStorage["blur"] === "true");
  const [hideSettings, setHideSettings] = useState(true);
  const [name, setName] = useState(localStorage["name"] || "");
  const changeBlur = (value) => {
    setBlur(value);
    const blur = document.querySelector(".bg");
    blur.classList.toggle("blur");
    window.localStorage.setItem("blur", value);
  };
  const changeName = (value) => {
    setName(value);
    window.localStorage.setItem("name", value);
  };
  const defaultWallpaper = () => {
    window.localStorage.clear("fileBase64");
    setWallpaper(null);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${wallpaper || alluringEvening})` }}
        className={`bg ${blur ? "blur" : ""}`}
      ></div>
      <section className="d-flex gap-4 container mainSection  ">
        <Clock></Clock>
        <Search></Search>
        {/* name will be added to greeting  */}
        <h3 className="display  text-capitalize text-light">
          İyi Günler {name}
        </h3>
        <Shortcuts></Shortcuts>
        <img
          onClick={() => {
            setHideSettings(!hideSettings);
          }}
          src={`${settingsIcon}`}
          className="settingsIcon "
          alt="settings"
        />
        <Settings
          hideSettings={hideSettings}
          setWallpaper={setWallpaper}
          blur={blur}
          changeBlur={changeBlur}
          name={name}
          changeName={changeName}
          defaultWallpaper={defaultWallpaper}
        ></Settings>
      </section>
    </>
  );
}

export default App;
