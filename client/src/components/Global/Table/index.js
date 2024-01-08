import React, { useEffect, useMemo } from "react";
import {
  useBlockLayout,
  useResizeColumns,
  useRowSelect,
  useTable,
} from "react-table";
import TableCheckBox from "../TableCheckBox";
import * as Styles from "./styles";
import { toastWarn } from "../../../style/styleUtils";
import { nonTableUpdatePathnames, warnMsgs } from "../../../utils/variables";

const Table = ({
  columns,
  data,
  handleUpdateItems,
  deleteItemsMutation,
  setDeletingItems,
}) => {
  const defaultColumn = useMemo(() => ({ width: 150, maxWidth: 400 }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    toggleAllRowsSelected,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      handleUpdateItems,

      isNonEditable: window.location.pathname === "/sales",
      initialState: {
        hiddenColumns: columns.map((column) =>
          column.hidden === true ? column.accessor : column.id
        ),
      },
    },
    useBlockLayout,
    useResizeColumns,
    useRowSelect,
    (hooks) => {
      if (!nonTableUpdatePathnames.includes(window.location.pathname)) {
        // add a column for selection (checkbox)
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <TableCheckBox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <TableCheckBox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
      }
    }
  );

  useEffect(() => {
    if (setDeletingItems) {
      setDeletingItems(selectedFlatRows);
    }
  }, [selectedFlatRows]);

  useEffect(() => {
    if (deleteItemsMutation?.isSuccess) {
      if (deleteItemsMutation.isError && deleteItemsMutation.failureCount > 3) {
        toastWarn(warnMsgs.CONSTANT_ERROR.message);
        // TODO : Send email error to admin
      }
      toggleAllRowsSelected(false);
    }
  }, [deleteItemsMutation]);

  return (
    <Styles.Container>
      <Styles.Table {...getTableProps()}>
        <Styles.THead>
          {headerGroups.map((headerGroup) => (
            <Styles.TR {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Styles.TH {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <Styles.Resizer {...column.getResizerProps()} />
                </Styles.TH>
              ))}
            </Styles.TR>
          ))}
        </Styles.THead>

        <Styles.TBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Styles.TR {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Styles.TD {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </Styles.TD>
                  );
                })}
              </Styles.TR>
            );
          })}
        </Styles.TBody>
      </Styles.Table>
    </Styles.Container>
  );
};

export default Table;
