import React from 'react'
import Navbar from './components/navBar/navBar'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateCategory from './components/createCategories/createCategory'
import CreateVehicle from './components/createVehicles/createVehicle'
import Category from './components/category/category'
import Vehicle from './components/vehicle/vehicle'
import Vehicles from './components/category/vehicles'



const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <section>
                    <Switch>
                        <Route path="/Create-Category" component={CreateCategory} />
                        <Route path="/Create-Vehicle" component={CreateVehicle} />
                        <Route path="/Vehicle" component={Vehicle} />
                        <Route path="/:id" component={Vehicles} />
                        <Route path="/" component={Category} exact />

                    </Switch>
                </section>
            </Router>
        </div>
    )
}

export default App