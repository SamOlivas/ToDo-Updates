import React, { Component } from 'react'
import todosAPI from './todos-api'
import FormBuilder from './ToDoForm'

export default class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await todosAPI.post('/todos', this.state)
      this.props.addTodo(data)
      this.setState({
        taskName: '',
        assignee: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <FormBuilder handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
    );
  }
}
