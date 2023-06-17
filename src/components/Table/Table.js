import React, { useState, useEffect } from "react";
import "./Table.css";
import { OrganistationDetails } from "../../data/OrganistationDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector } from "react-redux";

const Table = () => {
  const { selectedOption } = useSelector((state) => state.appInfo);

  //dropdown to select the option visibilty
  const [dropdownVisibility, setDropdownVisibility] = useState({
    sector: false,
    state: false,
    growth: false,
  });

  //sector options in dropdown
  const sectorFilter = [
    "Credit",
    "Agro",
    "Federatrion",
    "Housing",
    "Tourism",
    "Health",
    "Construction",
  ];

  //state options in dropdown
  const stateFilter = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  //growRate options in dropdown
  const growthRateFilter = ["0-50%", "50%-75%", "75%-100%", "All"];

  const handleDropdownClick = (dropdown) => {
    setDropdownVisibility({
      sector: dropdown === "sector",
      state: dropdown === "state",
      growth: dropdown === "growth",
    });
  };

  console.log(dropdownVisibility);

  //table row color according to attendence
  const getColor = (attendance) => {
    if (attendance <= 50) return "#FDD8DA";
    else if (attendance > 50 && attendance <= 75) return "#FBF0DA";
    else if (attendance > 75 && attendance <= 100) return "#E5FADB";
  };

  //removing dropdown on click of outside
  const handleOutsideClick = (event) => {
    const isDropdownClick =
      event.target.classList.contains("dropdown-option") ||
      event.target.classList.contains("fa-filter");

    if (!isDropdownClick) {
      setDropdownVisibility({
        sector: false,
        state: false,
        growth: false,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  let filteredOrganizations=OrganistationDetails

  //Filter out OrganistationDetails
  if (selectedOption.length> 0) {
    // Filtering the OrganistationDetails array based on the selected options
     filteredOrganizations  = OrganistationDetails.filter(
      (organization) => {
        return (
          selectedOption.includes(organization.sector) ||
          selectedOption.includes(organization.state)
        );
      }
    );
  }

  return (
    <div>
      <table className="custom-table">
        {/* table heading */}
        <thead>
          <tr>
            <th>
              <FontAwesomeIcon
                icon={faSquare}
                style={{
                  fontSize: "24px",
                  color: "#2A3238",
                }}
              />
            </th>
            <th>Name Of Organisation</th>
            <th
              onClick={() => handleDropdownClick("sector")}
              className="dropdown-option"
            >
              Sector Type{" "}
              <FontAwesomeIcon
                icon={faFilter}
                style={{
                  fontSize: "16px",
                  color: "#707070",
                  marginLeft: "10px",
                }}
              />
              {/* Filter Dropdown For Year */}
              {dropdownVisibility.sector && (
                <Dropdown options={sectorFilter}></Dropdown>
              )}
            </th>
            <th
              onClick={() => handleDropdownClick("state")}
              className="dropdown-option"
            >
              State
              <FontAwesomeIcon
                icon={faFilter}
                style={{
                  fontSize: "16px",
                  color: "#707070",
                  marginLeft: "10px",
                }}
              />
              {/* Filter Dropdown For Branch */}
              <div>
                {" "}
                {dropdownVisibility.state && (
                  <Dropdown options={stateFilter}></Dropdown>
                )}
              </div>
            </th>
            <th
              onClick={() => handleDropdownClick("growth")}
              className="dropdown-option"
            >
              Growth Rate
              <FontAwesomeIcon
                icon={faFilter}
                style={{
                  fontSize: "16px",
                  color: "#707070",
                  marginLeft: "10px",
                }}
              />
              {/* Filter Dropdown For Attendence */}
              {dropdownVisibility.growth && (
                <Dropdown options={growthRateFilter}></Dropdown>
              )}
            </th>
            <th>Registeration ID</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {filteredOrganizations.map((detail) => (
            <tr style={{ background: getColor(detail.attendance) }}>
              <td>
                <div className="center">
                  <FontAwesomeIcon
                    icon={faSquare}
                    style={{
                      fontSize: "24px",
                      color: "#2A3238",
                    }}
                  />
                </div>
              </td>
              <td>{detail.name}</td>
              <td>{detail.sector}</td>
              <td>{detail.state}</td>
              <td>{detail.growthRate}</td>
              <td>{detail.registerationID}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="viewButton">Details</span>
                  <div className="verticalLine"></div>
                  <span className="messageButton">Mail</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
