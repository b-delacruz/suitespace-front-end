import React, { useState } from 'react';
import moment from 'moment';
import ArrowBackIcon from '@mui/icons-material/ChevronLeft';
import Calendar from '../../pages/Calendar/Calendar'
import Scheduler from '../../pages/Scheduler/Scheduler';
import './SideBar.css'
import { ChevronRight } from '@mui/icons-material';

const SideBar = ({ open, handleSideBarOpen, handleSideBarClose }) => {
  const [value, setValue] = useState(moment())
  
  function currentYear() {
    return value.format('YYYY')
  }
  return ( 
    <>
      <div className='sidebar-container | h-screen flex justify-start flex-col items-center gap-14' style={open ? {diplay: 'block'} : {display: 'none'}}>
        <div className='toggle-sidebar | fixed flex justify-center items-center group' onClick={open ? () => handleSideBarClose() : () => handleSideBarOpen()}>
          <ChevronRight fontSize='large'/>
          <span className='sidebar-tooltip | group-hover:scale-100 scale-0'>Close Sidebar</span>
        </div>
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