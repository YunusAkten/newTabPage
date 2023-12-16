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
  const [shortcuts, setShortcuts] = useState(
    JSON.parse(localStorage.getItem("shortcuts")) || [
      "github.com",
      "youtube.com",
      "reddit.com",
      "twitter.com",
      "instagram.com",
      "linkedin.com",
      "netflix.com",
    ]
  );
  if (shortcuts && shortcuts.length > 0) {
    const body = document.querySelector("body");
    body.addEventListener("keydown", (e) => {
      shortcuts.forEach((shortcut, index) => {
        if (e.key === (index + 1).toString()) {
          window.location.href = "https://" + shortcut;
        }
      });
    });
  }
  const [blur, setBlur] = useState(localStorage["blur"] === "true");
  const [hideSettings, setHideSettings] = useState(true);
  const [name, setName] = useState(localStorage["name"] || "");
  const changeShortcuts = (value) => {
    setShortcuts(value);
    window.localStorage.setItem("shortcuts", JSON.stringify(value));
  };
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
        <Shortcuts shortcuts={shortcuts}></Shortcuts>
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
          shortcuts={shortcuts}
          changeShortcuts={changeShortcuts}
        ></Settings>
      </section>
    </>
  );
}

export default App;
