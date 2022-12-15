import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state ={
      name:'',
      username:'',
      email:'',
      password:''
    }
    this.changeName =this.changeName.bind(this)
    this.changeEmail =this.changeEmail.bind(this)
    this.changeUsername =this.changeUsername.bind(this)
    this.changePassword =this.changePassword.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  changeName(event){
    this.setState({
      name:event.target.value
    })
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){
    //prevents site from reloading
    event.preventDefault()

    const registered = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:4000/app/signup' , registered)
      .then(response => console.log(response.data))

      //if we had anothing page window.location = '/home'
      this.setState({
          name:'',
          username:'',
          email:'',
          password:''

      })
  }

    render() {
      return (
        <div>
          <div className='container'>
            <div className='form-div'>
              <form onSubmit={this.onSubmit}>
                <input type ='text'
                placeholder='Name'
                onChange={this.changeName}
                value={this.state.name}
                className="form-control form-group"
                />
                <input type='text'
                placeholder='UserName'
                onChange={this.changeUsername}
                value={this.state.username}
                className="form-control form-group"
                />
                 <input type='text'
                placeholder='Email'
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
                />
                 <input type='password'
                placeholder='Password'
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
                />

                <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
              </form>
            </div>
          </div>
        </div>
       )
    }
}

export default App
