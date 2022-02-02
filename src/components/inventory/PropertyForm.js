import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const PropertyForm = () => {
    const [property, addProperty] = useState({
        id: null,
        vin: "",
        storedDate: "",
        onHold: false,
        disposedOf: "",
        userId: null,
        locationId: 0
    })

    const [locations, addLocations] = useState ({})

    const history = useHistory()

    const saveProperty = (evt) => {
        evt.preventDefault()

    const newProperty = {
        id: property.id,
        vin: property.vin,
        storedDate: property.storedDate,
        onHold: property.onHold,
        disposedOf: "",
        userId: parseInt(localStorage.getItem("pbg_user")),
        locationId: property.locationId
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty)
    }

    return fetch("http://localhost:8088/storedProperty", fetchOption)
        .then(() => 
            history.push("/inventory")
    )
}
    return (
        <form className="propertyForm">
            <h2 className="propertyForm_title">Add New Prop</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="VIN">VIN:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="VIN"
                        onChange={(evt) => {
                            const copy = { ...property }
                            copy.vin = evt.target.value
                            addProperty(copy)
                        }}
                        />
                </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="dateStored">Date Stored:</label>
                        <input type="date" id="" placeholder="Select Date" 
                        onChange={(evt) => {
                            const copy = { ...property }
                            copy.storedDate = evt.target.value
                            addProperty(copy)
                        }}
                        />
                    </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="onHold">On Hold:</label>
                    <input required type="checkbox" className="form-control" placeholder="Hold" value="true"
                    onChange={(evt) => {
                        const copy = { ...property }
                        copy.onHold = evt.target.checked
                        addProperty(copy)
                    }}
                />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="location">Location:</label>
                <select required name="location" className="form-control" 
                onClick={(evt) => {
                    const copy = { ...property }
                    copy.locationId = evt.target.value
                    addProperty(copy)
                }}>
                <option value="0">Select a location</option>
                    {locations.map((location) => {
                        <option value={location.id}>
                            {location.name}
                        </option>
                    })}                    

                </select>
            </fieldset>
            <button className="btn btn-primary" onClick={saveProperty}>
        Submit New Prop
      </button>
        </form>         
    )
}