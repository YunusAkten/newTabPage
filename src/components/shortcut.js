import React from "react";

function shortcut({ domain }) {
  const iconUrl =
    "https://www.google.com/s2/favicons?domain=" + domain + "&sz=32";
  const url = "http://" + domain;
  const siteName = domain.split(".")[0];
  console.log(!iconUrl);
  function goToSite() {
    window.location.href = url;
  }
  return (
    <div className="col shortcutDiv d-flex row justify-content-center text-center ">
      <div
        onClick={goToSite}
        className="  border shortcutIconDiv mb-2	 rounded border-2 p-2 bg-light"
      >
        <img
          src={iconUrl}
          className=" shortcut
			rounded-circle"
          width="35px"
        />
      </div>
      <a href={url} className="   text-light">
        {siteName}
      </a>
    </div>
  );
}

export default shortcut;
