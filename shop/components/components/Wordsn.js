import React from "react";

export default function Wordsn ({words}){
    return (
        <div>
            {words.map((word) => 
            <div key={word}>{word}</div>
            )}
        </div>
    )
}

