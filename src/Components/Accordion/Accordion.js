import React, { useState } from "react";
import Card from "../Card/Card.js";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [clicked, setclicked] = useState(false);

  let index = false;
  const toggle = (index) => {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  };
  return (
    <div className="AccordionContainer">
      <div className="AccordionWrapper" onClick={() => toggle(index)}>
        <div className="ml-5 mt-3 font-weight-bolder">{title}</div>

        <div className="Accordionicon">
          {/* <span className="">{clicked===index?"true":"false"}</span> */}
        </div>
      </div>
      {clicked === index ? (
        <div className="AccordionDown">
          <div className="row ml-4 mt-2 mb-2 ">
            {content &&
              content.map((all) => {
                return (
                  <Card
                    time={all.time}
                    name={all.name}
                    ruppes={all.ruppes}
                    people={all.people}
                  />
                );
              })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
