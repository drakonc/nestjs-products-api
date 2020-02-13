import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {

    constructor(private readonly productServices: ProductService) { }

    @Get('/')
    async getProducts(@Res() res): Promise<Product[]> {
        const products = await this.productServices.getProducts();
        if (products.length > 0)
            return res.status(HttpStatus.OK).json({ message: `Product List ${products.length}`, products });
        else
            return res.status(HttpStatus.OK).json({ message: `Product List ${products.length}`, products });
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id: String): Promise<Product> {
        const product = await this.productServices.getProduct(id);
        if (!product) //throw new NotFoundException('Product Not Fiend');
            return res.status(HttpStatus.OK).json({ message: `Product Not Fiend`, product });
        else
            return res.status(HttpStatus.OK).json({ message: `Product ${product._id}`, product });
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productServices.createProduct(createProductDTO);
        if (product != null)
            return res.status(HttpStatus.OK).json({ message: 'Product Success', product })
        else
            return res.status(HttpStatus.OK).json({ message: 'Product Error', product })
    }

}
