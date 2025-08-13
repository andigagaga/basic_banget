import { useState, useEffect } from "react";
import axios from "axios";

interface IData {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
}

export default function GetTodoApi() {
  const [data, setData] = useState<IData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(resp => setData(resp.data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false))
  })

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-3">User List</h2>
      <ul className="divide-y divide-gray-200">
        {data.map((user) => (
          <li key={user.id} className="py-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
            <p className="text-sm text-gray-500">{user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
