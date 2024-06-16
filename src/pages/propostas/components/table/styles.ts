import styled from "styled-components"

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #333;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);

  th {
    padding: 0.5rem;

    &:not(:first-child, :last-child) {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    border-bottom: 1.5px solid #808080;
  }

  tbody {
    td {
      padding: 0.5rem 1rem;
      text-align: center;
      border-bottom: 1.5px solid #808080;
  
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
  
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      &:not(:first-child, :last-child) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
    }
  }
`;