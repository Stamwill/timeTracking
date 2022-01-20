import * as React from "react";
import PropTypes from "prop-types";
import logo from "../../images/image-jeremy.png";
import classes from "./User.module.css";

const User = React.forwardRef(function User(props, ref) {
  const { className, activateDay, activateWeek, activateMonth, ...other } =
    props;

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <div className={classes.userBlock}>
          <img className={classes.userLogo} src={logo.src} alt="user" />

          <div className={classes.report}>
            <h2 className={classes.reportTitle}>Report for</h2>
            <h2 className={classes.userName}>Jeremy Robson</h2>
          </div>
        </div>

        <div className={classes.dateBlock}>
          <div className={classes.dates}>
            <span className={classes.date} onClick={activateDay}>
              Daily
            </span>
            <span className={classes.date} onClick={activateWeek}>
              Weekly
            </span>
            <span className={classes.date} onClick={activateMonth}>
              Monthly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

User.propTypes = {
  className: PropTypes.string,
};

export default User;
