import React, { useState } from 'react';
import moment from 'moment';
import Calendar from '../../pages/Calendar/Calendar'
import Scheduler from '../../pages/Scheduler/Scheduler';
import './SideBar.css'

const SideBar = () => {
  const [value, setValue] = useState(moment())
  
  function currentYear() {
    return value.format('YYYY')
  }
  return ( 
    <>
      <div className='sidebar-container | h-screen flex justify-start flex-col items-center gap-14'>
        <div className='widget-header | text-3xl flex w-full justify-between'>
          <h1>Calendar</h1>
          <div>{currentYear()}</div>
        </div>
        <Calendar value={value} setValue={setValue} />
        <Scheduler value={value} />
      </div>
    </>
  );
}

export default SideBar;