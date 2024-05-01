import React,{FC} from 'react';

interface IProps {
    bill:number | string,
    tip:number,
}

type OutputWithChildren<T>=T & {children?:React.ReactNode}
const Output:FC<OutputWithChildren<IProps>> = ({bill, tip}) => {
    return (
        <h3>
            You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
        </h3>
    );
};

export default Output;


