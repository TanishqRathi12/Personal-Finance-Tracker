import { useSelector } from "react-redux";


export const Summary=()=>{
    const transactions = useSelector((state)=>state.transaction)
    console.log(transactions);
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.forEach(ele=> {
        if(ele.type === 'income'){
            totalIncome += ele.amount;
        }
        else
        totalExpense += ele.amount;
    });
    let Balance = totalIncome - totalExpense;
    return(
        <div className="flex justify-center">
        <div className="bg-gray-500 text-white block border rounded-lg text-center m-4 p-2 w-40">
            <div className="text-3xl">Summary</div>
            <span>Total Income: {totalIncome}</span><br />
            <span>Total Expense: {totalExpense}</span><br />
            <span><b>Balance: {Balance}</b></span>
        </div>
        </div>
    )
}
