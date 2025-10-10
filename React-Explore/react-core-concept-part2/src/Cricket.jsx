import { useState } from "react"

export default function Cricket() {
    const [runs, setRuns] = useState(0)

    

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns)
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }

    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    return (
        
        <div>
            
            <h1>Runs: {runs}</h1>
            {
                runs>50 && <p>Congratulations you get over 50 runs</p>
            }
            <button onClick={handleSix}>six</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSingle}>single</button>
        </div>
    )
}