import React, { useState } from "react";

function Recat(){

const [tag, setTag] = useState("");
const [speakTog, setSpeakTog] = useState("yes");
const [speak, setSpeak] = useState("");

    return (
        <>
        <div>
            Recat
        </div>

        <input value={tag}  onChange={(e) => setTag(e.target.value)}/>
        <br/>
        <div>
            <label>Meow?</label>
            <input type="radio" name="catSpeak" value="yes" id="speakYes"/>
            <label htmlFor="speakYes">Yes</label>
            <input type="radio" name="catSpeak" value="no" id="speakNo" checked/>
            <label htmlFor="speakNo">No</label>
        </div>
        <button>Get Cat</button>
        </>
    )
}

export default Recat;