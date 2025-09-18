export default function Freind ({freind}){
    // console.log(freind)

    const {name,email,phone} = freind
    
    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}