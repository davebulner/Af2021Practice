import Vehicle from '../models/vehicleModel.js'

const createVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body)
        vehicle.save()
            .then(data => {
                res.status(200).send({ data: data })
            })
            .catch(error => {
                res.status(500).send({ error: error.massage })
            })
    }
}

const getAllVehicles = async (req, res) => {
    await Vehicle.find({}).populate('category', 'type, amount')
        .then(data => {
            res.status(200).send({ data: data })
        })
        .catch(error => {
            res.status(500).send({ error: error.massage })
        })
}



export { createVehicle, getAllVehicles }
