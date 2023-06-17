import React from "react";
import "./DashboardContent.css";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faFileArrowDown,
  faGear,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Filterbutton from "../Filterbutton/Filterbutton";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const DashboardContent = () => {

  const {selectedOption}=useSelector(state=>state.appInfo);


  return (
    <div className="dashboardContent">
      {/* info part */}
      <div className="dasbboardInfo">
        <span>Organisation's Detail</span>
        <div>
          <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: "24px" }} />
          <FontAwesomeIcon
            icon={faFileArrowDown}
            style={{ fontSize: "24px" }}
          />
          <FontAwesomeIcon icon={faGear} style={{ fontSize: "24px" }} />
          <FontAwesomeIcon
            icon={faTableCellsLarge}
            style={{ fontSize: "24px" }}
          />
        </div>
      </div>

      {/* student count, eligible, ineligible & total */}
      <div className="countInfo">
        <Card title="Total No. Of Registered Org." background="#EDF3FD" count={1260} />
        <Card title="Organisation Requests" background="#FDD8DA" count={26} />
        <Card title="Pending Appeals" background="#FBF0DA" count={19}/>
        <Card title="Pending Appeals" background="#E5FADB" count={19}/>
      </div>

      <div className="filter_table">
        <div className="filterSection">
          <Search />
          <div>
            {selectedOption.map((item)=><Filterbutton title={item} />)}
          
          </div>
          <div>
            <Button title="ADD NEW" />
            <Button title="ADD MULTIPLE" />
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default DashboardContent;
