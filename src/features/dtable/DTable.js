
import React from 'react';
import * as _ from 'lodash';
import { useTable } from 'react-table'


// element move and then reorder. (not just swap position)
function eleMove(arr, from, to) {
  return arr.reduce((prev, current, idx, self) => {
    if (from === to) {
      prev.push(current);
    }
    if (idx === from) {
      return prev;
    }
    if (from < to) {
      prev.push(current);
    }
    if (idx === to) {
      prev.push(self[from]);
    }
    if (from > to) {
      prev.push(current);
    }
    return prev;
  }, []);
}

function DataTable({data, columns}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  // props append to table & tr
  console.log(getTableProps(), getTableBodyProps())
  //
  console.log(headerGroups, rows)
  console.log(prepareRow)
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
// 前端DTable组件
// 传入 block_meta 与 block_real即可
function DTable({meta, real}) {

  // transform block_meta to columns (react-table accepted)
  let columns;
  if (meta){
    columns = _.cloneDeep(meta[0].columns)
    columns.forEach(v => {
      v.Header = v.text;
      v.accessor = v.key;
    });
  }

  if (!real || !columns) return <div>Loading</div>;
  return <DataTable data={real} columns={columns}></DataTable>;

}

export default DTable