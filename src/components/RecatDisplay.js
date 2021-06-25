import React, { useState } from "react";

function RecatDisplay({cat},{speak}) {

    return (
        <>
            <div className="catProfile">
                <img className="catPic" height="100px" width="auto" src={cat} alt="Invis Cat"/>
                <div>{speak}</div>
            </div>
        </>
    )
}

export default RecatDisplay;