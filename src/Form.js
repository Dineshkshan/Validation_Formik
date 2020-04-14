import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Form.css';
function Form(props) {
    const { handleChange, handleSubmit, errors, values, handleBlur } = props
    return (
        <form onSubmit={handleSubmit}>
        <div className="container mt-4">
     <div className="jumbotron">
       <div className="form-group">
     <label>First Name:</label>
     <input
     type="text"
     name="FirstName"
     className={errors.FirstName ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.FirstName}
     />
     {errors.FirstName ? (<div className="text-danger">{errors.FirstName}</div>):null}
     </div>
     <div className="form-group">
     <label>Second Name:</label>
     <input
     type="text"
     name="SecondName"
     className={errors.SecondName ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.SecondName}
     />
    {errors.SecondName ? (<div className="text-danger">{errors.SecondName}</div>):null}
     </div>
     <div className="form-group">
     <label>Phone Number:</label>
     <input
     type="text"
     name="PhoneNumber"
     className={errors.PhoneNumber ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.PhoneNumber}
     />
    {errors.PhoneNumber ? (<div className="text-danger">{errors.PhoneNumber}</div>):null}
     </div>
     <div className="form-group">
     <label>Password:</label>
     <input
     type="password"
     name="Password"
     className={errors.Password ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.Password}
     />
    {errors.Password ? (<div className="text-danger">{errors.Password}</div>):null}
     </div>
     <div className="form-group">
     <label>Confirm Password:</label>
     <input
     type="password"
     name="ConfirmPassword"
     className={errors.ConfirmPassword ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.ConfirmPassword}
     />
    {errors.ConfirmPassword ? (<div className="text-danger">{errors.ConfirmPassword}</div>):null}
     </div>
     <div>
       <Button type="submit">Register</Button>
       </div>
     </div>
     </div>
     </form>
    );
  }
  
export default Form;