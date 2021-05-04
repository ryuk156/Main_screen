import React from "react";
import "./Card.css";
import Time_icon from "../../assets/icons/time.png";
import Link_icon from "../../assets/icons/link-icon.png";
import Userinitial from "../Userinitial/Userinitial";

const Card = ({ time, name, ruppes, people }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10 pt-4 pb-4">
      <div className="Cards pr-4 pl-4">
        <div className="Cards-head">
          <div className="Cards-head-left">{name}</div>
          <div className="Cards-head-right">
            {/* <Switch onChange={(event)=>settoggled(event.target.checked)} /> */}
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
              {people.length > 4
                ? people.map((initial) => {
                    return <Userinitial initial={initial} />;
                  })
                : people.map((initial) => {
                    return <Userinitial initial={initial} />;
                  })}
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
