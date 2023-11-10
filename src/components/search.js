import React from "react";

function search() {
  function handleSubmit(e) {
    console.log(e.target[0].value);
    e.preventDefault();
    window.location.href =
      "https://www.google.com/search?q=" + e.target[0].value;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="form-control searchBar" type="text" />
      </form>
    </>
  );
}

export default search;
