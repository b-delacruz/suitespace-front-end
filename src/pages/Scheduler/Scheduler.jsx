import { useState } from 'react';
import ScheduleItem from './ScheduleItem';
import './Scheduler.css'

const Scheduler = ({ value }) => {
  return (
    <div className='scheduler'>
      <div className='scheduler-header | flex gap-6 items-center'>
        <h1 className='scheduler-date-display | text-lg'>
          {value.format('MMMM DD YYYY')}
        </h1>
        <button className='scheduler-add-event-button | flex justify-center items-center text-base rounded px-5'>
          Add Event
        </button>
      </div>

    {/* Map over this for how ever many schedule items exist in state */}
      <ScheduleItem />
      
    </div>
  )
}

export default Scheduler
