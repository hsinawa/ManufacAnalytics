import React from "react";
import { Link } from "react-router-dom";

//Importing all Static Files
import "../Styles/generalStyle.css";
import textData from "../Static Files/staticText.json";

const StylesInline = {
  Introduction: {
    marginTop: "10%",
    width: "93%",
    fontSize: "30px",
  },
  tables: {
    fontSize: "27px",
    textAlign: "center",
  },
};

const HomeScreen = () => {
  return (
    <React.Fragment>
      <section style={StylesInline.Introduction}>{textData.IntroText}</section>
      <div className="grid-2">
        <section style={StylesInline.tables}>
          {textData.Table1}
          <Link to={`${textData.routes.class}`}>
            <button>{textData.buttonText}</button>
          </Link>
        </section>
        <section style={StylesInline.tables}>
          {textData.Table2}
          <Link to={`${textData.routes.gamma}`}>
            <button>{textData.buttonText}</button>
          </Link>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeScreen;
