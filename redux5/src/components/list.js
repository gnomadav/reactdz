import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanyThunk } from "../redux/red1";
import MobComp from "./MobComp";

function ClientsList() {
    const dispatch = useDispatch();
    const companyName = useSelector(state => state.clients.companyName);
    const clients = useSelector(state => state.clients.clients);

    

    return (
        <div>
            <h1>{companyName}</h1>
            <p>Количество клиентов: {clients.length}</p>
            {clients.map(client => (
                <MobComp key={client.id} client={client} />
            ))}
        </div>
    );
}

export default ClientsList;