const AddScheduleItem = ({ value }) => {
  return (
    <>
      <form action="" className="flex flex-col gap-6 pt-4">
        <div className="flex justify-between w-full gap-6">
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="">Time</label>
            <input type="time" />
            <p className="opacity-70 text-sm">Example: 9:00AM</p>
          </div>
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="">Catagory</label>
            <input type="text" />
            <p className="opacity-70 text-sm">Example: Meeting</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Description</label>
          <input type="text" />
          <p className="opacity-70 text-sm">Example: Discussing brand identity</p>
        </div>
      </form>
    </>
  )
}

export default AddScheduleItem;