import { useState, useEffect } from 'react';
import './Calendar.css'
import moment from "moment";
import renderCalendar from './CalendarData';

const Calendar = (props) => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  
  useEffect(() => {
    setCalendar(renderCalendar(value))
  }, [value])

  function isSelected(day) {
    return value.isSame(day, 'day')
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), 'day')
  }

  function isToday(day) {
    return day.isSame(new Date(), 'day')
  }

  function dayStyles(day) {
    if (beforeToday(day)) return 'before'
    if (isSelected(day) && !isToday(day)) return 'selected'
    if (isToday(day)) return 'today'
  }

  return (
    <>
      <div>
        Calendar
      </div>
      <div className='calendar'>
        {calendar.map(week => 
          <div className='week'>
            {week.map(day => 
              <div className='day' onClick={() => setValue(day)}>
                <span className={dayStyles(day)}>
                  {day.format('D')}
                </span>
              </div>  
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Calendar 