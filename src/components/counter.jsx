import { useEffect, useLayoutEffect } from "react"


function Counter({ count }) {
        
    useEffect(()=>{
        console.log("counter test")

        //returning in useEffect callback


        return ()=>{
            console.log("component unmounted")
        }
    },[])

    useLayoutEffect(()=>{
        console.log("before ui")
    },[])


    return (
        <div>

            <h1>{count}</h1>
            


        </div>
    )
}

export default Counter