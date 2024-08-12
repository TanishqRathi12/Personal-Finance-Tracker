import {useDispatch } from "react-redux"
import { setFilter } from "../feature/filter/filterSlice"

export const Filter=()=>{
    const dispatch = useDispatch()
    const handleFilter=(filterType)=>{
        dispatch(setFilter(filterType))
    }
    return(
    <>
    <div className="flex justify-left">
    <button onClick={ ()=> handleFilter ("All") }  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">All</button>
    <button onClick={()=> handleFilter("income")}  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Income</button>
    <button onClick={()=>handleFilter("expense")}  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Expense</button>
    </div>
    </>
    )
}