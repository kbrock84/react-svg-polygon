import React from "react";

const Poly = props => {
  let points = [];
  for (let i = 1; i < props.sides + 2; i++) {
    points.push({
      x:
        props.cx +
        Math.round(props.r * Math.sin((Math.PI / (props.sides / 2)) * i)),
      y:
        props.cy +
        Math.round(props.r * Math.cos((Math.PI / (props.sides / 2)) * i))
    });
  }

  let pointsStr = "";
  points.forEach(val => {
    pointsStr += `${val.x},${val.y} `;
  });

  return (
    <svg width="100" height="100">
      <polyline
        points={pointsStr}
        fill={props.fill || "none"}
        stroke={props.stroke || "black"}
      />
    </svg>
  );
};

export default Poly;
