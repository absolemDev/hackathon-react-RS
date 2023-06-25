import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ percent, label }) {
  return (
    <div className="mt-2">
      <div className="text-uppercase fw-bold pb-1">{label}</div>
      <div
        className="progress fw-bold"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          style={{ width: `${percent}%` }}
        >
          {`${percent}%`}
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
  label: PropTypes.string
};

export default ProgressBar;
