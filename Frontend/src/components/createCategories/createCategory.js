import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'



const initialState = {
    categoryType: '',
    amount: 0,
    vehicle: [],
    options: [],
    selectedVehicles: []


}

class CreateCategory extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onVehicleSelect = this.onVehicleSelect.bind(this)
        this.state = initialState
    }



    componentDidMount() {
        axios.get('http://localhost:5000/api/vehicle')
            .then(response => {
                this.setState({ vehicle: response.data.data }, () => {
                    let data = []
                    this.state.vehicle.map((item, index) => {
                        let vehicles = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(vehicles)
                    })
                    this.setState({ options: data })
                })
            })
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onVehicleSelect(e) {
        this.setState({ selectedVehicles: e ? e.map(item => item.value) : [] })
    }


    onSubmit(e) {
        e.preventDefault()
        let category = {
            type: this.state.categoryType,
            amount: this.state.amount,
            vehicle: this.state.selectedVehicles
        }
        console.log('Data to send', category)
        axios.post('http://localhost:5000/api/category/createCategory/', category)
            .then(response => {
                alert('Category inserted sucessfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Add Category</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="categoryType" className="form-label">Category Type</label>
                        <input type="text"
                            className="form-control"
                            id="categoryType"
                            name="categoryType"
                            value={this.state.categoryType}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="text"
                            className="form-control"
                            id="amount"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                        />
                    </div>
                    <Select
                        options={this.state.options}
                        onChange={this.onVehicleSelect}
                        className="basic-multi-select"
                        isMulti

                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCategory
