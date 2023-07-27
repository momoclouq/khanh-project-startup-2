import styled from "styled-components";
import * as React from "react";
import { usePagination, useTable } from "react-table";
import { useMediaQuery } from "react-responsive";
import { DButton } from "../DashboardButton";

const MyClassesTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: fit-content;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);
  padding: 27px 40px 27px 31px;
  margin-top: 88px;
  font-family: sans-serif;
  font-weight: 100;
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
  th,
  td {
    padding: 15px;
    color: #7d7c7c;
  }
  th {
    text-align: right;
  }
  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  tbody td {
    position: relative;
    text-align: right;
  }
  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    table thead {
      display: none;
    }

    table,
    table tbody,
    table tr,
    table td {
      display: block;
      width: 100%;
    }
    table tr {
      margin-bottom: 15px;
      display: flex;
      flex-direction: row;
    }
    table td {
      position: relative;
    }
    .td-left,
    .td-right,
    .td-wrapper-left,
    .td-wrapper-right {
      width: 100%;
    }
    .td-left {
      text-align: left;
    }
    .td-right {
      text-align: right;
    }
  }
`;
export const MyClassesTable = ({ inputData }) => {
  const data = React.useMemo(() => inputData, [inputData]);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1200px)" });
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Tutor name",
        accessor: "tutor_name",
      },
      {
        Header: "Course",
        accessor: "course",
      },
      {
        Header: "Assignments",
        accessor: "assignments",
      },
      {
        Header: "Resources",
        accessor: "resources",
        Cell: (props) => <a href={props.value}>Here</a>,
      },
      {
        Header: "Final Test",
        accessor: "final_test",
      },
      {
        Header: "Total Score",
        accessor: "total_score",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data }, usePagination);
  const { pageIndex } = state;
  //   const { getTableBodyProps, getTableProps, headerGroups, page, prepareRow } =
  //     useTable({columns});
  return (
    <MyClassesTableStyled>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} {...getTableProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {isSmallScreen && (
                  <>
                    {headerGroups.map((headerGroups) => (
                      <div
                        className="td-wrapper-left"
                        {...headerGroups.getHeaderGroupProps()}
                      >
                        {headerGroups.headers.map((column) => {
                          return (
                            <td
                              className="td-left"
                              {...column.getHeaderProps()}
                            >
                              {column.render("Header")}
                            </td>
                          );
                        })}
                      </div>
                    ))}
                    <div className="td-wrapper-right">
                      {row.cells.map((cell) => (
                        <td className="td-right" {...cell.getCellProps()}>
                          {" "}
                          {cell.render("Cell")}{" "}
                        </td>
                      ))}
                    </div>
                  </>
                )}
                {!isSmallScreen && (
                  <>
                    {row.cells.map((cell) => (
                      <td className="td-right" {...cell.getCellProps()}>
                        {" "}
                        {cell.render("Cell")}{" "}
                      </td>
                    ))}
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="button-group">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <DButton
          fontSize="15px"
          textColor="#7D7C7C"
          height="20px"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </DButton>
        <DButton
          fontSize="15px"
          textColor="#7D7C7C"
          height="20px"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </DButton>
      </div>
    </MyClassesTableStyled>
  );
};
