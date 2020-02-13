import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    imagenURL: String,
    price: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});