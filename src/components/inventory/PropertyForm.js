import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const PropertyForm = () => {
    const [property, addProperty] = useState({
        id: null,
        vin: "",
        storedDate: "",
        onHold: null,
        disposedOf: "",
        userId: null,
        locationId: null
    })

    const history = useHistory()

    const saveProperty = (evt) => {
        evt.preventDefault()

    const newProperty = {
        id: property.id,
        vin: property.vin,
        storedDate: property.storedDate,
        onHold: property.onHold,
        disposedOf: "",
        userId: null,
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
                        <input required type="date" id="" placeholder="Select Date" 
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

                    {/* GET TARGET VALUE OF LOCATIONID TO BE AN INTEGER */}

            <fieldset>
                <label htmlFor="location">Location:</label>
                <select required name="location" className="form-control" 
                onClick={(evt) => {
                    const copy = { ...property }
                    copy.locationId = evt.target.value
                    addProperty(copy)
                }}><optgroup label="Front Warehouse">
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                </optgroup>
                <optgroup label="Back Warehouse">
                    <option value="4">D</option>
                    <option value="5">E</option>
                    <option value="6">F</option>
                </optgroup>
                </select>
            </fieldset>
            <button className="btn btn-primary" onClick={saveProperty}>
        Submit New Prop
      </button>
        </form>         
    )
}