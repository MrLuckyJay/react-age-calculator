import React from 'react'
import classes from './Output.module.css'

function Output({title}) {
  return (
    <div>
        <h1 className={classes.opt}>{title}</h1>
    </div>
  )
}

export default Output