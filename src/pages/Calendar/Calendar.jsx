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

const Calendar = ({ value, setValue }) => {
  //* State
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    setCalendar(renderCalendar(value))
  }, [value])

  function isSelected(day) {
    return value.isSame(day, 'day')
  }
  function isToday(day) {
    return day.isSame(new Date(), 'day')
  }
  let startOfMonth = value.clone().startOf('month')
  let endOfMonth = value.clone().endOf('month')

  function dayStyles(day) {
    if (isToday(day)) return 'today' 
    if (isSelected(day)) return 'selected'
    if (day.isBefore(startOfMonth)) return 'before-month'
    if (day.isAfter(endOfMonth)) return 'after-month'
    return ''
  }

  function currentMonth() {
    return value.format('MMMM')
  }

  function handlePrevMonth() {
    return setValue(value.clone().subtract(1, 'month').startOf('month'))
  }

  function handleNextMonth() {
    setValue(value.clone().add(1, 'month').startOf('month'))
  }

  function handleCurrentDay() {
    return setValue(moment())
  }
  
  return (
    <>
      <div className='calendar | flex justify-center items-center'>
        <div className='calendar-header | flex justify-between items-center text-2xl'>
          <div className='flex gap-6'>
            <h1>
              {currentMonth()} 
            </h1>
            <button className='calendar-today-button | flex justify-center items-center text-base rounded px-5' onClick={() => handleCurrentDay()}>
              Today
            </button>
          </div>
          <div className='calendar-button-container | flex'>
            <button className='flex justify-end' onClick={() => handlePrevMonth()}>
              <ChevronLeftIcon fontSize='large' />
            </button>
            <button className='flex justify-end' onClick={() => handleNextMonth()}>
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
              // set current day on next month to first day of month
            )}
          </div>
        )}
        </div>
      </div>
    </>
  )
}

export default Calendar 