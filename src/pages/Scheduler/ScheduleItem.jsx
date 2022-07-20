import { useState } from "react"
import moment from "moment"

const ScheduleItem = ({ value, event }) => {

  return (
    <>
      <div className="schedule-item | flex w-full justify-between items-start">
        <h1 className="schedule-item-time | text-lg self-center">{moment(`${event.time}`, 'hh:mm').format('h:mm A')}</h1>
        <div className="schedule-item-divider-container | flex items-center justify-center">
          <div className="schedule-item-vertical-line"></div>
        </div>
        <div className="schedule-item-description">
          <h2 className="schedule-item-category | text-sm" >{event.category}</h2>
          <h1 className="schedule-item-event-name | text-base">
            {event.description}
          </h1>
        </div>
      </div>
    </>
  )
}

export default ScheduleItem