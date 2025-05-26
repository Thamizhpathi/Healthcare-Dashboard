import React from "react";
import "../styles/Activity.css";

const ActivityFeed = () => {
  return (
    <>
      <div className="activity-area">
        <div className="activity-card">
          <div className="activity-heading">
            <h5>Activity</h5>
            <p>3 appointments on this week</p>
          </div>

          <div className="activity-grid">
            <div className="bar-day">
              <div className="bars">
                <div className="activity-bar1"></div>
                <div className="activity-bar2"></div>
                <div className="activity-bar3"></div>
                <div className="activity-bar4"></div>
                <div className="activity-bar5"></div>
              </div>
              <div className="activity-day">Mon</div>
            </div>

            <div className="bar-day">
              <div className="bars">
                <div
                  className="activity-bar6"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar7"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div className="activity-bar3"></div>
                <div className="activity-bar4"></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "aqua" }}
                ></div>
              </div>
              <div className="activity-day">Tues</div>
            </div>

            <div className="bar-day">
              <div className="bars">
                <div
                  className="activity-bar1"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>

                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>
                <div
                  className="activity-bar3"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar4"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
              </div>
              <div className="activity-day">Wed</div>
            </div>
            <div className="bar-day">
              <div className="bars">
                <div
                  className="activity-bar6"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>
                <div
                  className="activity-bar7"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>
                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar3"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar4"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>
              </div>
              <div className="activity-day">Thurs</div>
            </div>
            <div className="bar-day">
              <div className="bars">
                <div className="activity-bar1"></div>
                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div className="activity-bar3"></div>
                <div className="activity-bar4"></div>
                <div className="activity-bar5"></div>
              </div>
              <div className="activity-day">Fri</div>
            </div>

            <div className="bar-day">
              <div className="bars">
                <div
                  className="activity-bar6"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar7"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div className="activity-bar3"></div>
                <div className="activity-bar4"></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
              </div>
              <div className="activity-day">Sat</div>
            </div>

            <div className="bar-day">
              <div className="bars">
                <div
                  className="activity-bar1"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>

                <div
                  className="activity-bar2"
                  style={{ backgroundColor: "#DEE2E7" }}
                ></div>
                <div
                  className="activity-bar3"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  className="activity-bar4"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
              </div>
              <div className="activity-day">Sun</div>
            </div>
            <div className="bar-day">
              <div className="bars">
                <div className="activity-bar1"></div>
                <div className="activity-bar2"></div>
                <div className="activity-bar3"></div>
                <div className="activity-bar4"></div>
                <div
                  className="activity-bar5"
                  style={{ backgroundColor: "#37349f" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityFeed;
