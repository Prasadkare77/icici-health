import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        // endDate: new Date().setMonth(11)
    })

    const handleValueChange = (newValue) => {
        console.log(`Newvalue: ${newValue}`)
        setValue(newValue);
    }

  return (
    <div>
        <Datepicker 
            value={value} 
            onChange={handleValueChange} 
            showShortcuts={true} 
        /> 
    </div>
  )
}

export default DatePicker