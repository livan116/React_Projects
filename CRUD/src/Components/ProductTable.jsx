// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Styles.css'
export default function ProductTable({students,Delete,update}) {
  return (
    <>
    <div className='container2'>
      <table className='table'>
      <thead>
        <tr>
            <th>Student Name</th>
            <th>Roll no</th>
            <th>Email</th>
            <th>Phone no</th>
            <th className='empty'>Options</th>
        </tr>
      </thead>
      <tbody>
      {students.length > 0 &&(
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollno}</td> 
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>
                  <div className='btns'>
                    <button onClick={()=>update(student,index)}>Edit</button>
                    <button onClick={()=>Delete(index)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          )}
      </tbody>
        
      </table>
    </div>
    </>
  )
}
