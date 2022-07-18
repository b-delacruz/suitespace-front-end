const ScheduleItem = ({ value }) => {
  return (
    <>
      <div className="schedule-item | flex w-full justify-between items-start">
        <h1 className="schedule-item-time | text-lg self-center">{value.format('HH:mm A')}</h1>
        <div className="schedule-item-divider-container | flex items-center justify-center">
          <div className="schedule-item-vertical-line"></div>
        </div>
        <div className="schedule-item-description">
          <h2 className="schedule-item-category | text-sm" >Team Meeting</h2>
          <h1 className="schedule-item-event-name | text-base">
            Planning out ERD
          </h1>
        </div>
      </div>
    </>
  )
}

export default ScheduleItem