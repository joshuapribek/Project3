import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

class Loginform extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            password:'',
            instrument:'',
            location:'',


        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeInstrument = this.changeInstrument.bind(this)
        this.changeLocation = this.changeLocation.bind(this)

    }




    changeName(event){
        this.setState({
            name:event.target.value
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
    changeInstrument(event){
        this.setState({
            instrument:event.target.value
        })
    }
    changeLocation(event){
        this.setState({
            location:event.target.value
        })
    }

onSubmit(event){
event.preventDefault()
}
    render(){
        return(
<div>
    <div className='container mt-3'>
        <div className='form-div'>
            <form onSubmit={this.onSubmit}>
                <input type = 'text'
                placeholder='name'
                onChange={this.changeName}
                value={this.state.name}
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

                <input type = 'text'
                placeholder='Instrument'
                onChange={this.changeInstrument}
                value={this.state.instrument}
                className='form-control form-group'
                />

                <input type = 'text'
                placeholder='Location'
                onChange={this.changeLocation}
                value={this.state.location}
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