import React,{useState,useMemo} from "react";

import Inputsy from "./Inputsy";
import Words from "./Words";

export default function Maxin ({words}){
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
            <Inputsy
                val = {val}
                valChange = {setVal}
                sort = {sort}
                sortChange = {setSort}
                reset = {resetBt}
            />

            <Words
                words = {filtFunck}
            />
        </div>
    );
}

