import Sidenav from '../Sidenav/Sidenav'
import './createForm.css'
import React, { useState } from 'react';
import HeaderDash from '../Header/HeaderDash';
import PurchaseOrderForm from './PurchaseOrderForm';

function CreateForm() {

const [showPopUp, setShowPopUp] = useState(false);

const togglePopUp = () => {
setShowPopUp(!showPopUp);
};

const [formData, setFormData] = useState([]);
const [itemData, setItemData] = useState({});

const handleItemInputChange = (item) => {
setItemData(item); // Update the item data when input fields change
};

const handleFormSubmit = () => {
setFormData([...formData, itemData]); // Add the item data to the form data
};

return (
<section className='form-component'>
    <HeaderDash />
    <div className='form-container'>
        <Sidenav />
    </div>

    <div className='container-2'>

        <div className='create-form'>
            <button onClick={togglePopUp}>Create Form</button>
        </div>

        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Cost per Unit</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.no}</td>
                        <td>{data.description}</td>
                        <td>{data.quantity}</td>
                        <td>{data.unit}</td>
                        <td>{data.costPerUnit}</td>
                        <td>{data.totalPrice}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
    <div className='pop-up-create-form'>
        {showPopUp && (
        <div className='modal-overlay'>
            <div className='modal'>
                <span className='close' onClick={togglePopUp}>&times;</span>
                <PurchaseOrderForm onInputChange={handleItemInputChange} onSubmit={handleFormSubmit} />
                {/* Additional form elements can be added here */}
            </div>
        </div>
        )}
    </div>

</section>
)
}

export default CreateForm