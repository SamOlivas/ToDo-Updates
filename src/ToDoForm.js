export default FormBuilder;
import React from 'react'

function FormBuilder(props) {
  console.log(props)
  return(
    <form onSubmit={props.handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          name="taskName"
          value={props.state.taskName}
          onChange={props.handleChange}
        />
        <label htmlFor="assignee">Assignee:</label>
        <input
          type="text"
          name="assignee"
          value={props.state.assignee}
          onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
  )
};
