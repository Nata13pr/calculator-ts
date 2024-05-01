import React, {FC} from "react";

interface IProps {
    percentage: number,
    onSelect: React.Dispatch<React.SetStateAction<number>>
}

type SelectPercentageComponentWithChildren<T> = T
    & { children?: React.ReactNode }


const SelectPercentage: FC<SelectPercentageComponentWithChildren<IProps>> = ({children, percentage, onSelect}) => {
    return (
        <div>
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(e) => onSelect(Number(e.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

export default SelectPercentage;