import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardOverview from "./components/DashboardOverview";
import { navigationlinks } from "./data/navigationlinks.js";
import CalendarView from "./components/CalendarView.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import UpcomingSchedule from "./components/UpcomingSchedule.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="grid-container">
        <Sidebar links={navigationlinks} />
        <div className="flex-col-container">
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="flex-col-container">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
}

export default App;
