import axios from "axios";
import { useCallback, useState } from "react";
import { useInterval } from "../utils";
import { NewClock } from "./NewClock";
import { Link } from "react-router-dom";

const baseUrl = "https://worldtimeapi.org/api/ip";

export const Watch = () => {
  const [date, setDate] = useState<any>("");

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(baseUrl);
      setDate(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } // eslint-disable-next-line
  }, [date]);

  useInterval(() => {
    getData();
  }, 1000);

  const hours = date.datetime?.slice(11, 13);
  const minutes = date.datetime?.slice(14, 16);
  const seconds = date.datetime?.slice(17, 19);

  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondDeg = (seconds / 60) * 360 + 90;

  return (
    <div className="wrapper">
      <h1>BEAUTIFUL CLOCK</h1>
      <div className="el-clock">
        {hours && minutes && seconds && `${hours} - ${minutes} - ${seconds}`}{" "}
      </div>
      <Link
        to="/semicircle"
        style={{ textDecoration: "none", marginTop: "10px" }}
      >
        <span className="semiCircle">Go to Semicircle</span>
      </Link>

      <div>
        <NewClock
          hourDeg={hourDeg}
          minuteDeg={minuteDeg}
          secondDeg={secondDeg}
        />
      </div>
    </div>
  );
};
