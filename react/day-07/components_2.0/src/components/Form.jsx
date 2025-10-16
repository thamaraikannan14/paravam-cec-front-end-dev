import React from 'react'

export default function Form({text,value,arr}) {
  return (
    <div><h1>Form For Login </h1>
    <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" placeholder="PLZ Enter The Name" /><br />
        <label htmlFor="">Email</label>
        <input type="email"  name="email" id="email" placeholder='Enter the email'/>
        <h1>{text}</h1>
        <input type="number" value={value}/>
        <h1>{arr}</h1>
            </form></div>
  )
}
