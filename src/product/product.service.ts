import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(id: String): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return await newProduct.save()
    }

    async deleteProduct(id: String): Promise<Product> {
        const deleteProduct = await this.productModel.findByIdAndDelete(id);
        return deleteProduct;
    }

    async updateProduct(id: String, createProductDTO: CreateProductDTO) {
        const updateProduct = await this.productModel.findByIdAndUpdate(id, createProductDTO, { new: true });
        return updateProduct;
    }

}
