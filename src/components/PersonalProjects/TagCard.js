import React from "react";
import * as Styled from "./TagCard.styled";

const TagCard = ({ tags }) => {
  return (
    <Styled.TagContainer>
      {tags.map((tag) => (
        <Styled.TagIcon>{tag}</Styled.TagIcon>
      ))}
    </Styled.TagContainer>
  );
};

export default TagCard;
