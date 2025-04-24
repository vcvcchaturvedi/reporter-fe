import React from "react";
import Excel from "./components/importFrom/file/excel";
import MySQL from "./components/importFrom/server/mySQL";
import MongoDB from "./components/importFrom/server/mongoDB";
function LeftSidebar() {
  return (
    <React.Fragment>
      <h1>
        <strong>Connect</strong>
      </h1>
      <span className="text-dark m-1">
        <i className="fa-regular fa-file fa-lg m-2" />
        To a File
      </span>
      <Excel />
      <span className="text-dark m-1">
        <i className="fa-solid fa-database fa-lg m-2" />
        To a Server
      </span>
      <MySQL />
      <MongoDB />
    </React.Fragment>
  );
}
export default LeftSidebar;
