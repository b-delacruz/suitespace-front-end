//* React Hooks *//
import { useState, useRef, useEffect } from "react";

const AddScheduleItem = ({ date, handleAddEvent }) => {
  //* State *//
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    location: "",
    date: "",
    time: "",
  });

  //* useRef *//
  const formElement = useRef();

  //* useEffect *//
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  //* Functions *//
  const handleChange = (evt) =>
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddEvent(formData);
  };

  return (
    <>
      <form
        ref={formElement}
        className="flex flex-col gap-6 pt-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between w-full gap-6">
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="time-input">
              Time <span>*</span>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              required
              onChange={handleChange}
            />
            <p className="opacity-70 text-sm">Example: 9:00AM</p>
          </div>
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="category-input">
              Catagory <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Work"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <p className="opacity-70 text-sm">Example: Meeting</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description-input">
            Description <span>*</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Choosing between two colors"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <p className="opacity-70 text-sm">
            Example: Discussing brand identity
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location-input">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <p className="opacity-70 text-sm">Example: Remote</p>
        </div>
        <input
          type="text"
          hidden
          name="date"
          value={(formData.date = date.format("MMMM DD YYYY"))}
        />
        <button
          className="modal-button submit | rounded"
          onClick={() => handleSubmit()}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default AddScheduleItem;
