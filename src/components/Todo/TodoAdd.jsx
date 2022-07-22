import { useState, useEffect, useRef } from "react";

const TodoAdd = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: new Date(Date.now()).toISOString().slice(0, 10),
  });
  const [validForm, setValidForm] = useState(false);
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const formElement = useRef();
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddTodo(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        ref={formElement}
        className="flex flex-col gap-6 "
      >
        <div className="flex flex-col gap-2">
          <label>
            Due Date <span>*</span>
          </label>
          <input
            className="input-item"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Title</label>
          <input
            className="input-item"
            name="title"
            type="text"
            value={formData.title}
            required
            onChange={handleChange}
            placeholder='Dog'
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <input
            className="input-item"
            name="description"
            type="text"
            value={formData.description}
            required
            placeholder='Take to the park'
            onChange={handleChange}
          />
        </div>
        <button
          className="modal-button submit | rounded text-white"
          onClick={() => handleSubmit()}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
