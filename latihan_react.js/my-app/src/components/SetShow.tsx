import { useState } from "react";
export default function ShowPage() {
    const [show, setShow] = useState(false)
    console.log("show", show)

    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? "Sembunyikan" : "Tampilkan"}</button>
            {show && <p>Ini teksnya</p>}
        </div>
    )
}