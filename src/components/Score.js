import React from "react";
import "./score.css";

export default function Score({ score }) {
  return (
    <div
      id="score"
      className="is-size-4-touch is-size-2-tablet is-size-1-desktop m-3"
    >
      {score}
    </div>
  );
}
