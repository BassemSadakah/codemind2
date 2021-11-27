import React,{useState,useEffect} from 'react'

function Modal({setModalVisibility,setTableData,modalData,setModalData}) {
    let initData = { "year": ["", "", 4], "start_date": ["", "", 10], "end_date": ["", "", 10], "notes": ["", "", 0] }
    if(modalData){
        let index=0
        for(let d in initData){
            initData[d][0]=modalData[index]
            index++
        }
    }
    const [inputs, setInputs] = useState(initData);
    const [formValid, setFormValid] = useState(false);
    useEffect(() => {
        validateForm()
    }, [inputs])
    const handleSubmit=function(){
        var row=[]
        for(var d in inputs){
            row.push(inputs[d][0])
        }
        setTableData(state=>[...state,row])
        // let pages = Math.floor(tableData.length / 5) + 1
        closeModal()
    }
      const validateForm = function(){
        for(var input in inputs){
            if(inputs[input][0].length<inputs[input][2]){
                setFormValid(false)
                return false;
            }
            setFormValid(true);
    }
     };
      const onChangeHandler = function({target}){
          setInputs(state => ({ ...state, [target.name]: [target.value, target.type, inputs[target.name][2]] }))
     };
      const closeModal = function(){
          setModalVisibility(false)
          setFormValid(false)
          setInputs({ "year": ["", "", 4], "start_date": ["", "", 10], "end_date": ["", "", 10], "notes": ["", "", 0] })
          setModalData(false)
    };
      const onDateChangeHandler = function({target}){
        var val=target.value
        if(isNaN(val.replace(/\//g, ''))){
            val=val.slice(0,-1)
        }if((val.length=='2'||val.length=='5') && val.length>inputs[target.name][0].length){
            val=val+'/'
        }
        setInputs(state => ({ ...state, [target.name]:[val,target.type]}))
     };
    return (
    <div  class="fixed inset-0 z-10  overflow-y-auto" >
        <div onClick={closeModal} class="cursor-pointer fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
        < div className = " bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all m-auto sm:align-middle sm:max-w-md sm:w-full fixed top-1/2 left-1/2 -translate-x-1/2	-translate-y-1/2	" >
        <div className="bg-white m-auto block">
            <span onClick={closeModal} className="fixed w-min h-auto right-0 top-0 	text-right  float-right font-medium text-gray-400	mr-2 cursor-pointer " style={{"fontSize":"28px"}}>&times;</span>
            <div className="m-5 pt-7 flex flex-col flex-wrap">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Year</label>
                    <input name="year" onChange={onChangeHandler} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="username" type="text" placeholder="YYYY" maxlength="4" value={inputs["year"][0]}></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="start_date">Start Date </label>
                    <input name="start_date" onChange={onDateChangeHandler} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="start_date" type="text" placeholder="DD/MM/YYYY" maxLength="10"  value={inputs["start_date"] && inputs["start_date"][0]}></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="end_date">End Date</label>
                    <input name="end_date" onChange={onDateChangeHandler} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="end_date" type="text" placeholder="DD/MM/YYYY" maxLength="10"  value={inputs["end_date"] && inputs["end_date"][0]}></input>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">Notes</label>
                    <textarea name="notes" onChange={onChangeHandler} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="notes" type="text" placeholder="Notes" maxLength="75" value={inputs["notes"][0]}></textarea>
                </div>
                <p hidden class="text-red-500 text-xs italic"></p>
                <div class="flex items-center justify-between">
                    <button onClick={handleSubmit} class="disabled:opacity-50 disabled:hover:none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none m-auto" disabled={!formValid}>Submit</button>
                </div>
            </div>

        </div>
        </div>
    </div>
    )
}

export default Modal
