import React from "react";
import muscularbody from "../assets/mainAreaImages/muscularbody.png";
import { ZoomIn } from "lucide-react";
const AnatomySection = () => {
  return (
    <div className="humanbody-card">
      <div className="human-img">
        <img src={muscularbody} alt="" width={"150px"} />

        {/* heart status */}
        <div className="heart-card">
          <div className="heart-status">❤️ Healthy Heart</div>
        </div>
        <div className="scanner-container-heart">
          <div className="scanner-frame"></div>
        </div>
        
        {/* leg status */}
        <div className="leg-card">
          <div className="leg-status">🦵 Healthy Leg</div>
        </div>

        <div className="scanner-container-leg">
          <div className="scanner-frame"></div>
        </div>
      </div>

      <ZoomIn className="zoom-btn" />
    </div>
  );
};

export default AnatomySection;
