import React, { useEffect, useState } from "react"
import { Property } from "./Property"

export const InventoryList = () => {

    const [props, updateProperty] = useState([])
   

    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
    
    
    return (
        <>
            <div className="property">
                {
                    props.map(a => <Property key={a.id} prop={a}/>)
                }
            </div>
           
        </>
    )
}
