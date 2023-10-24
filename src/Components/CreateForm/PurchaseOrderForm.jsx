import React from "react";

function PurchaseOrderForm() {
  return (
    <div>
      <div className="PO-container">
        <form>
          <label>To</label>
            <input></input>
       
          <label>ID Purchase Order</label>
            <input></input>
          

          <label>Date</label>
            <input></input>
          

          <label>Rechiver PO</label>
            <input></input>
          
<span className="line"></span>
          <label>No</label>
            <input></input>
          

          <label>Descriptions</label>
            <input></input>
          

          <label>Quantity Items</label>
            <input></input>

            <label>Unit</label>
            <input></input>
          
            <label>Cost per Unit</label>
            <input></input>
          
            <label>Quantity Item</label>
            <input></input>
          
            <label>Total price</label>
            <input></input>
          
          
        </form>
      </div>
    </div>
  );
}

export default PurchaseOrderForm;
