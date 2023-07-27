import styled from "styled-components";
import * as React from "react";
import { usePagination, useTable } from "react-table";
import { useMediaQuery } from "react-responsive";
import { DButton } from "../DashboardButton";
import { ReactComponent as RankIcon1 } from "../../../assets/icons/dashboardicon/Rank1.svg";
import { ReactComponent as RankIcon2 } from "../../../assets/icons/dashboardicon/Rank2.svg";
import { ReactComponent as RankIcon3 } from "../../../assets/icons/dashboardicon/Rank3.svg";
import { ReactComponent as RankIcon4 } from "../../../assets/icons/dashboardicon/Rank4.svg";

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: fit-content;
  border-radius: 12px;
  background: #fff;
  margin-top: 41px;
  font-family: Poppins;
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
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
  }
  th {
    text-align: left;
    color: #c6c2c2;
    font-size: 13px;
    font-weight: 400;
  }
  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  tbody td {
    position: relative;
    text-align: left;
    color: #2e2c2c;
    font-size: 16px;
    font-weight: 500;
  }
  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
  }
  .avt-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ranking {
    display: flex;
    flex-direction: row;
    gap: 11px;
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
    .avt-name,
    .ranking {
      justify-content: right;
    }
  }
`;
export const TutorRankingTable = ({ inputData }) => {
  inputData.sort(function (a, b) {
    return b.score - a.score;
  });
  inputData.forEach((data, index) => {
    data.serial = index + 1;
  });
  const data = React.useMemo(() => inputData, [inputData]);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1200px)" });
  const columns = React.useMemo(
    () => [
      {
        Header: "Ranking",
        accessor: "serial",
        Cell: ({ row }) => {
          switch (row.original.serial) {
            case 1:
              return (
                <div className="ranking">
                  <RankIcon1 />
                  <span>0{row.original.serial}</span>
                </div>
              );
            case 2:
              return (
                <div className="ranking">
                  <RankIcon2 />
                  <span>0{row.original.serial}</span>
                </div>
              );
            case 3:
              return (
                <div className="ranking">
                  <RankIcon3 />
                  <span>0{row.original.serial}</span>
                </div>
              );
            case 4:
              return (
                <div className="ranking">
                  <RankIcon4 />
                  <span>0{row.original.serial}</span>
                </div>
              );
            default:
              return (
                <div className="ranking">
                  <RankIcon4 />
                  <span>
                    {row.original.serial < 10 && <>0</>}
                    {row.original.serial}
                  </span>
                </div>
              );
          }
        },
      },
      {
        Header: "Tutor name",
        accessor: "name",
        Cell: ({ row }) => {
          return (
            <div className="avt-name">
              <img src={row.original.avatar} alt="" />
              <span>{row.original.name}</span>
            </div>
          );
        },
      },
      {
        Header: "Subject",
        accessor: "subject",
      },
      {
        Header: "Students",
        accessor: "students_count",
      },
      {
        Header: "Score",
        accessor: "score",
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
    <TableStyled>
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
    </TableStyled>
  );
};
