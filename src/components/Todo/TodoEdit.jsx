import { useState, useEffect, useRef } from "react";

function EditTodo(props) {
  const [formData, setFormData] = useState(props.todo);
  const [validForm, setValidForm] = useState(true);
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const formElement = useRef();
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [props.formData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUpdateTodo(formData);
  };

  return (
    <>
      <form
        autoComplete="off"
        className="flex flex-col gap-6"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name-input">Due Date</label>
          <input
            className="input-item"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Title</label>
          <input
            className="input-item"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <input
            className="input-item"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex w-full justify-between">
          <button className="modal-button submit | rounded">SUBMIT</button>
          <button
            className="modal-button danger | rounded"
            onClick={() => props.handleDeleteTodo(props.todo._id)}
          >
            DELETE
          </button>
        </div>
      </form>
    </>
  );
}

export default EditTodo;
