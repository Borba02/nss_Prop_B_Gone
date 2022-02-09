import React, { useEffect, useState } from "react"

import { Property } from "./inventory/Property"

export const DisposalList = () => {

    const [props, updateProperty] = useState([])
    
    const todayDate = new Date()
    const humanDate = () => {
        const format = {
            day: "numeric",
            month: "2-digit",
            year: "numeric",
        };
        return( new Date().toLocaleString(
            "en-ca",
            format
            ))}

    const capturedDate = humanDate(todayDate)   
    const dateObjBody = {
        disposedOf: capturedDate
    }      
    const sentDisposalDate = dateObjBody

              
                        

    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])

    const disposeProp = (id) => {
        fetch(`http://localhost:8088/storedProperty/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sentDisposalDate)
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
                    props.map(a => <Property key={a.id} prop={a} disposeProp={disposeProp}/>)
                }
            </div>
           
        </>
    )
}
