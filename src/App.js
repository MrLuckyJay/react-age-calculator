import './App.css'
import Input from './componnents/Input'
import Output from './componnents/Output'
import {useState} from 'react'
function App(){
  const [title,setTitle] = useState('Welcome to My Age Calculator')

  function calc(name,dob,cry){
    if(name === ""){
      setTitle('Please Enter a Valid Name')
    }else if(dob === "" || dob <= 0){
      setTitle('Please Enter a Date of Birth')
    }else if(cry ==="" || cry <= 0){
      setTitle('Pleas Enter the current Year')
    }else{
      const age = cry - dob

      setTitle(`My Name is ${name} and i am ${age} years Old`)
    }
  }


  return<>
<div className='frm'>
<Output title={title}/>
  <Input func={calc}/>
</div>
  </>
}

export default App