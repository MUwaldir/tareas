import React, { useState } from "react";

/* rfce */
function Boton(){

    const [count, setCount] = useState(0);
    return (
        <div className="text-center text-white ">
            <h1 className="bg-orange-400 w-30 mx-auto p-1 rounded ">Count : <span className="text-black font-bold">{count}</span> </h1>
        <button className="bg-red-600 w-20 py-2 px-3 mb-2 mx-1 rounded-md" onClick={ ()=> setCount(count + 1) }>
            Conteo
        </button>
        <button className="bg-green-600 w-20 py-2 px-3 mb-2 rounded-md" onClick={ ()=> setCount(0) }>
            Reiniciar
        </button>
        </div>
    )
}

export default Boton;