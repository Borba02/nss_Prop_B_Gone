import React from "react"
import { useLocation } from "react-router-dom"



export const Property = ({prop, deleteProp}) => {

    const CurrentUser = parseInt(localStorage.getItem("pbg_user"))
    const Loc = useLocation()

    return (
            <>
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`}   
            </p>
           { 
                prop.userId === CurrentUser && Loc.pathname === "/inventory"  ? 
                    <button className="btn--propertyDelete" onClick={() => deleteProp(prop.id)} >Delete</button> 
                : "" 
            }
       
            </>
    )
    
}

