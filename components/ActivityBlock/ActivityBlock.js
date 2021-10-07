import * as React from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import classes from "./ActivityBlock.module.css";

const ActivityBlock = React.forwardRef(function ActivityBlock(props, ref) {
  const { className, children, ...other } = props;

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <div className={classes.imgBlock}>{children}</div>

        <div className={classes.infoBlock}>{children}</div>
      </div>
    </div>
  );
});

ActivityBlock.propTypes = {
  className: PropTypes.string,
};

export default ActivityBlock;
