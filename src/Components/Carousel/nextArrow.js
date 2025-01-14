import React from "react";

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         background: "white",
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

const NextArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "block",
        background: "gray",
        padding: "10px",
        borderRadius: "50%",
        position: "absolute",
        right: "-25px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      ▶
    </div>
  );
};
export default NextArrow;
