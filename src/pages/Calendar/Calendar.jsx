//* React
import { useState, useEffect } from 'react';
//* Data
import { daysOfWeek, renderCalendar } from './CalendarData';
//* CSS
import './Calendar.css'
//* Package Imports
import moment from "moment";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Calendar = (props) => {
  //* State
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())

  useEffect(() => {
    setCalendar(renderCalendar(value))
  }, [value])

  function isSelected(day) {
    return value.isSame(day, 'day')
  }
  function isToday(day) {
    return day.isSame(new Date(), 'day')
  }
  const startOfMonth = moment().startOf('month')
  const endOfMonth = moment().endOf('month')

  function dayStyles(day) {
    if (isSelected(day) && !isToday(day)) return 'selected'
    if (isToday(day)) return 'today'
    if (day.isBefore(startOfMonth)) return 'before-month'
    if (day.isAfter(endOfMonth)) return 'after-month'
  }

  console.log(moment().month('July'))
  
  return (
    <>
      <div>
        Calendar
      </div>
      <div className='calendar | flex justify-center items-center'>
        <div className='calendar-header | flex justify-between items-center text-2xl'>
          <div>July</div>
          <div className='calendar-button-container | flex'>
            <button className='flex justify-end'>
              <ChevronLeftIcon fontSize='large' />
            </button>
            <button className='flex justify-end'>
              <ChevronRightIcon fontSize='large'/>
            </button>
          </div>
        </div>
        <div className='calendar-days-of-week | flex justify-around items-center'>
          {daysOfWeek.map((day, idx) => 
            <div key={idx} className='flex'>{day}</div>
          )}
        </div>
        <div className='calendar-body | flex justify-center items-center'>
        {calendar.map((week, index) => 
          <div className='week | flex justify-center items-center' key={index}>
            {week.map((day, idx) => 
              <div className='day | flex justify-around items-center' onClick={() => setValue(day)} key={idx}>
                <span className={dayStyles(day)} id='day'>
                  {day.format('D')}
                </span>
              </div>  
            )}
          </div>
        )}
        </div>
      </div>
    </>
  )
}

export default Calendar 