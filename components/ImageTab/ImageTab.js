import * as React from "react";
import PropTypes from "prop-types";
import classes from "./ImageTab.module.css";

const ImageTab = React.forwardRef(function ImageTab(props, ref) {
  const { className, ...other } = props;

  let colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)",
  ];

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.container}>
        {colors.map((color, idx) => (
          <div
            className={classes.imgBlock}
            key={idx}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
});

ImageTab.propTypes = {
  className: PropTypes.string,
};

export default ImageTab;
