import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
    code: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'category' }]

})

const vehicle = mongoose.model('vehicle', vehicleSchema)
export default vehicle
