import * as mongoose from 'mongoose'

const helperschema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    skills: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 }
})

export type Helper = mongoose.InferSchemaType<typeof helperschema>
export const Helper = mongoose.model("Helper", helperschema)