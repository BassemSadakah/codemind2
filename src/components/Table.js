import React,{useState,useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit,faPen } from '@fortawesome/free-solid-svg-icons'
function Table({ data, setTableData,setModalData,setModalVisibility,currentPage}) {
    let newData=[...data]
    newData = newData.splice((currentPage-1)*5,(currentPage)*5)
    const deleteRow=function(index){
        setTableData(data=>{
            var x=[...data]
            console.log(x)
            x.splice(index,1)
            return x
        })
    }
    const editRow=function(index){
       setModalData(data[index])
        setModalVisibility(true)
    }
    // const [data,setData]=useState(props.data)
    return (
        <div className="rounded-md md:w-5/6 mb-5 shadow overflow-x-auto m-auto " style={{"min-width":"500px"}}>
            <table className="min-w-full divide-y divide-gray-200 border-collapse table-fixed">
                {/* <thead className="bg-gray-200">
                    <tr>
                        <th className="py-3  text-base text-gray-500">Year</th>
                        <th className="py-3  text-base text-gray-500">Start Date</th>
                        <th className="py-3  text-base text-gray-500">End Date</th>
                        <th className="py-3  text-base text-gray-500">Notes</th>
                        <th className="py-3  text-base text-gray-500">Actions</th>
                    </tr>
                </thead> */}
                    <thead className="bg-green-400">
                        <tr>
                            <th className="py-3  text-base text-white">Year</th>
                            <th className="py-3  text-base text-white">Start Date</th>
                            <th className="py-3  text-base text-white">End Date</th>
                            <th className="py-3  text-base text-white">Notes</th>
                            <th className="py-3  text-base text-white">Actions</th>
                        </tr>
                    </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {newData.map((r,index)=>(
                    <tr key={String(index)}>
                        <td className="py-4 text-md font-medium ">{r[0]}</td>
                        <td className="py-4 text-md font-medium ">{r[1]}</td>
                        <td className="py-4 text-md font-medium ">{r[2]}</td>
                        <td className="py-4 text-md font-medium ">{r[3]}</td>
                        <td className="py-4">
                            <FontAwesomeIcon onClick={()=>editRow(index)} icon={faPen} className="text-green-500 hover:text-gray-700 cursor-pointer mr-7"/> 
                            <FontAwesomeIcon onClick={()=>deleteRow(index)} icon={faTrash} className="text-red-500 hover:text-gray-700 cursor-pointer"/>
                         </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
