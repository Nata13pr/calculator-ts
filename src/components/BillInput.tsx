import React, {FC} from "react";

interface IProps {
    bill: string ,
    onSetBill:  React.Dispatch<React.SetStateAction<string>>,
}

type BillInputWithChildren<T> = T & { children?: React.ReactNode }
const BillInput: FC<BillInputWithChildren<IProps
>> = ({bill, onSetBill}) => {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Bill value"
                value={bill}
                onChange={(e) => onSetBill(e.target.value)}
            />
        </div>
    );
}
export default BillInput;