import { Document } from 'mongoose';

export class Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly imagenURL: string;
    readonly price: number;
    readonly createdAt: Date;
}