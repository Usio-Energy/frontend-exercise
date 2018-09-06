import React from 'react'

class Footer extends React.Component {

  render() {

    let completed = 0;

    let getCompletedTasks = (val) => {
      val.forEach(e => {
        if(e.completed === true) {
          completed ++;
        }
      });
    }  

    getCompletedTasks(this.props.todos)

    return (
      <p className='footer'>
        <strong>{completed} out of {this.props.todos.length} tasks completed</strong>
      </p>
    )
  }
}

export default Footer;