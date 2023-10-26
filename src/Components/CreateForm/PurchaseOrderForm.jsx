import { useState } from "react";

function PurchaseOrderForm({ onInputChange, onSubmit }) {
const [item, setItem] = useState({
no: "",
description: "",
quantity: "",
unit: "",
costPerUnit: "",
totalPrice: ""
});

const handleItemInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = isNaN(value) ? value : parseInt(value, 10);
  
    setItem({ ...item, [name]: parsedValue });
    onInputChange({ ...item, [name]: parsedValue });
  };


const handleSubmit = (e) => {
e.preventDefault();
onSubmit(); // Notify the parent component that the form is submitted
};

return (
<div>
    <div className="PO-container">
        <h1>Purchase Order</h1>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
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
                            <input type="number" name="no" value={item.no} onChange={handleItemInputChange}
                                placeholder="No"></input>
                        </div>
                        <div className="label-input">
                            <label>Descriptions</label>
                            <input tyep="text" name="description" value={item.description} onChange={handleItemInputChange}
                                placeholder="description"></input>
                        </div>

                        <div className="label-input">
                            <label>Quantity Items</label>
                            <input></input>
                        </div>
                    </div>

                    <div className="conatiner-field-2">
                        <div className="label-input">
                            <label>Unit</label>
                            <input></input></div>

                        <div className="label-input">
                            <label>Cost per Unit</label>
                            <input></input></div>

                        <div className="label-input">

                            <label>Quantity Item</label>
                            <input type="number" name="quantity" value={item.quantity} onChange={handleItemInputChange}
                                placeholder="quantity"></input>
                        </div>
                        <div className="label-input">
                            <label>Total price</label>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>

        </form>
    </div>
</div>
);
}

export default PurchaseOrderForm;