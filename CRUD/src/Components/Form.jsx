// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Styles.css'
import ProductTable from "./ProductTable";

export default function Form() {
    const[student,setStudent] = useState({name:'',rollno:'',email:'',mobile:''});
    const[stdDetails,setStdDetails] = useState([]);

    const[edit,setEdit] = useState(null);

    function handleChange(e){
      const {name,value} = e.target;
      setStudent({
        ...student,
        [name]:value
      });
    };
    
    function handleSubmit(e){
      e.preventDefault();
      if(edit != null){
        const updateDetails = [...stdDetails];
        updateDetails[edit] = student;
        setStdDetails(updateDetails);
        setEdit(null);
      }
      else{
        setStdDetails([...stdDetails,student]); 
      }
      
      setStudent({
        name:'',
        rollno:'',
        email:'',
        mobile:''
      });
    }
    function handleUpdate(item,index){
      setStudent(item)
      setEdit(index)
    }

    function handleDelete(index){
      const update = stdDetails.filter((_,i)=> i !== index);
      setStdDetails(update);
    }
  return (
    <>
    <div className="header">CRUD APP</div>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <br />
        <input type="text" name="name" value={student.name} onChange={handleChange} required/> <br />
        <br />
        <label>Roll No</label>
        <br />
        <input type="text" name="rollno" value={student.rollno} onChange={handleChange} required/>
        <br />
        <br />
        <label>Email</label>
        <br />
        <input type="email" name="email" value={student.email} onChange={handleChange} required/>
        <br />
        <br />
        <label>Phone no</label>
        <br />
        <input type="number" name="mobile" value={student.mobile} onChange={handleChange} />
        <br />
        <br />
        <div className="buttons">
        <button className="submit" type="submit">submit</button>
        <button className="submit">Reset</button>
        </div>
      </form>
    </div>
    <ProductTable Delete = {handleDelete} update={handleUpdate}
    students = {stdDetails} />
    </>
  );
}
