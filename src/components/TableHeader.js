import React from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TableHeader({setModalVisibility}) {
    return (
        <div className=" mt-52  md:w-5/6  overflow-x-auto m-auto  ">
            <button onClick={()=>setModalVisibility(true)} className="text-gray-500 hover:text-gray-600 text-white font-bold py-2 px-4 rounded float-right">
                <FontAwesomeIcon icon={faPlus} className="mr-2"/>
                Add new Item</button>
                {/* <input placeholder="Search" className="border-2 border-gray-200 rounded float-right py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> */}
        </div>
    )
}

export default TableHeader
