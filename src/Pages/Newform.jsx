import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'

export default function Newform() {
  return (

    <div>
    <div className="newFormContainer">
    <div className='newForm'>
        <div className='newHeader'>
                  <div class="form-icon">
          <i class="fas fa-seedling"></i>
        </div>
          <h2>  Add New Income Or Expense </h2>
        </div>
        
  <Form>  
    <div className='newformgrid'>
 <div className="formRow">
        <label>Date:</label>
            <Form.Control
      type="date"
      placeholder=""
    />
    </div>

   <div className="formRow">
        <label>Type:</label>
        <Form.Select>
          <option>Select Type</option>
          <option>Income</option>
          <option>Expense</option>
        </Form.Select>
     
    </div>

  


  <div className="formRow">
    <label>Name :</label>
    <Form.Control
      type="text"
      placeholder="Enter name"
    />
  </div>

  <div className="formRow">
    <label>Category :</label>
    <Form.Select>
      <option>Select category</option>
      <option>Bill</option>
      <option>Food</option>
      <option>App</option>
      <option>Medicine</option>
      <option>Others</option>
    </Form.Select>
  </div>


  <div className="formRow">
    <label>Value :</label>
    <Form.Control
      type="number"
      placeholder="Enter value"
    />
  </div>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</div>  
</Form>
    </div>
    </div>
    </div>
  )
}
