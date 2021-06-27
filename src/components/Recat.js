import React, { useState } from "react";
import RecatDisplay from "./RecatDisplay";
import logo from "./cat.png";

function Recat() {
  const catPile = [];

  const [cats, setCats] = useState(catPile);
  const [speakTog, setSpeakTog] = useState("no");
  const [speak, setSpeak] = useState("");
  const [fcat, setFcat] = useState("");
  const [displayStyle, setDisplayStyle] = useState("none");

  let speakBox;
  if (speakTog === "yes") {
    speakBox = (
      <>
        <br />
        <input value={speak} onChange={(e) => setSpeak(e.target.value)} />
      </>
    );
  } else {
    speakBox = <></>;
  }

  let modal = <></>;

  if (displayStyle === "none") {
    modal = <></>;
  } else {
    modal = (
      <div className="modal" display={displayStyle}>
        <div className="modalContent">
          <span
            onClick={() => {
              setDisplayStyle("none");
              console.log(displayStyle);
            }}
            className="close"
            display={displayStyle}
          >
            &times;
          </span>
          <div>{fcat}</div>
        </div>
      </div>
    );
  }

  function scatter() {
    setCats([]);
  }

  const getCat = async () => {
    try {
      let response = await fetch("https://thatcopy.pw/catapi/rest/");
      let data = await response.json();
      if (speakTog === "yes") {
        setCats((current) => [...current, { picture: data.url, name: speak }]);
      } else {
        let nameRes = await fetch("https://randomuser.me/api/");
        let nameData = await nameRes.json();
        let catify = nameData.results[0].name.first;

        if (!catify.includes("cat")) {
          catify = catify.replace("ca", "cat");
          console.log(catify);
        }
        setCats((current) => [...current, { picture: data.url, name: catify }]);
      }
    } catch (err) {
      // error handling here
      console.log(err);
    }
  };

  const getCatFcat = async () => {
    try {
      let response = await fetch("https://catfact.ninja/fact");
      let data = await response.json();
      setFcat(data.fact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header className="App-header">
        <img className="App-logo" src={logo} alt="Broke" /> Recat
      </header>
      {modal}

      <div>
        <label>Catpion?</label>
        <input
          type="radio"
          name="catSpeak"
          value="yes"
          id="speakYes"
          checked={speakTog === "yes"}
          onChange={(e) => setSpeakTog(e.target.value)}
        />
        <label htmlFor="speakYes">Yes</label>
        <input
          type="radio"
          name="catSpeak"
          value="no"
          id="speakNo"
          checked={speakTog === "no"}
          onChange={(e) => setSpeakTog(e.target.value)}
        />
        <label htmlFor="speakNo">No</label>
        {speakBox}
      </div>
      <button
        onClick={(e) => {
          getCat();
        }}
      >
        Get Cat
      </button>
      <button
        onClick={(e) => {
          getCatFcat();
          setDisplayStyle("block");
        }}
      >
        Get Fcat
      </button>
      <button onClick={scatter}>Scatter</button>

      <div className="flex rowWrap catPile">
        {cats.map((cat, idx) => (
          <RecatDisplay cat={cat} key={idx} />
        ))}
      </div>
    </>
  );
}

export default Recat;
