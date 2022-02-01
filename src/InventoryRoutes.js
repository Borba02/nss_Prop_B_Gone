import React from "react"
import { Route } from "react-router-dom"
import { InventoryList } from "./components/inventory/InventoryList"
import { PropertyForm } from "./components/inventory/PropertyForm"

export const InventoryRoutes = () => {
    return (
        <>
            <Route exact path="/inventory">
                <InventoryList />
            </Route>
            <Route path="/inventory/propertyForm">
                <PropertyForm />
            </Route>
        </>
    )

}