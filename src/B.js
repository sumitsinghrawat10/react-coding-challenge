import React, { useContext } from 'react'
import { Data } from './App'
const B = () => {
    const FirstName= useContext(Data)
  return (
    <div>
        {FirstName}
    </div>
  )
}

export default B