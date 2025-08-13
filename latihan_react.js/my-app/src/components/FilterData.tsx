import { useState , useEffect} from "react";
import axios from "axios";

interface IAdress {
    street:string;
    city:string;
}
interface IUser {
    name:string;
    username:string;
    email:string;
    address: IAdress
}

export default function FilterData() {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    // kalau data dummy
    // const data = ["andi", "ira", "lia"]

    

    // kalau data api
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => err.message)
        .finally(() => setLoading(false))
    })
    // console.log("users", users)

    const filteredData = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    // console.log("data", filteredData)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <ul>
                {filteredData.map((data, i) => (
                    <li key={i}>
                        <p>{data.name}</p>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}