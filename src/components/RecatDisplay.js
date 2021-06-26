import React, { useState } from "react";

function RecatDisplay({ cat }) {
  console.log(cat);

  const [displayStyle, setDisplayStyle] = useState("none");
  let modal = <></>

  if(displayStyle === "none"){
      modal = <></>
  }
  else{
      modal = <div className="modal" display={displayStyle}>
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
        <img
          src={cat.picture}
          className="modalContent"
          display={displayStyle}
          alt="Invis Cat"
        />
      </div>
    </div>
  }

  return (
    <>
      {modal}
      <div
        on={(e) => e.target.remove()}
        className="catProfile flex flexCol"
      >
        <img
          onClick={function() {
            setDisplayStyle("block");
          }}
          className="catPic"
          height="100px"
          width="auto"
          src={cat.picture}
          alt="Invis Cat"
        />
        <div className="name">{cat.name}</div>
      </div>
    </>
  );
}

export default RecatDisplay;
