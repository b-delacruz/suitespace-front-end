import './Calendar.css'
import { useEffect, useState } from 'react'
import { daysOfWeek, result, currentDay, monthArray, monthsInYear, currentMonth} from './CalendarData.js'

const Calendar = (props) => {
  //* STATE //
  const [year, setYear] = useState(2022)
  const [month, setMonth] = useState(monthsInYear[currentMonth])
  const [day, setDay] = useState(currentDay)
  const [daysInMonth, setDaysInMonth] = useState([])

  function handleMonthForward () {
    setMonth(monthsInYear[currentMonth + 1])
  }
  return (
    <>
      <div className="border flex h-80 justify-start items-center flex-col w-screen gap-3 | calendar-container">
        <header className="calendar-header | flex justify-between items-center ">
          <h1 className="text-xl">Calendar</h1>
          <h1 className="text-xl">{year}</h1>
        </header>
        {/* Make Calendar-Dates Component */}
        <main className='calendar-body | border bg-slate-50 rounded-md'>
          <div className='calendar-body-header | flex justify-between py-2 px-5 border-b-4'>
            <h1 className="text-xl">{month.title}</h1>
            <div className='calendar-button-header-container | flex gap-2'>
              <button className='bg-slate-400 rounded-md px-2'>Left</button>
              <button className='bg-slate-400 rounded-md px-2' onClick={() => handleMonthForward()}>Right</button>
            </div>
          </div>
          {/* CALENDAR BODY  */}
          <div className='day-of-week | pt-2 pb-5 text-center'>
            {daysOfWeek.map((day, idx) => 
              <div key={idx}>{day.title}</div>
            )}
          </div>
          <div className='date-grid'>
            {monthArray.map((day, idx) =>
              currentDay === day ? 
              <button key={idx} className='bg-slate-300'>{day}</button>
              : 
              <button key={idx}>{day}</button>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default Calendar