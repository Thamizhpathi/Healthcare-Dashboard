import "../styles/UpcomingSchedule.css";

const UpcomingSchedule = ({appointments}) => {
  return (
    <>
      <div className="upcoming-area">
        <div className="upcoming-card">
          <h3 className="upcoming-heading">The Upcoming Schedule</h3>
          {appointments.map((day, index) => (
            <div key={index} className="day-section">
              <p className="day-style">On {day.day}</p>
              <div className="appointment-area">
                {day.appointments.map((schedule, idx) => (
                  <div key={idx} className="appointment-card">
                        <div className="upcoming-icon">{schedule.icon}</div>
                    <div className="appointment-content">
                      <div>
                        {schedule.type}

                      </div>
                      <div>{schedule.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingSchedule;
