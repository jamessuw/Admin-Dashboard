import Sidenav from '../Sidenav/Sidenav'
import './createForm.css'
import React, { useState } from 'react';
import HeaderDash from '../Header/HeaderDash';




function CreateForm() {

  

  return (
 <section className='form-component'>
<HeaderDash/>
    <div className='form-container'>
  <Sidenav/>
    </div>
   

   <div className='container-2'>
   <div className='create-form'><button>Create Form</button></div>
   <div className='table-container'>
    <table>
        <tr>
            <th>No</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>unit</th>
            <th>Unit price</th>
            <th>total price</th>
        </tr>
        <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
        </tr>
    </table>
   </div>
   

   
  
   </div>

    </section>
  )
}

export default CreateForm
