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
          switch: false,
          time: "35 mins",
          ruppes: 60,
          people: ["RS", "TT", "YP","GG","UU","OO","PP"],
        },
        {
          name: "Take feedback",
          switch: true,
          time: "35 mins",
          ruppes: 80,
          people: ["RS", "TT", "YP","GG"],
        },
      ],

      TechTeam: [
        {
          name: "Website quotation",
          switch: false,
          time: "30 mins",
          ruppes: 50,
          people: ["RS", "TT", "YP","GG","UU","OO","PP"],
        },
        {
          name: "Android app development",
          switch: true,
          time: "35 mins",
          ruppes: 60,
          people: ["RS", "TT", "YP","GG"],
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
          people: ["RS", "TT", "YP","GG","UU","OO","PP"],
        },
      ],

      Marketing: [
        {
          name: "Sell Product",
          switch: true,
          time: "30 mins",
          ruppes: 50,
          people: ["RS", "TT", "YP", "GG","UU","OO","PP"],
        },
        
      ],
    },
  ]);
  return (
    <MainscreenContext.Provider value={[content,setContent]}>
      {props.children}
    </MainscreenContext.Provider>
  );
};
