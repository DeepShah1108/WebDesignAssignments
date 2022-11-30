import React from 'react'
import {  formatDay, formatTime } from '../services/weather'

// import { formatTime } from '../services/weather'

const AreaTime = ({weather: {dt, timezone, name, country}}) => {
    
    
  return (
    <div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium my-3'>
                {`${name}, ${country}`}
            </p>
        </div>

        <div className='flex items-center justify-center'>
            <p className='text-white text-lg font-light'>
                {formatDay(dt, timezone)}
               
            </p>
        </div>
        <div className='flex items-center justify-center mt-1'>
            <p className='text-white text-lg font-light'>
                {formatTime(dt, timezone)}
            </p>
        </div>
    </div>
    
  )
}

export default AreaTime

