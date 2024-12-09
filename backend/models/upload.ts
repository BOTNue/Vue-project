import * as mongoose from 'mongoose'

const uploadschema = new mongoose.Schema({
    product: { type: String, required: true },
    problem: { type: String, required: true },
    description: { type: String }
})

export type Upload = mongoose.InferSchemaType<typeof uploadschema>
export const Upload = mongoose.model("Upload", uploadschema)