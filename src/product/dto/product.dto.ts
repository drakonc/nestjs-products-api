export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly imagenURL: string;
    readonly price: number;
    readonly createdAt: Date;
}