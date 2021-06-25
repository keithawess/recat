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
      if (speakTog === "yes")
      {      
        setCats((current) => [...current, {picture: data.url, name: speak}])
      }
      else{
        let nameRes = await fetch('https://randomuser.me/api/');
        let nameData = await nameRes.json();
        console.log(nameData)
        setCats((current) => [...current, {picture: data.url, name: nameData.results[0].name.first}])
      }
    } catch (err) {
      // error handling here
    } finally {
      console.log("Meow");
    }
  };

  return (
    <>
      <header className="App-header">Recat</header>

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
        
        }}
      >
        Get Cat
      </button>

        <div className="flex rowWrap catPile">
                   {cats.map((cat,idx) => (
            <RecatDisplay cat={cat} key={idx}/>
        ))} 
        </div>


    </>
  );
}

export default Recat;
