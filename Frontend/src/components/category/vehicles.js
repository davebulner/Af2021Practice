import React, { Component } from 'react'
import axios from 'axios'

class Vehicles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/category/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ vehicles: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })

    }

    render() {
        return (
            <div className="container">

                <h1>category vehicles</h1>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index) => (
                    <div key={index} className="card text-dark bg-info mb-3">
                        <h4 className="card-header">Vehicle Code: {item.name}</h4>
                        <h5>Vehicle Model: {item.model}</h5>
                        <h5>Vehicle Type: {item.type}</h5>
                        <h5>Vehicle Name: {item.name}</h5>
                    </div>
                ))}
            </div>
        )
    }
}


export default Vehicles