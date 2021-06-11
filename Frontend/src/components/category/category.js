import React, { Component } from 'react'
import axios from 'axios'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/category/')
            .then(response => {
                this.setState({ categories: response.data.data })

            })
    }

    navigateToVehiclesPage(e, categoryId) {
        window.location = `/${categoryId}`
    }

    render() {
        return (
            <div className="container">
                <h1>Categories</h1>
                {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
                    <div key={index} className="card text-dark bg-warning mb-3">
                        <div className="card-header" onClick={e => this.navigateToVehiclesPage(e, item._id)}>Category</div>
                        <h5>Category Type: {item.type}</h5>
                        <h5>Amount:  {item.amount}</h5>
                    </div>
                ))}

            </div>
        )
    }
}

export default Category