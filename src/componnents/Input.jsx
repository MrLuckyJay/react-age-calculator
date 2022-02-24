import React from 'react'
import classes from './Input.module.css'
import {useState} from 'react'

function Input({func}) {
    const [name, setName] = useState('')
    const [dob, setDob] = useState(0)
    const [cry, setCry] = useState(0)
  return (
    <div>
        <input onChange={event=>setName(event.target.value)}  className={classes.ipt}  type="text" placeholder='Please Enter Your Name' /><br />
        <input onChange={event=>setDob(event.target.value)} className={classes.ipt}  type="text" placeholder='Please Enter Your Date of Birth' /><br />
        <input onChange={event=>setCry(event.target.value)}  className={classes.ipt} type="text" placeholder='Please Enter the current Year' /><br />
        <button onClick={()=>func(name,dob,cry)} className={classes.btn} type='button'>Calculate</button>
    </div>
  )
}

export default Input