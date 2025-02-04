import { useTable } from "react-table";

interface CustomTableProps {
  columns: Array<any>;
  data: any;
  tableClass?: string;
  tHeadClass?: string;
  tBodyClass?: string;
  tdClass?: string;
  thClass?: string;
  tableHeadTrClass?: string;
  tableBodyTrClass?: string;
  showPaginator?: boolean;
  itemsPerrPage?: number;
}

const CustomTable = ({
  columns,
  data,
  tableClass,
  tHeadClass,
  tBodyClass,
  tdClass,
  thClass,
  tableBodyTrClass,
  tableHeadTrClass,
}: CustomTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data });

  return (
    <div className="overflow-auto relative">
      <table className={`w-full mt-5 ${tableClass}`} {...getTableProps()}>
        <thead className={` ${tHeadClass}`}>
          {headerGroups.map((headerGroup, index) => (
            <tr
              className={`${tableHeadTrClass}`}
              {...headerGroup.getHeaderGroupProps()}
              key={index}
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  className={`p-2 text-white bg-primary text-[12px]  font-bold border-b-2 border-b-gray-200 text-left py-2 pr-[30px]   ${thClass}`}
                  {...column.getHeaderProps()}
                  key={index}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {rows.length > 0 ? (
          <tbody className={` ${tBodyClass}`} {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  className={`even:bg-[#fafafa] bg-white  ${tableBodyTrClass}`}
                  {...row.getRowProps()}
                  key={index}
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        className={`font-normal  capitalize text-gray-600  text-[12px] p-2 border-b-[1px] border-[#E0E0E0] ${tdClass}`}
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        ) : (
          <td
            className={`font-normal  capitalize text-gray-600  text-[14px] p-2 border-b-[1px]  ${tdClass}`}
          >
            No Data Found
          </td>
        )}
      </table>
    </div>
  );
};

export default CustomTable;

CustomTable.defaultProps = {
  tableClass: "",
  tHeadClass: "",
  tBodyClass: "",
  tdClass: "",
  thClass: "",
  tableHeadTrClass: "",
  tableBodyTrClass: "",
};
