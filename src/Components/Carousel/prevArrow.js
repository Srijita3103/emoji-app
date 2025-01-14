import React from "react";

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         // background: "blue",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "4px",
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

const PrevArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "block",
        background: "gray",
        padding: "10px",
        borderRadius: "50%",
        position: "absolute",
        left: "-25px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      ◀
    </div>
  );
};

export default PrevArrow;
