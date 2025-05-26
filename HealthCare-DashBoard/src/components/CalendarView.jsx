import "../styles/Calendar.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { scheduleData, upcommingSchedule } from "../data/Calendardata.js";
const CalendarView = () => {
  return (
    <>
      <div className="calendar-area">
        <div className="calaender-card">
          <div className="calendar-month">
            <h3>October</h3>
            <div className="arrow-container">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
          <div className="calender-grid ">
            {scheduleData.map((data, index) => {
              return (
                <div className="date-card" key={index}>
                  <p className="day"> {data.day}</p>
                  <p className="date">{data.date}</p>
                  {data.slots.map((slot, slotIndex) => {
                    const isStyle = data.date === 26 && slotIndex === 1;
                    const isStyle1 = data.date === 28 && slotIndex === 1;
                    const isStyle2 =
                      (data.date === 30 && slotIndex === 0) ||
                      (data.date === 31 && slotIndex === 0);
                    return (
                      <p
                        className={`slot ${isStyle ? "bg-blue" : ""} ${
                          isStyle1 ? "bg-liteblue" : ""
                        }  ${isStyle2 ? "bg-liteblue" : ""} `}
                        key={slotIndex}
                      >
                        {slot}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="schedule-grid">
          <div className="left-card">
            <div className="left-alignment">
              <div className="card-heading">
                {upcommingSchedule[0].type}
              </div>
              <div className="icon">{upcommingSchedule[0].icon}</div>
              <div>{upcommingSchedule[0].time}</div>
              <div>{upcommingSchedule[0].drName}</div>
            </div>
          </div>
          <div className="right-card">
            <div className="right-alignment">
              <div className="card-heading" style={{fontSize:"13px"}}>{upcommingSchedule[1].type}</div>
              <div className="icon">{upcommingSchedule[1].icon}</div>
               <div>{upcommingSchedule[1].time}</div>
              <div>{upcommingSchedule[1].drName}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
