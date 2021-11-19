// function Row(props) {
  
//   return <>
//     <td></td>
//   </>;
// }
import * as _ from 'lodash';
import { useGetBlockByIdAndTypeQuery } from '../http/httpSlice'

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

function DTable() {
  const {
    data: block,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBlockByIdAndTypeQuery({blockId: '1637203260626.1',type:'block_real'});
  console.log(block)
  let tableData = {
    columns: [
      {
        text:'id',
        order: 1,
      },
      {
        text:'姓名',
        order: 3,
      },
      {
        text:'住址',
        order: 2,
      },
      {
        text:'手机号',
        order: 4,
      }
    ],
    rows: [
      {
        id : 1,
        name: 'Happy1',
        address: '南街',
        mobile: '111',
      },
      {
        id : 2,
        name: 'Happy2',
        address: '西街',
        mobile: '222',
      }, 
      {
        id : 3,
        name: 'Happy2',
        address: '北街',
        mobile: '333',
      }
    ],
  };

  return <>
    测试  
    <table>
      <thead>
        {/* {_.orderBy(tableData.columns, 'order', 'asc').map(v => (
          <th>{v.text}</th>
        ))} */}
        {eleMove(tableData.columns, 0, 2).map(v => (
          <th>{v.text}</th>
        ))}
      </thead>
      <tbody>
        {tableData.rows.map(row => (
          <tr>
            {Object.keys(row).map(key => (
              <td>{row[key]}</td> 
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default DTable