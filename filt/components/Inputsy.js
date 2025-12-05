import React from "react";

export default function Inputsy ({
    val,
    valChange,
    sort,
    sortChange,
    reset
}){
    console.log("render 2")
    return(
        <div>
            <input
            type="text"
            value={val}
            onChange={(eo) => valChange(eo.target.value)}>
            </input>

            <input
            type="checkbox"
            checked={sort}
            onChange={(eo) => sortChange(eo.target.checked)}>
            </input>

            <button
            onClick={reset}>
                Сброс...
            </button>
        </div>
    )
}