import  {FC, useState} from 'react';

import SelectPercentage from '../components/SelectPercentage.tsx'
import BillInput from "./BillInput.tsx";
import Output from "./Output/Output.tsx";
import Reset from "./Reset/Reset.tsx";

const TipCalculator: FC = () => {
    const [bill, setBill] = useState<string >("");
    const [percentage1, setPercentage1] = useState<number>(0);
    const [percentage2, setPercentage2] = useState<number>(0);

    const tip:number = Number(bill) * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill}/>
            <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
                How did your friend like the service?
            </SelectPercentage>

            {Number(bill) > 0 && (
                <>
                    <Output bill={bill} tip={tip}/>
                    <Reset onReset={handleReset}/>
                </>
            )}
        </div>
    );
}

export default TipCalculator;