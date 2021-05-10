import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  // *** add contextType properity to Button component
  static contextType = LanguageContext;

  render() {
    // console.log(this.context);

    // *** use "this.context" method when we need to get data from single Context value
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
