import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

import {useTable,Column,useSortBy, TableOptions, usePagination} from "react-table"
// higher order funtion below 
// it will recieve data types where this component will be used 
function Table<T extends object>(
columns:Column<T>[],
data:T[],
ClassName:string,
heading:string,
showPagination:boolean=false,
) {
  //  
  // 
  return function  Ret(){
    const options: TableOptions<T> = {
      columns,
      data,
      
      initialState: {
        pageSize: 6,
      },
    };
      
    
   
     const { getTableProps,getTableBodyProps,headerGroups,page,prepareRow  ,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex}} = 
     useTable(options,useSortBy,usePagination);
    return <div  className={ClassName} >

          <h2 className="heading">{heading}</h2>
          <table className="table" {...getTableProps()}>
                  <thead >
          {headerGroups.map((hg)=>(
            <tr {...hg.getHeaderGroupProps()}>

              {
                hg.headers.map((col)=>(

                  <th  {...col.getHeaderProps(col.getSortByToggleProps() )}>
                    {col.render("Header")}
                    {""}
                    {""}
                    {
                      col.isSorted && <span>
                         {col.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    }
                  </th>
                ))
              }


            </tr>
          ))}
        </thead>
           <tbody {...getTableBodyProps()}>
                {
                  page.map((row)=>{
                    prepareRow(row);
                    return <tr {...row.getRowProps()}>
                      {row.cells.map((cell)=>
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                      )}
                    </tr>
                  })
                }
           </tbody>
          </table>
       {showPagination && (
       <div className="pagination">
        <button  disabled={!canPreviousPage}onClick={previousPage}>prev</button>
        <span> {`${pageIndex + 1 } of  ${pageCount}`}  </span>
       <button disabled={!canNextPage} onClick={nextPage}>next</button>
       </div>)
        
        
        }

    </div>}
    
 

  
}

export default Table
