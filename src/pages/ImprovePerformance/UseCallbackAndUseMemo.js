import { useState, useCallback, useMemo } from 'react'
import Title from '../../components/improve-performance/usecallback-and-usememo/Title'
import Count from '../../components/improve-performance/usecallback-and-usememo/Count'
import Button from '../../components/improve-performance/usecallback-and-usememo/Button'

const UseCallbackAndUseMemo = () => {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)
    const [count, setCount] = useState(0)

    const isEven = useMemo(() => {
        // a delay will happen if `isEven` is caculated
        let i = 0
        while (i < 5 * Math.pow(10, 3)) {
            console.log('a delay will happen if `isEven` is caculated')
            i++
        }
        return count % 2 === 0
    }, [count])

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    const incrementCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <Title />
            <h3>useCallback</h3>
            <Count text="age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
            <hr />
            <h3>useMemo</h3>
            <Count text="count" count={count} />
            <p>Count is { isEven ? 'even' : 'odd'}</p>
            <p>A delay will happen if `isEven` is caculated</p>
            <Button handleClick={incrementCount}>Increment Count</Button>
        </div>
    );
}
 
export default UseCallbackAndUseMemo;