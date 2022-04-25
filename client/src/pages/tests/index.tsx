import {useEffect} from "react";
import TestList from "../../components/testList/TestList";

function Tests() {
    useEffect(() => {
        Test1([20,20,26], (result => console.log(result)))
    }, [])
    
    function Test1(arr: number[], func: (result: number) => unknown): number {
        let sum = 0;
        arr.forEach(n => {
            if (n % 2 === 0 && n > 20) {
                sum += 20;
            } else  {
                sum += n;
            }
        })
        func(sum)
        
        return sum
    }
    
    return<>
        <TestList names={["aa", "ac", "ab"]} order={"DSC"}/>
    </>
}

export default Tests