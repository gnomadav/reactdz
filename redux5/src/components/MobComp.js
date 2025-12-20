import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateClient, deleteClient } from "../redux/red1";

const MobComp = ({ client }) => {
    console.log("rend")
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const famRef = useRef();
    const imRef = useRef();
    const otchRef = useRef();
    const balanceRef = useRef();

    const isActive = client.balance >= 0;
    const statusText = isActive ? "active" : "blocked";
    const statusStyle = { color: isActive ? "green" : "red" };

    const Update = () => {
        dispatch(updateClient({
            id: client.id,
            fam: famRef.current.value,
            im: imRef.current.value,
            otch: otchRef.current.value,
            balance: balanceRef.current.value,//тут наверное можно в намбер закинуть 
        }));
        setIsEditing(false);
    };

    const Delete = () => {
        dispatch(deleteClient(client.id));
    };

    return (
        <div style={{ marginBottom: "8px" }}>
            <input defaultValue={client.fam} ref={famRef} disabled={!isEditing} />
            <input defaultValue={client.im} ref={imRef} disabled={!isEditing} />
            <input defaultValue={client.otch} ref={otchRef} disabled={!isEditing} />
            <input defaultValue={client.balance} ref={balanceRef} disabled={!isEditing} />
            
            <span style={statusStyle}>{statusText}</span>
            
            {!isEditing && (
                <button onClick={() => setIsEditing(true)}>редактировать</button>
            )}
            {isEditing && (
                <button onClick={Update}>сохранить</button>
            )}
            <button onClick={Delete}>удалить</button>
        </div>
    );
};

export default React.memo(MobComp);