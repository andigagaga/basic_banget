import { useState } from "react";
export default function Count() {
    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1 * 12)
    }
    const decrement = () => {
        setCount(count > 0 ? count - 1 * 12: 0)
    }
    const deleteCount = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increament}>Tambah</button>
            <button onClick={decrement}>Kurang</button>
            <button onClick={deleteCount}>Delete</button>
        </div>
    );
}