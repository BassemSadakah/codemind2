import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
function Pagination({currentPage,setCurrentPage,tableData,setTableData}) {
    let pages=Math.floor(tableData.length/5)+1
    // pages=2
    return (
<div class="px-4 py-3 border-gray-200">
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a onClick={()=>((currentPage<=pages &&currentPage!=1)?setCurrentPage(p=>p-1):'')} href="#" className="px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"><FontAwesomeIcon icon={faChevronLeft}/></a>
          {Array(pages).fill(1).map((p,i)=>(
            <Pagin active={currentPage==i+1} onClick={()=>setCurrentPage(i+1)} >{(i+1)}</Pagin>
          ))}
        <a href="#" onClick={()=>((currentPage<pages)?setCurrentPage(p=>p+1):'')} className=" px-2 py-2 rounded-r-md border border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50"><FontAwesomeIcon icon={faChevronRight}/></a>
      </nav>
    </div>
</div>
    )
}

function Pagin({active,children,onClick}){
if(active){
  return(
    <a href="#" className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={onClick}>{children} </a>
  )
}
return(
  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={onClick}>{children} </a>

)
}
export default Pagination
