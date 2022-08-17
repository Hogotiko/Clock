import { FC } from "react";
import "./newClock.scss";

interface ClockProps {
  hourDeg: Number;
  minuteDeg: Number;
  secondDeg: Number;
}

export const NewClock: FC<ClockProps> = ({ hourDeg, minuteDeg, secondDeg }) => {
  return (
    <div className="clock">
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-clock-face">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourDeg}deg)` }}
          ></div>
          <div
            className="hand min-hand"
            style={{
              transform: `rotate(${minuteDeg}deg)`,
            }}
          ></div>
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondDeg}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
