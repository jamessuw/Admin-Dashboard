import { useState } from "react";
function PurchaseOrderForm({ onInputChange, onSubmit }) {
    const [item, setItem] = useState({
      no: "",
      description: "",
      quantity: "",
      unit: "",
      costPerUnit: "",
      totalPrice: "",
      date: "",
      id: "",
      to: "",
    });
  
    const handleItemInputChange = (e) => {
      const { name, value } = e.target;
      const parsedValue = isNaN(value) ? value : parseInt(value, 10);
  
      setItem({ ...item, [name]: parsedValue });
      onInputChange({ ...item, [name]: parsedValue });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:5000/api/save-purchase-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });
  
        if (response.ok) {
          // Handle success response...
          console.log('Purchase order data saved successfully!');
          setItem({
            no: "",
            description: "",
            quantity: "",
            unit: "",
            costPerUnit: "",
            totalPrice: "",
            date: "",
            id: "",
            to: "",
          });
        } else {
          // Handle error response...
          console.error('Error:', response.statusText);
          // Show an error message to the user
        }
      } catch (error) {
        console.error('Error occurred while saving purchase order data:', error);
      }
  
      // Notify the parent component that the form is submitted (if needed)
      onSubmit();
    };
  
return (
<div>
    <div className="PO-container">
        <h1>Purchase Order</h1>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit} method="post" action="/save-data">
            <label>To</label>
            <input type="to" name="to" value={item.to} onChange={handleItemInputChange}
                                placeholder="to"></input>

            <label>ID Purchase Order</label>
            <input type="id" name="id" value={item.id} onChange={handleItemInputChange}
                                placeholder="id"></input>

            <label>Date</label>
            <input type="number" name="date" value={item.date} onChange={handleItemInputChange}
                                placeholder="date"></input>

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
                            <input type="text" name="description" value={item.description} onChange={handleItemInputChange}
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
                            <input type="unit" name="unit" value={item.unit} onChange={handleItemInputChange}
                                placeholder="unit"></input></div>

                        <div className="label-input">
                            <label>Cost per Unit</label>
                            <input type="costPerUnit" name="costPerUnit" value={item.costPerUnit} onChange={handleItemInputChange}
                                placeholder="costPerUnit"></input></div>

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