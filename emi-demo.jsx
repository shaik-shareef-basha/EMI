import { useState } from "react"


export function EMIDemo()

{
     
    const [amount , setAmount] = useState(100000);
    const [years , setYears] = useState(1);
    const [interest , setInterest] = useState(10.45);
    const [installment , setInstallment] = useState(0);

    function handleAmountChange(e){
        setAmount(e.target.value);
    }
    function handleYearsChange(e){
        setYears(e.target.value);
    }
    function handleRateChange(e){
        setInterest(e.target.value);
    }
    function handleCalculateClick(){
        var P = amount;
        var n = years * 12;
        var r = interest/12/100;
        var EMI = P * r * (Math.pow(1+r,n)) / Math.pow(1+r,n) - 1;
        setInstallment(EMI);
    }

    return(
        <div className="container-fluid p-4 bg-secondary ">
            <div className="bg-light">
            <div className="row p-4">
                    <div className="col"> 
                      Amount you need <input type="text" value={amount} size="16" />
                    </div>
                    <div className="col">
                        for <input type="number" min="1" max="5" value={years} /> years
                    </div>
                    <div className="col">
                        Interest rate <input type="number" value={interest} min="10.45" max="18.45" step="0.01" /> %
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col">
                        1,00,000 <input type="range" min="100000" max="500000" onChange={handleAmountChange} /> 5,00,000
                    </div>
                    <div className="col">
                        1 <input type="range"  min="1" max="5" onChange={handleYearsChange} /> 5
                    </div>
                    <div className="col">
                        10.45% <input type="range" onChange={handleRateChange} min="10.45" max="18.45"  /> 18.45%
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                    <button className="btn btn-primary" onClick={handleCalculateClick} >Calculate</button>
                    </div>
                </div>
                <div className="row p-4 ">
                    <div className="col">
                        Your installment amount <b>{installment.toLocaleString('en-in', {style:'currency', currency:'INR'})}</b>.
                    </div>
                </div> 
            </div>
        </div>
    )
}