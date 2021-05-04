import React, { useState, createContext } from "react";

export const MainscreenContext = createContext();

export const MainscreenProvider = (props) => {
  const [content, setContent] = useState([
    {
      Sales: [
        {
          name: "Product Demo",
          switch: true,
          time: "30 mins",
          ruppes: 50,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "Follow up with clients",
          switch: true,
          time: "35 mins",
          ruppes: 60,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "Take feedback",
          switch: true,
          time: "35 mins",
          ruppes: 80,
          people: ["RS", "TT", "YP"],
        },
      ],

      TechTeam: [
        {
          name: "Website quotation",
          switch: true,
          time: "30 mins",
          ruppes: 50,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "Andorid app development",
          switch: true,
          time: "35 mins",
          ruppes: 60,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "IOS app development",
          switch: true,
          time: "35 mins",
          ruppes: 80,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "Product Demo",
          switch: true,
          time: "35 mins",
          ruppes: 80,
          people: ["RS", "TT", "YP"],
        },
        {
          name: "Maching Learning",
          switch: true,
          time: "35 mins",
          ruppes: 80,
          people: ["RS", "TT", "YP"],
        },
      ],

      Marketing: [
        {
          name: "Sell Product",
          switch: true,
          time: "30 mins",
          ruppes: 50,
          people: ["RS", "TT", "YP", "GG"],
        },
        
      ],
    },
  ]);
  return (
    <MainscreenContext.Provider value={content}>
      {props.children}
    </MainscreenContext.Provider>
  );
};
