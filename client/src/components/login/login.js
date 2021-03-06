import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class Loginform extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:'',



        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)



    }




    changeName(event){
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
event.preventDefault()

const registered = {
    username: this.state.username,
    email:this.state.email,
    password:this.state.password,
}

axios.post('http://localhost:3006/api/signup', registered)
.then(response => console.log(response.data))

    // window.location = '/artistfind'

    this.setState({
             name:'',
            email:'',
            password:'',
    })

}
    render(){
        return(
<div className='mt-3'>
    <br></br>    <br></br>
    <br></br>
    <br></br>

    <div className='container mt-3'>
        <div className='form-div'>
            <form onSubmit={this.onSubmit}>
                <input type = 'text'
                placeholder='Username'
                onChange={this.changeName}
                value={this.state.username}
                className='form-control form-group'
                />

                <input type = 'text'
                placeholder='Email'
                onChange={this.changeEmail}
                value={this.state.email}
                className='form-control form-group'
                />

                <input type = 'text'
                placeholder='Password'
                onChange={this.changePassword}
                value={this.state.password}
                className='form-control form-group'
                />


                <input type = 'submit' className='btn btn-danger btn-block' value='submit'
                />
            </form>
        </div>
    </div>
</div>
        )
    }
}

export default Loginform