import * as React from "react";
import PropTypes from "prop-types";
import classes from "./ImgBlock.module.css";

const ImgBlock = React.forwardRef(function ImgBlock(props, ref) {
  const { className, data, children, ...other } = props;

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        <div
          className={classes.imgBanner}
          style={{ backgroundColor: data.color }}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

ImgBlock.propTypes = {
  className: PropTypes.string,
};

export default ImgBlock;
