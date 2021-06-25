import React, { useState } from "react";
import RecatDisplay from "./RecatDisplay"

function Recat() {
  const catPile = [];

  const [cats, setCats] = useState(catPile);
  const [speakTog, setSpeakTog] = useState("no");
  const [speak, setSpeak] = useState("");


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

  const getCat = async () => {
    try {
      let response = await fetch('https://thatcopy.pw/catapi/rest/');
      let data = await response.json();
      console.log(data.url)
      setCats((current) => [...current, data.url])
    } catch (err) {
      // error handling here
    } finally {
      console.log("Meow");
    }
  };

  return (
    <>
      <header>Recat</header>

      <div>
        <label>Name?</label>
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
            setSpeak("");
        }}
      >
        Get Cat
      </button>

        <div className="flex rowWrap">
                   {cats.map((cat,idx) => (
            <RecatDisplay cat={cat} speak={speak} key={idx}/>
        ))} 
        </div>


    </>
  );
}

export default Recat;
