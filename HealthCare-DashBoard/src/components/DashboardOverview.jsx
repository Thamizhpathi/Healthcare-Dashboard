import "../styles/DashboardMainContent.css";
import { anatomicalStatus } from "../data/anatomicalStatus.js";
import AnatomySection from "./AnatomySection.jsx";
import HealthStatusCard from "./HEalthStatusCard.jsx";

const DashboardOverview = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-heading">
          <h2>Dashboard</h2>
          <p className="align-input">
            <select name="thisweek" id="thisweek" className="heading-input">
              <option value="this week">This Week</option>
              <option value="last week">Last Week</option>
              <option value="this month">This Month</option>
            </select>
          </p>
        </div>
        <div className="main-content">
          <AnatomySection />
          <HealthStatusCard anatomicalData={anatomicalStatus} />
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
