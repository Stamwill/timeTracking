import * as React from "react";
import PropTypes from "prop-types";
import User from "../User";
import ImgBlock from "../ImgBlock";
import Exercise from "../../images/icon-exercise.svg";
import Work from "../../images/icon-work.svg";
import Play from "../../images/icon-play.svg";
import Social from "../../images/icon-social.svg";
import Study from "../../images/icon-study.svg";
import SelfCare from "../../images/icon-self-care.svg";
import classes from "./TimeBlock.module.css";

const TimeBlock = React.forwardRef(function TimeBlock(props, ref) {
  const { className, ...other } = props;

  const [status, setStatus] = React.useState([]);

  // State for dates
  const [day, setDay] = React.useState(true);
  const [week, setWeek] = React.useState(false);
  const [month, setMonth] = React.useState(false);

  const activateDay = () => {
    setDay(true);
    setWeek(false);
    setMonth(false);
  };
  const activateWeek = () => {
    setDay(false);
    setWeek(true);
    setMonth(false);
  };
  const activateMonth = () => {
    setDay(false);
    setWeek(false);
    setMonth(true);
  };

  React.useEffect(() => {
    fetch("../../data.JSON")
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }, []);

  console.log(status);

  // const Time = () => {
  //   if (day) {
  //     console.log(status.timeframes.daily.current);
  //   } else if (week) {
  //     return status.timeframes.weekly.current;
  //   } else if (month) {
  //     return status.timeframes.monthly.current;
  //   }
  // };

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <div className={classes.user}>
          <User
            className={classes.user}
            activateDay={activateDay}
            activateWeek={activateWeek}
            activateMonth={activateMonth}
          />
        </div>

        {status.map((data, idx) => (
          <div className={classes.infoContainer} key={idx}>
            <ImgBlock data={data}>
              <img src={data.logo} alt="test" />
            </ImgBlock>

            <div className={classes.infoBlock}>
              <div className={classes.titleBlock}>
                <h2 className={classes.title}>{data.title}</h2>
                <p className={classes.menu}>...</p>
              </div>

              <div className={classes.timeContainer}>
                <p className={classes.currentTime}>
                  {day === true ? data.timeframes.daily.current : ""}
                  {week === true ? data.timeframes.weekly.current : ""}
                  {month === true ? data.timeframes.monthly.current : ""}
                  hrs
                </p>

                <p className={classes.previousTime}>
                  Last week <span>- </span>
                  {day === true ? data.timeframes.daily.previous : ""}
                  {week === true ? data.timeframes.weekly.previous : ""}
                  {month === true ? data.timeframes.monthly.previous : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

TimeBlock.propTypes = {
  className: PropTypes.string,
};

export default TimeBlock;
