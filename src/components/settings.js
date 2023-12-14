import React from "react";

function settings({
  hideSettings,
  setWallpaper,
  blur,
  changeBlur,
  name,
  changeName,
  defaultWallpaper,
}) {
  function handleChange(e) {
    window.localStorage.clear("fileBase64");
    const file = e.target.files[0];
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > 5) {
      alert("File size should not exceed 5MB");
      return;
    }
    getBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
      setWallpaper(base64);
    });
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  return (
    <div hidden={hideSettings} className=" settingsDiv ">
      <div className="container-fluid mt-2">
        <div className="backgroundSettings">
          <h2 className="m-1 ">Arka Plan</h2>

          <label className="d-block m-1" htmlFor="background">
            Arka Planı Seç (5mb max)
          </label>
          <input
            onChange={handleChange}
            name="background"
            className="m-1"
            type="file"
          ></input>
        </div>
        <button
          onClick={() => defaultWallpaper()}
          className="m-1 btn  btn-sm btn-light"
        >
          Varsayılan Arka Plana Dön
        </button>
        <hr></hr>
        <h2 className="m-1">Blur</h2>
        <div className="form-check m-2">
          <input
            className="form-check-input "
            type="checkbox"
            value={blur}
            onChange={() => changeBlur(!blur)}
            checked={blur}
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Blur Efekti
          </label>
        </div>
        <hr></hr>
        <h2 className="m-1 ">İsminiz</h2>
        <input
          id="name"
          className="form-control m-1 w-50"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        ></input>
        <hr></hr>
      </div>
    </div>
  );
}

export default settings;
