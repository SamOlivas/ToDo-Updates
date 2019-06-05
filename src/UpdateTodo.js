import React, {Component} from 'react'
import FormBuilder from './ToDoForm'

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(props)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
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
  };

  render() {
    console.log(this.props.todo)
      return ( this.props.todo === {} ? (
        <p>Loading todo</p>) :
        <FormBuilder handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
    )
  };
}
