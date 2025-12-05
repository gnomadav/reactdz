import React,{useState,useMemo} from "react";

import Inputsyn from "./Inputsyn";
import Wordsn from "./Wordsn";

export default function Maxinm ({words}){
    const [val,setVal] = useState("");
    const [sort,setSort] = useState(false);

    const filtFunck = useMemo(() => {
        let res = [...words]

        if (val.trim() !== ""){
            res = res.filter((wor) => 
            wor.toLowerCase().includes(val.toLocaleLowerCase()))
        }

        if (sort){
            res = res.sort();
        }

        return res;
    },[val,sort,words])

    const resetBt = () =>{
        setVal("");
        setSort(false);
    }
    
    return(
        <div>
            <Inputsyn
                val = {val}
                valChange = {setVal}
                sort = {sort}
                sortChange = {setSort}
                reset = {resetBt}
            />

            <Wordsn
                words = {filtFunck}
            />
        </div>
    );
}

