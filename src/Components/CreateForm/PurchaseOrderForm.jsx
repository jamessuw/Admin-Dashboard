import React from "react";

function PurchaseOrderForm() {
return (
<div>
    <div className="PO-container">
        <h1>Purchase Order</h1>
        <h2>General Information</h2>
        <form>
            <label>To</label>
            <input></input>

            <label>ID Purchase Order</label>
            <input></input>

            <label>Date</label>
            <input></input>

            <label>Rechiver PO</label>
            <input></input>
            <div>
                <span className="line"></span>
                <h2>Items Informations</h2>
                <div className="items-container-popup">
                    <div className="container-field-1">
                    <div className="label-input">
                        <label>No</label>
                        <input></input>
                    </div>
                    <div className="label-input">
                        <label>Descriptions</label>
                        <input></input>
                        </div>

                    <div className="label-input">
                        <label>Quantity Items</label>
                        <input></input>
                    </div></div>

                    <div className="conatiner-field-2">
                    <div className="label-input">
                        <label>Unit</label>
                        <input></input></div>
               
                <div className="label-input">
                    <label>Cost per Unit</label>
                    <input></input></div>

                <div className="label-input">

                    <label>Quantity Item</label>
                    <input></input>
                </div>
                <div className="label-input">
                    <label>Total price</label>
                    <input></input>
                </div></div> </div>
            </div>

        </form>
    </div>
</div>
);
}

export default PurchaseOrderForm;