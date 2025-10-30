import { use } from "react"
import Freind from "./Freind"

export default function Freinds({freindsPromise}){
    const freinds = use(freindsPromise)
    // console.log(freinds)
    return(
        <div>
            <h1>Freinds List</h1>
            {
                freinds.map(freind=> <Freind key={freind.id} freind={freind}></Freind>)
            }
        </div>
    )
}