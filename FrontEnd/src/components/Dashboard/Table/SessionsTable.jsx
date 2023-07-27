import styled from "styled-components";
import * as React from "react";
import { useTable } from "react-table";

const SessionsTableStyled = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);
  padding: 27px 40px 17px 31px;
  .show-entries {
    padding-bottom: 47px;
  }
  .show-entries-number {
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .entries-quantity {
    width: 40px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #8c8888;
    text-align: center;
  }
  input {
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const SessionsTable = () => {
  const columns = React.useMemo(() => [
    {
      Header: "Date",
      id: "date",
    },
    {
      Header: "Class",
      id: "class",
    },
    {
      Header: "Tutor",
      id: "tutor",
    },
    {
      Header: "Topic",
      id: "topic",
    },
    {
      Header: "Status",
      id: "status",
    },
    {
      Header: "Video",
      id: "video",
    },
    {
      Header: "Files",
      id: "files",
    },
    {
      Header: "Assignment",
      id: "assignment",
    },
  ]);
  //   const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
  //     useTable({columns});
  return (
    <SessionsTableStyled>
      <div className="show-entries">
        Show <input className="entries-quantity" type="number" /> entries
      </div>
      {/*Todo: use useTable for table here */}
      <div className="show-entries-number">Showing 0 to 0 of 0 entries</div>
    </SessionsTableStyled>
  );
};
