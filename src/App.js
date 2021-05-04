import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Search from "./Components/Search/Search";
import Accordion from "./Components/Accordion/Accordion";
import { MainscreenProvider, MainscreenContext } from "./MainscreenContext.js";

const App = () => {
  const [content, setContent] = useContext(MainscreenContext);
  return (
    <div className="App">
      <Sidebar />
      <div className="Main">
        <Navbar />
        <Search />

        <Accordion title="Sales" content={content.Sales} />
        <Accordion title="Teach Team" content={content.TechTeam} />
        <Accordion title="Marketing" content={content.Marketing} />
        {console.log(content)}
      </div>
    </div>
  );
};

export default App;
