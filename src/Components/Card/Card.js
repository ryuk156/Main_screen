import React, { useState, useContext } from "react";
import "./Card.css";
import Time_icon from "../../assets/icons/time.png";
import Link_icon from "../../assets/icons/link-icon.png";
import Userinitial from "../Userinitial/Userinitial";
import { MainscreenContext } from "../../MainscreenContext.js";

const Card = ({ time, name, ruppes, people, value }) => {
  const [content, setContent] = useContext(MainscreenContext);
  const [checked, setChecked] = React.useState(value);

  const updatecheckbox = (checked) => {
    setChecked(!checked);
    setContent((previous) => [...previous, { switch: checked }]);
  };

  let allpeople = [];
  if (people.length >= 3) {
    for (let i = 0; i < 3; i++) {
      allpeople.push(people[i]);
    }
  }

  return (
    <div className="col-xl-3 col-lg-5 col-md-10 col-sm-10  m-4 ">
      <div className="Cards pr-4 pl-4">
        <div className="Cards-head">
          <div className="Cards-head-left">{name}</div>
          <div className="Cards-head-right">
            <label class="switch">
              <input
                type="checkbox"
                className="Input"
                defaultChecked={checked}
                onChange={updatecheckbox}
              />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div className="Cards-time">
          <div className="Cards-time-left">
            <img className="Time-icon" src={Time_icon} />
            <div className="text-muted Time-text">
              {time} @ Rs {ruppes}
            </div>
          </div>

          <div className="Cards-line"></div>

          <div className="Cards-head">
            <div className="Cards-bottom-left">
              {allpeople.map((initial) => {
                return <Userinitial initial={initial} />;
              })} <span className="card-people text-muted">+{people.length} more </span>
            </div>
            <div className="Cards-bottom-right">
              <img className="Link_icon" src={Link_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
