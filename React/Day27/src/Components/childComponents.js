import React from "react";

const ChildComponents = (props) => {
  console.log("Child Component got re-rendered again");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default ChildComponents;


// React.memo is used to prevent unnecessary re-renders of functional components. It memoizes the component, meaning it will only re-render if its props change.
// By wrapping a component with React.memo, React will skip rendering the component and reuse the last rendered output if the props are the same as the previous render.