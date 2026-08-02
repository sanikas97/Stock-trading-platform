import React from "react";
import { Link } from "react-router-dom";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <InsertChartOutlinedIcon className="icon" />
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;