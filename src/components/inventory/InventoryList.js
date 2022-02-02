import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Property } from "./Property"

export const InventoryList = () => {

    const [props, updateProperty] = useState([])
   
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
    
    
    return (
        <>
            <button onClick={() => history.push("/inventory/propertyForm")}>New Property</button>
            <div className="property">
                {
                    props.map(a => <Property key={a.id} prop={a}/>)
                }
            </div>
           
        </>
    )
}
