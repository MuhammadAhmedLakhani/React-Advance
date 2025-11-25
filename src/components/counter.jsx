import { useEffect } from "react"


function Counter({ count }) {
        
    useEffect(()=>{
        console.log("counter test")

        //returning in useEffect callback


        return ()=>{
            console.log("component unmounted")
        }
    },[])


    return (
        <div>

            <h1>{count}</h1>
            


        </div>
    )
}

export default Counter