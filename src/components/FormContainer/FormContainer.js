import React, { Component } from 'react';
import './FormContainer.css';
import FormComponent from '../FormComponent/FormComponent'


export default class Form extends Component {
    constructor () {
        super ()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            country: "Choose a country",
            isKosher: false,
            isLactoseFree: false,
            isVeget: false

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
                this.setState({[name]: checked}) :
                this.setState({[name]: value})
    }

    
    

    render () {
        return (
            <div> 
                <FormComponent handleChange={this.handleChange}
                                data={this.state}/>
            </div>
        )
    }
}