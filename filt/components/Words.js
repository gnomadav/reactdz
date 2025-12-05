import React from "react";

export default function Words ({words}){
    return (
        <div>
            {words.map((word) => 
            <div key={word}>{word}</div>
            )}
        </div>
    )
}

