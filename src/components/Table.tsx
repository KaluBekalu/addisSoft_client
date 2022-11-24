import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  padding: 30px;
`;

export const TableHead = styled.th`
  border: 0.01rem solid #00000020;
  text-align: left;
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const TableData = styled.td`
  border: 0.01rem solid #00000020;
  text-align: left;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  &:nth-child(even) {
    background-color: #e9e9e9;
  }
`;
