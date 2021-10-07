import * as React from "react";
import PropTypes from "prop-types";
import ActivityBlock from "../../components/ActivityBlock/ActivityBlock";
import classes from "./Work.module.css";

const Work = React.forwardRef(function Work(props, ref) {
  const { className, ...other } = props;

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <div className={classes.imgBlock}>
          <h2>Hello</h2>
        </div>

        <div className={classes.infoBlock}>
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
});

Work.propTypes = {
  className: PropTypes.string,
};

export default Work;
