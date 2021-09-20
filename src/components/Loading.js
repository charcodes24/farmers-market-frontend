import { usePromiseTracker } from "react-promise-tracker";

export default function Loading() {
const { promiseInProgress } = usePromiseTracker();
  
    
    return (
        promiseInProgress &&
        <h1>Page is loading...</h1>
    ) 
}
