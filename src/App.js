import './App.css';
import {useState} from 'react'
import Table from './components/Table';
import Pagination from './components/Pagination';
import TableHeader from './components/TableHeader';
import Modal from './components/Modal';
function App() {
  console.log('App')
  const [modalVisibility,setModalVisibility]=useState(false)
  const [modalData,setModalData]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const table_data=[["2019","15/12/2020","19/05/2025","Lorem ipsum ...."],
                    ["2015","01/09/2015","24/07/2018","Lorem ipsum ...."],
                    ["2011","12/02/2012","11/08/2016","Lorem ipsum ...."],
                    ["2010","25/04/2010","29/01/2013","Lorem ipsum ...."],
                    ["2009","25/04/2008","29/01/2010","Lorem ipsum ...."],
                    ["2009","25/04/2008","29/01/2010","Lorem ipsum ...."],
                  ]
    const [tableData,setTableData]=useState(table_data)
  return (
    <div className="App" >
      <nav className="top-0 h-14 fixed w-screen shadow-md bg-white" ></nav>
      {/* <div className="bg-white container p-25 shadow-lg rounded-lg m-auto"> */}
        <TableHeader setModalVisibility={setModalVisibility} />
      <Table currentPage={currentPage} data={tableData} setTableData={setTableData} setModalData={setModalData} setModalVisibility={setModalVisibility}/>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} tableData={tableData} setTableData={setTableData}/>
      {/* </div> */}
      {modalVisibility && <Modal setCurrentPage={setCurrentPage} tableData={tableData} modalData={modalData} setModalData={setModalData} setModalVisibility={setModalVisibility} setTableData={setTableData}/>}
    </div>
  );
}

export default App;
