import React,{useMemo} from 'react'

const ExpensiveComponent =  ({num}) => {
    const expensiveCalculation = (n) => {
        console.log('Calculating...');
        return n*2
    };

    const memoizedValue = useMemo(() => expensiveCalculation(num),[num]);

    return <h2>Result:{memoizedValue}</h2>
}

export default ExpensiveComponent;