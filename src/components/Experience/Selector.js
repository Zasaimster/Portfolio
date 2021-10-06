import React from "react";
import * as Styled from "./Selector.styled";

const Selector = ({ selected, setSelected, list }) => {
  console.log(selected);

  return (
    <Styled.Container>
      {list.map((exp, index) => (
        <Styled.Experience
          onClick={() => setSelected(index)}
          isSelected={index === selected ? true : false}
        >
          {console.log(index, selected)}
          {exp}
        </Styled.Experience>
      ))}
    </Styled.Container>
  );
};

export default Selector;
