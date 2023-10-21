import Sidenav from '../Sidenav/Sidenav'
import './createForm.css'
import React, { useState } from 'react';
import HeaderDash from '../Header/HeaderDash';




function CreateForm() {

    const [poNumber, setPoNumber] = useState('');
    const [vendorName, setVendorName] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can handle the form data, for example, send it to an API or process it further.
      console.log('Purchase Order Submitted:', { poNumber, vendorName, quantity });
    };

  return (
 <section className='form-component'>
<HeaderDash/>
    <div className='form-container'>
  <Sidenav/>
    </div>
   
   <div className='form-section-ctr'>
   
   <div className='form-section'>
 <h1>Purchase Order</h1>
   <form onSubmit={handleSubmit}>
      <label>
        PO Number:
        <input type="text" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Vendor Name:
        <input type="text" value={vendorName} onChange={(e) => setVendorName(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
   </div>
   </div>

    </section>
  )
}

export default CreateForm
