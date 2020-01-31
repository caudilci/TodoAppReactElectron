import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        task: '',
        description: ''
    }
    handleChangeTask = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    handleChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task: '',
            description: ''
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="Task" type="text" name="task" onChange={this.handleChangeTask} value={this.state.task}/>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Description" type="text" name="description" onChange={this.handleChangeDescription} value={this.state.description}/>
                        </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
// onChange={this.handleChange} value={this.state.task}
export default AddTodo