import React from "react";
import * as Styled from "./Selector.styled";

const Selector = ({ selected, setSelected, list }) => {
  return (
    <Styled.Container>
      {list.map((exp, index) => (
        <Styled.Experience
          onClick={() => setSelected(index)}
          isSelected={index === selected ? true : false}
          key={index}
        >
          {exp}
        </Styled.Experience>
      ))}
    </Styled.Container>
  );
};

export default Selector;
