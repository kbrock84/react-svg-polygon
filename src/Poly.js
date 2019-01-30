import React from "react";

const Poly = props => {
  let points = [];
  for (let i = 1; i < props.sides + 2; i++) {
    let cx = props.cx || props.r;
    let cy = props.cy || props.r;
    points.push({
      x: cx + Math.round(props.r * Math.sin((Math.PI / (props.sides / 2)) * i)),
      y: cy + Math.round(props.r * Math.cos((Math.PI / (props.sides / 2)) * i))
    });
  }

  let pointsStr = "";
  points.forEach(val => {
    pointsStr += `${val.x},${val.y} `;
  });

  return (
    <svg width={props.width || props.r * 2} height={props.width || props.r * 2}>
      <polyline
        points={pointsStr}
        fill={props.fill || "none"}
        stroke={props.stroke || "black"}
        strokeWidth={props.strokeWidth || "1"}
      />
    </svg>
  );
};

export default Poly;
