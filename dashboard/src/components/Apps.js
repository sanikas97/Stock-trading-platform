import React from "react";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const Apps = () => {
  return (
    <div className="apps-page">
      <h1 className="apps-title">Apps</h1>
      <div className="apps-empty">
        <WidgetsOutlinedIcon className="icon" />
        <p>No apps connected yet</p>
      </div>
    </div>
  );
};

export default Apps;