import React, { Component } from 'react'
import axios from 'axios'

class Vehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/vehicle')
            .then(response => {
                console.log('data', response.data)
                this.setState({ vehicle: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Vehicles</h1>
                {this.state.vehicle.length > 0 && this.state.vehicle.map((item, index) => (
                    <div key={index} className="card text-white bg-dark mb-3">
                        <h4 className="card-header">Vehicle</h4>
                        <h5>Vehicle Code: {item.code} </h5>
                        <h5>Vehicle Model: {item.model} </h5>
                        <h5>Vehicle type: {item.type} </h5>
                        <h5>Vehicle Name: {item.name} </h5>

                    </div>
                ))}
            </div>
        )
    }
}

export default Vehicle