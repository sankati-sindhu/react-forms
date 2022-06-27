import React, { Component } from 'react'
import './Forms.css';

export class Forms extends Component {
    constructor(props){
        super(props)

        this.state = {
            snapSystem: '',
            snapLabel: '',
            publishSystemId: '',
            region: 'AMER',
            appAPAC: 'N',
            appEMEA: 'N',
            appAMER: 'N',
            activationStory: '',
            lastUpdatedUser: ''
        }
    }
    handleSnapSystem = (event) => {
        this.setState({
            snapSystem: event.target.value
        })
    }
    handleSnapLabel = (event) => {
        this.setState({
            snapLabel: event.target.value
        })
    }
    handlePublishSystemId = (event) => {
        this.setState({
            publishSystemId: event.target.value
        })
    }
    handleRegionChange = (event) => {
        this.setState({
            region: event.target.value 
        })
    }
    handleActivationStory = (event) => {
        this.setState({
            activationStory: event.target.value
        })
    }
    handleLastUpdatedUser = (event) => {
        this.setState({
            lastUpdatedUser: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        alert('A name was submitted: ' + this.state);
    }
    render() {
    return (
        <div  className='form-container' >
        <form onSubmit={this.handleSubmit}>
            <div className='form-item'>
                <label className='form-label'>
                    Snap_system:
                </label>
                <input 
                    type='text'
                    value={this.state.snapSystem}
                    onChange={this.handleSnapSystem}    
                    >
                </input>
            </div>

            <div className='form-item' >
                <label className='form-label'>
                    Snap_Label:
                </label>
                <input 
                    type='text'
                    value={this.state.snapLabel}
                    onChange={this.handleSnapLabel}    
                    >
                </input>
            </div>

            <div className='form-item'>
                <label className='form-label'>
                    Publisher System id:
                </label>
                <input 
                    type='text'
                    value={this.state.publishSystemId}
                    onChange={this.handlePublishSystemId}    
                    >
                </input>
            </div>
            
            
            <div className='form-item'>
                <label className='form-label'>
                    Region
                </label>
                <select value={this.state.region} onChange={this.handleRegionChange}>
                    <option value="APAC">APAC</option>
                    <option value="AMER">AMER</option>
                    <option value="EMEA">EMEA</option>

                </select>
            </div>

            <div className='form-item'>
                <label className='form-label'>
                    Application_for_APAC:
                </label>
                <input className='form-check-box' 
                        type="checkbox" >

                </input>
            </div>

            
            <div className='form-item'>
                <label className='form-label'>
                    Application_for_EMEA:
                </label>
                <input className='form-check-box' type="checkbox" ></input>
            </div>

            <div className='form-item'>
                <label className='form-label'>
                    Application_for_AMER:
                </label>
                <input className='form-check-box' type="checkbox" ></input>
            </div>

            <div className='form-item'>
                <label className='form-label'>
                    Activation_Story:
                </label>
                <input 
                    type='text'
                    value={this.state.activationStory}
                    onChange={this.handleActivationStory}    
                    >
                </input>
            </div>


            <div className='form-item'>
                <label className='form-label'>
                    Last_Updated_user:
                </label>
                <input 
                    type='text'
                    value={this.state.lastUpdatedUser}
                    onChange={this.handleLastUpdatedUser}    
                    >
                </input>
            </div>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
  }
}

export default Forms