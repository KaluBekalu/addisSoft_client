import styled from "styled-components";

export const Close = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff1d1d;
    font-size: 27px;
    transition: all 0.3s ease-in-out;
  }
`;
