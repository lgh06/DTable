
import React from 'react';
import * as _ from 'lodash';
import { useGetBlockByIdAndTypeQuery } from '../http/httpSlice'
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
function DTable() {
  const {
    data: block_real,
  } = useGetBlockByIdAndTypeQuery(
    {
      block_id: '1637203260626.1',
      type:'block_real',
      sort: {"__row_order": 1}
    });
  const {
    data: block_meta,
  } = useGetBlockByIdAndTypeQuery(
    {
      block_id: '1637203260626.1',
      type:'block_meta',
      // TODO MongoDB $unwind resort
      // sort: {"columns.order": 1}
    });

  console.log(block_real, block_meta)
  
  let columns, data;

  data = block_real;

  if (block_meta){
    columns = _.cloneDeep(block_meta[0].columns)
    columns.forEach(v => {
      v.Header = v.text;
      v.accessor = v.key;
    });
  }

  if (!data || !columns) return <></>;
  return <><DataTable data={data} columns={columns}></DataTable></>;

}

export default DTable