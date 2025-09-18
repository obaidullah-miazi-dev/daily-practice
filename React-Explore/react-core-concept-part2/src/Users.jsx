import { use } from "react"

export default function Users({fetchUsers}){

    const users = use(fetchUsers)
    return(
        <div className="card">
            <h1>Users: {users.length}</h1>
        </div>
    )
}