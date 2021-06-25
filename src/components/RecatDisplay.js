import React, { useState } from "react";

function RecatDisplay({cat}) {
    console.log(cat)
    return (
        <>
            <div onClick={(e) => e.target.remove()} className="catProfile flex flexCol">
                <img className="catPic" height="100px" width="auto" src={cat.picture} alt="Invis Cat"/>
                <div className="name">{cat.name}</div>
            </div>
        </>
    )
}

export default RecatDisplay;