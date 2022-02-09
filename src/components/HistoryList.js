import React, { useEffect, useState } from "react"
import { Property } from "./inventory/Property"

export const HistoryList = () => {


    const [props, updateProperty] = useState([])
   
    const restoreDisposalDate = {
        disposedOf: ""
    }


    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
    
    const deleteProp = (id) => {
        fetch(`http://localhost:8088/storedProperty/${id}`,{
            method: "DELETE"
        })
        .then(() => {  
            fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
}
    const restoreProp = (id) => {
        fetch(`http://localhost:8088/storedProperty/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(restoreDisposalDate)
        })
        .then(() => {  
            fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
        
}
    return (
        <>
            
                <div className="property">
                { 
                    props.map(a => <Property key={a.id} prop={a} restoreProp={restoreProp} deleteProp={deleteProp}/>)
                }
            </div>
           
           
        </>
    )
}