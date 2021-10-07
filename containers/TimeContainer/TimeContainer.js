import * as React from "react";
import PropTypes from "prop-types";
import TimeBlock from "../../blocks/TimeBlock";
import classes from "./TimeContainer.module.css";

const TimeContainer = React.forwardRef(function TimeContainer(props, ref) {
  const { className, ...other } = props;

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <TimeBlock />
      </div>
    </div>
  );
});

TimeContainer.propTypes = {
  className: PropTypes.string,
};

export default TimeContainer;
