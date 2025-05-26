import React from "react";
import { MoveRight } from "lucide-react";

const HealthStatusCard = ({ anatomicalData }) => {
  return (
    <>
      {" "}
      <div className="organs-row">
        {anatomicalData.map((data, index) => {
          return (
            <div className="organs-card" key={index}>
              <img src={data.image} alt="" />
              <p>{data.name}</p>
              <p>{data.date}</p>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${data.status}%`,
                    backgroundColor: data.color,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
       
        <div className="details">
          <span style={{ marginRight: "10px" }}> Details </span>{" "}
          <MoveRight size={"15px"} style={{ marginRight: "15px" }} />
        </div>
       
      </div>
    </>
  );
};

export default HealthStatusCard;
