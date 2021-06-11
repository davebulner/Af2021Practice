import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    vehicle: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicle' }]

})

const category = mongoose.model('category', CategorySchema)
export default category
