import React from "react";
import { NavigationDots, ContactInfo } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* <ContactInfo /> */}
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <div className="qq">
          <NavigationDots active={idName} />
        </div>
      </div>
    );
  };

export default AppWrap;
