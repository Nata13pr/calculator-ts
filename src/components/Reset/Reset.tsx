import  {ReactNode,FC} from 'react';

interface IProps{
    onReset:()=>void
}

type ResetWithChildren<T>=T & {children?:ReactNode}
const Reset:FC<ResetWithChildren<IProps>> = ({onReset}) => {
    return <button onClick={onReset}>Reset</button>;
};

export default Reset;
